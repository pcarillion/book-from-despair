import React, {useState, useEffect} from 'react'
import './summary.css'

const Summary = () => {

  
    return (
        <>  
            <div className="header">    
                <h1>From Despair to Resilience</h1>
                <h4>Women coping with the pandemic in the Middle-East and South Asia</h4>
            </div>
            <div className="summary-container">
                {/* {articles.map((i, article) => { */}
                    {/* <div>
                        <h3>{article.title}</h3>
                        <p>{article.content}</p>
                        <img src={article.image} />
                    </div> */}
                {/* })} */}
                <div class="summary-card">
                    <div class="card-img-title" style={{backgroundImage:'url(https://i.etsystatic.com/19759718/r/il/a8ad92/2412419913/il_794xN.2412419913_o0a1.jpg)'}}>
                        {/* <img src="https://i.etsystatic.com/19759718/r/il/a8ad92/2412419913/il_794xN.2412419913_o0a1.jpg"/> */}
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel metus placerat, eleifend nibh vulputate, auctor lectus.</div>
                    </div>
                    <div className="titles">
                        <h4>Chapter 1</h4>
                        <h3>Chapter's title bla bla bla</h3>
                        <h5>Read the article</h5>
                    </div>
                </div>
                <div class="summary-card">
                    <div class="card-img-title" style={{backgroundImage:'url(https://i.etsystatic.com/19759718/r/il/a8ad92/2412419913/il_794xN.2412419913_o0a1.jpg)'}}>
                        {/* <img src="https://i.etsystatic.com/19759718/r/il/a8ad92/2412419913/il_794xN.2412419913_o0a1.jpg"/> */}
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel metus placerat, eleifend nibh vulputate, auctor lectus.</div>
                    </div>
                    <div className="titles">
                        <h4>Chapter 1</h4>
                        <h3>Chapter's title bla bla bla</h3>
                        <h5>Read the article</h5>
                    </div>
                </div>
                <div class="summary-card">
                    <div class="card-img-title" style={{backgroundImage:'url(https://i.etsystatic.com/19759718/r/il/a8ad92/2412419913/il_794xN.2412419913_o0a1.jpg)'}}>
                        {/* <img src="https://i.etsystatic.com/19759718/r/il/a8ad92/2412419913/il_794xN.2412419913_o0a1.jpg"/> */}
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel metus placerat, eleifend nibh vulputate, auctor lectus.</div>
                    </div>
                    <div className="titles">
                        <h4>Chapter 1</h4>
                        <h3>Chapter's title bla bla bla</h3>
                        <h5>Read the article</h5>
                    </div>
                </div>
                <div class="summary-card">
                    <div class="card-img-title" style={{backgroundImage:'url(https://i.etsystatic.com/19759718/r/il/a8ad92/2412419913/il_794xN.2412419913_o0a1.jpg)'}}>
                        {/* <img src="https://i.etsystatic.com/19759718/r/il/a8ad92/2412419913/il_794xN.2412419913_o0a1.jpg"/> */}
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel metus placerat, eleifend nibh vulputate, auctor lectus.</div>
                    </div>
                    <div className="titles">
                        <h4>Chapter 1</h4>
                        <h3>Chapter's title bla bla bla</h3>
                        <h5>Read the article</h5>
                    </div>
                </div>
                <div class="summary-card">
                    <div class="card-img-title" style={{backgroundImage:'url(https://i.etsystatic.com/19759718/r/il/a8ad92/2412419913/il_794xN.2412419913_o0a1.jpg)'}}>
                        {/* <img src="https://i.etsystatic.com/19759718/r/il/a8ad92/2412419913/il_794xN.2412419913_o0a1.jpg"/> */}
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel metus placerat, eleifend nibh vulputate, auctor lectus.</div>
                    </div>
                    <div className="titles">
                        <h4>Chapter 1</h4>
                        <h3>Chapter's title bla bla bla</h3>
                        <h5>Read the article</h5>
                    </div>
                </div>
                <div class="summary-card">
                    <div class="card-img-title" style={{backgroundImage:'url(https://i.etsystatic.com/19759718/r/il/a8ad92/2412419913/il_794xN.2412419913_o0a1.jpg)'}}>
                        {/* <img src="https://i.etsystatic.com/19759718/r/il/a8ad92/2412419913/il_794xN.2412419913_o0a1.jpg"/> */}
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel metus placerat, eleifend nibh vulputate, auctor lectus.</div>
                    </div>
                    <div className="titles">
                        <h4>Chapter 1</h4>
                        <h3>Chapter's title bla bla bla</h3>
                        <h5>Read the article</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Summary
