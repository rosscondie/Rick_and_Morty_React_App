import React from "react";
import "./Header.css"

function Header() {
    return (
       <div>
        <aside>
           <img className="header-image"    
           src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png" 
           alt="header logo" 
           />
        </aside>
        <aside>
            <img className="logo" src={require('../components/logo.png')} alt="rick and morty vortex" />
        </aside>
       </div>
        
    )
    
}

export default Header;