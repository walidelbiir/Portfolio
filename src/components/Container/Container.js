import React from "react";
import './Container.css'
import photo from './photo.png';


const Container = ()=>{
    
    return (
        <div className="main_div">
            <div className="introduction">
                <p id="introduction_paragraph">Hi, I'm <span id="name"> Walid.</span> <br />
                A creative web designer and developer. <br />
                Based in Tunisia.
                </p>
             <div className="secondary_div">
                <div id="question" > Got a project ? </div>
                <a className="talk" href="https://www.google.com/search?q=professional+fonts&sourceid=chrome&ie=UTF-8"> Let's chat ! </a>
             </div>
            </div>
            <div className="photo">
                <img src={photo} alt="" />
            </div>
        </div>
    )
}

export default Container;