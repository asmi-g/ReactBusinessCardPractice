import React from "react"

function MainBody(){
    return(
        <body className="bodycontent">
            <h2 className="name">Asmi Gujral</h2>
            <h3 className="role">Aspiring Software Developer</h3>
            <button className="website-link"><a href="https://asmi-gujral-portfolio.netlify.app/personal-portfolio.html">Personal Website</a></button>
            <button className="button-link"><a href="asmi.gujral@gmail.com">Email</a></button>
            <button className="button-link"><a href="https://www.linkedin.com/in/asmigujral/">LinkedIn</a></button>
            <button className="button-link"><a href="https://github.com/asmi-g">GitHub</a></button>
            <h3 className="subtitle">About</h3>
            <p className="bodytext">I am an aspiring software developer, with knowledge in Javascript, React, HTML and CSS, and am continuously trying to learn more and expand my expertise where I can. I would love to connect or chat!</p>
            
        </body>
    )
}

export default MainBody