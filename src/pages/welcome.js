import React from 'react'
import './welcome.css'
import { StaticImage } from "gatsby-plugin-image"
import AniLink from "gatsby-plugin-transition-link/AniLink";


const Welcome = () => {
    return (
        <div className="welcomeContainer">
            <div className="welcomeContent">
                <div className="welcomeText">
                    <h1>From Despair to Resilience</h1>
                    <p>Women coping with the pandemic in the Middle-East and South Asia</p>
                    <p>Carol Mann</p>
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
