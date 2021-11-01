import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../components/layout'

const Intros = ({data}) => {
    const {text:{json}, type} = data.text
    // console.log(author)
    const options = {
      renderNode : {
          "embedded-asset-block": node => {
              return <div>
                  {/* <img width="400" src={node.data.target.field.file[en-US].url}/> */}
              </div>
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
            <h4>{type}</h4>
            {documentToReactComponents(json, options)}
        </Layout>
    )
}


export const query = graphql`
query($type:String){
  text:contentfulIntros(type:{eq:$type}){
    type
    text{json}
  }
}
`

export default Intros
