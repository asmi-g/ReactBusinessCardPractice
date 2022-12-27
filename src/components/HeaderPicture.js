import React from "react"
import mypic from "./mypic.jpg"

function HeaderPicture(){
    return(
        <header className="header-content">
            <img src={mypic} className="my-pic" alt="My Picture"></img>
        </header>
    )
}

export default HeaderPicture