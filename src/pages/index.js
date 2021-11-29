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
    }
`

const Welcome = () => {
    const {logoFullBlack}  = useStaticQuery(getData)

    return (
        <div className="welcomeContainer">
        <SEO />
            <div className="welcomeContent">
                <div className="welcomeText">
                    {/* <h1>From Despair to Resilience</h1>
                    <p>Women coping with the pandemic in the Middle-East and South Asia</p>
                    <p>Carol Mann</p> */}
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
                    <AniLink cover bg="black" direction="left" to={"/introduction"}><div class="enterBtn">Read the book</div></AniLink>
                </div>
                <StaticImage
                    src="../images/mainimage.jpeg"
                    width={300}
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="main image"
                    // style={{ marginBottom: `1.45rem` }}
                    class="imageWelcome"
                    />
            </div>
        </div>
    )
}

export default Welcome
