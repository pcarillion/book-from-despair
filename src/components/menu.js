import React, {useState} from 'react'
import { StaticImage } from "gatsby-plugin-image"
import {graphql, useStaticQuery} from "gatsby"
import { Link } from "gatsby"
import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";



const getData = graphql`
query  {
    logoFullWhite:contentfulAsset(title:{eq:"logo full white"}) {
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
                chapters{
                    title
                    url
                    author
                    country
                }
            }
        }
    }
}`

const Menu = () => {
    const {logoFullWhite, parts}  = useStaticQuery(getData)    

    const [isOpen, setNav] = useState(false)

    const toggleNav = () => {
        setNav(isOPen => !isOpen)
    }


    return (
        <>
        <section className={isOpen? "menu": "menu close"}>
            <div className="menubackground">
                <StaticImage
                    src="../images/mainimage.jpeg"
                    width={300}
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="main image"
                    // style={{ marginBottom: `1.45rem` }}
                    class="imagemenu"
                    />
            </div>
            <div className="menufilter"></div>
            <div className="titles">
                <div className="mobile-arrow"  onClick={toggleNav}>
                    <div className="arrow-container">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <AniLink cover bg="black" direction="left" to={"/introduction"}>
                    {/* <h1 className="menu-maintitle">Women in war publications</h1> */}
                    {/* <StaticImage 
                        src="../images/logo_full_white.svg" 
                        width={300}
                        quality={95}
                        formats={["SVG"]}
                        alt="main image"
                        // style={{ marginBottom: `1.45rem` }}
                        class="imagemenu"
                        /> */}
                    <img src={logoFullWhite.file.url} />
                    <StaticImage
                        src={logoFullWhite.file.url}
                        width={300}
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="main image"
                        // style={{ marginBottom: `1.45rem` }}
                        class="imageWelcome"
                    />
                    <p>Women in War Publications</p>
                </AniLink>
            </div>

            <ul>
                {
                    parts.edges.map((part, i) =>{
                        return <li id={part.node.url}>
                                    <AniLink cover bg="black" direction="left" to={`/${part.node.url}`}><h4>{part.node.title}</h4></AniLink>
                                    <ul>
                                    {
                                        part.node.chapters?.length > 0 && part.node.chapters.map((chapter, key) => {
                                            return <AniLink activeStyle={{fontStyle: "italic", cursor: "default", fontWeight: "bold"}} cover bg="black" direction="left" to={`/${chapter.url}`}><li key={key} className="inner-li">{chapter.country} - {chapter.author}</li></AniLink>
                                        })
                                    }
                                </ul>
                        </li>
                    })
                }
            </ul>
        </section>
        <div className="menu-mobile">
            <div className={isOpen? "menu-button hide": "menu-button"} onClick={toggleNav}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div>
                <h2>From Despair to resilience</h2>
            </div>
        </div>
        </>
    )
}

export default Menu
