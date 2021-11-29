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
    chaptersExiles: allContentfulChapter(sort:{fields:country, order:ASC}, filter:{part:{eq:"Exiles"}}) {
            edges{
                node {
                    url
                    country
                    author
                    part
                    }
                }
    }
    chaptersWarzones: allContentfulChapter(sort:{fields:country, order:ASC}, filter:{part:{eq:"Covid-19 in warzones"}}) {
            edges{
                node {
                    url
                    country
                    author
                    part
                    }
                }
    }
    chaptersDobrinja: allContentfulChapter(sort:{fields:country, order:ASC}, filter:{part:{eq:"Dobrinja: Wartime Sarajevo"}}) {
        edges{
            node {
                url
                country
                author
                part
                }
            }
    }
    chaptersWritingWars: allContentfulChapter(sort:{fields:country, order:ASC}, filter:{part:{eq:"Women Writing Wars"}}) {
        edges{
            node {
                url
                country
                author
                part
                }
            }
    }
    chaptersWartimeArt: allContentfulChapter(sort:{fields:country, order:ASC}, filter:{part:{eq:"Women's Wartime Art"}}) {
        edges{
            node {
                url
                country
                author
                part
                }
            }
    }
    chaptersCarolMann: allContentfulChapter(sort:{fields:country, order:ASC}, filter:{part:{eq:"Gender and Armed Conflict: Carol Mann's publications"}}) {
        edges{
            node {
                url
                country
                author
                part
                title
                }
            }
    }
}`

const Menu = () => {
    const {logoFullWhite, chaptersExiles, chaptersWarzones, chaptersDobrinja, chaptersWritingWars, chaptersWartimeArt, chaptersCarolMann}  = useStaticQuery(getData)

    

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
                    <p>Women coping with the pandemic in the Middle-East and South Asia</p>
                </AniLink>
            </div>
            <ul>
                <AniLink activeClass="active" cover bg="black" direction="left" to={"/"}><h4>Covid-19 in warzones</h4></AniLink>
                    {
                        chaptersWarzones.edges.map((chapter, key) => {
                            return <AniLink activeClass="active" cover bg="black" direction="left" to={`/${chapter.node.url}`}><li key={key}>{chapter.node.country} - {chapter.node.author}</li></AniLink>
                        })
                    }
                <AniLink cover bg="black" direction="left" to={"/exiles"}><h4>Exiles</h4></AniLink>
                    {
                        chaptersExiles.edges.map((chapter, key) => {
                            return <AniLink activeClass="active" cover bg="black" direction="left" to={`/${chapter.node.url}`}><li key={key}>{chapter.node.country} - {chapter.node.author}</li></AniLink>
                        })
                    }
            </ul>
            {
                chaptersDobrinja.edges.length > 0 &&
                <ul>
                    <h4>Dobrinja: Wartime Sarajevo</h4>
                        {
                            chaptersDobrinja.edges.map((chapter, key) => {
                                return <AniLink activeClass="active" cover bg="black" direction="left" to={`/${chapter.node.url}`}><li key={key}>{chapter.node.author}</li></AniLink>
                            })
                        }
                </ul>
            }
            {
                chaptersWritingWars.edges.length > 0 &&
                <ul>
                    <h4>Women Writing Wars</h4>
                        {
                            chaptersWritingWars.edges.map((chapter, key) => {
                                return <AniLink activeClass="active" cover bg="black" direction="left" to={`/${chapter.node.url}`}><li key={key}>{chapter.node.country} - {chapter.node.author}</li></AniLink>
                            })
                        }
                </ul>
            }
            {
                chaptersWartimeArt.edges.length > 0 &&
                <ul>
                    <h4>Women's Wartime Art</h4>
                        {
                            chaptersWartimeArt.edges.map((chapter, key) => {
                                return <AniLink activeClass="active" cover bg="black" direction="left" to={`/${chapter.node.url}`}><li key={key}>{chapter.node.country} - {chapter.node.author}</li></AniLink>
                            })
                        }
                </ul>
            }
            {
                chaptersCarolMann.edges.length > 0 &&
                <ul>
                    <h4>Gender and Armed Conflict: Carol Mann's publications</h4>
                        {
                            chaptersCarolMann.edges.map((chapter, key) => {
                                return <AniLink activeClass="active" cover bg="black" direction="left" to={`/${chapter.node.url}`}><li key={key}>{chapter.node.title}</li></AniLink>
                            })
                        }
                </ul>
            }
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
