import React from 'react'
import './welcome.css'
import { StaticImage } from "gatsby-plugin-image"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import SEO from '../components/seo'
import {graphql, useStaticQuery} from "gatsby"

const getData = graphql`
query  {
    logoFullBlack:contentfulAsset(title:{eq:"logo full black"}) {
        file {
          fileName
          url
        }
        title
        fluid {
          src
        }
      }
    parts: allContentfulPart{
        edges {
            node{
                title
                url
            }
        }
    }
    }
`

const Welcome = () => {
    const {logoFullBlack, parts}  = useStaticQuery(getData)

    return (
        <div className="welcomeContainer">
        <SEO />
            <div className="welcomeContent">
                <div className="welcomeText">
                    <img src={logoFullBlack.file.url} />
                    <StaticImage
                        src={logoFullBlack.file.url}
                        width={300}
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="main image"
                        // style={{ marginBottom: `1.45rem` }}
                        class="imageWelcome"
                    />
                    <h2>Women in War Publications</h2>
                    <p>The publications site of <a href="https://womeninwar.org/" className="externalLink">Women in War</a></p>
                    <ul>
                        {
                            parts.edges.map((part, i) =>{
                                return <li id={part.node.url}>- <AniLink cover bg="black" direction="left" to={`/${part.node.url}`}>{part.node.title}</AniLink></li>
                            })
                        }
                    </ul>
                </div>
                <StaticImage
                    src="../images/welcome_image.jpeg"
                    width={450}
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="main image"
                    class="imageWelcome"
                    />
            </div>
        </div>
    )
}

export default Welcome
