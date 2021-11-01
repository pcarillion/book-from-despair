/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"



const getData = graphql`
query{
    site{
      siteMetadata{
        siteTitle: title
        siteDesc: description
        author
        
      }
    }
  }
`


function SEO({ title, description}) {
 
  const {site} = useStaticQuery(getData);

  const {siteDesc, siteTitle, image} = site.siteMetadata


  return (
    <Helmet title={ title?  `${title} | ${siteTitle}` : `${siteTitle}`} htmlAttributes={{lang:"eng"}}>
            <meta name="description" content={description || siteDesc}/>
            <meta rel="icon" href={""} />
    </Helmet>
  )
}


export default SEO
