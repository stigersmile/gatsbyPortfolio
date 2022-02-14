import React from "react"
import socialLinks from "../constants/social_links"
const Footer = () => {
  return <footer className="footer">
      <div>
        <div className="footer-link social-link">
          {socialLinks.map((link)=>{
            return(
              <a href={link.url} key={link.id}
              className="social-link">
                {link.icon}
              </a>
            )
          })}
        </div>
        <h4>conpyright &copy;{new Date().getFullYear()}
        <span>WebDev</span> all  rights reserved
        </h4>
      </div>
  </footer>
}

export default Footer
