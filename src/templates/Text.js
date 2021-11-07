import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {graphql, useStaticQuery} from 'gatsby'

import SEO from "../components/seo"

const Text = ({data}) => {
    const {author, text,authorPresentation, title, country} = data.text
    // console.log(author)
    // const options = {
    //   renderNode : {
    //       "embedded-asset-block": node => {
    //           return <div>
    //               {/* <img width="400" src={node.data.target.field.file[en-US].url}/> */}
    //           </div>
    //       }
    //   },
      // to embed another post (to be completed)
        //   "embedded-entry-block": node => {
        //       const {title, image, text} = node.data.target.fields
        //       return (
        //           <div></div>
        //       )
        //   }
        console.log(data)
        const images = data.images.edges

          const options = {
            renderNode : {
              "embedded-asset-block":(node)=> {
                let file
                for (let i = 0; i < images.length; i ++){
                  if (images[i].node.contentful_id === node.data.target.sys.contentful_id){
                    file = images[i].node
                  }
                }
                return (<div className="image-in-article" ><img src={file.file.url}/> <p>{file.description}</p></div>)
              }
            }
          }
      
    return (
        <Layout>
            <SEO title={`${author} - ${country}`} description={title}/>
            <h4>{title}</h4>
            <h5>{author} - {country}</h5>
            <div>
              {documentToReactComponents(authorPresentation.json, options)}
              {documentToReactComponents(text.json, options)}
            </div>
        </Layout>
    )
}

export const query = graphql`
query($url:String){
  text:contentfulChapter(url:{eq:$url}){
    author
    authorPresentation{json}
    text{json}
    title
    country
  }
  images: allContentfulAsset{
    edges{
      node{
        contentful_id
        id
        file{url}
        description
      }
    }
  }
}
`




export default Text
