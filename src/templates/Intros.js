import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../components/layout'
import SEO from "../components/seo"

const Intros = ({data}) => {


    const {mainText:{json}, title, file} = data.text
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
      },
      // to embed another post (to be completed)
          "embedded-entry-block": node => {
              const {title, image, text} = node.data.target.fields
              return (
                  <div>
                        
                  </div>
              )
          }
    }

    return (
        <Layout>
            <SEO title={title} description={title}/>
            <h4>{title}</h4>
            {file?.file && <embed src={file.file.url} type={file.file.contentType} width="100%" height="600px" />}
            {documentToReactComponents(json, options)}
        </Layout>
    )
}


export const query = graphql`
query($url:String){
  text:contentfulPart(url:{eq:$url}){
    title
    mainText{json}
    file{
        file {
            url
            fileName
            contentType
          }
    }
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

export default Intros
