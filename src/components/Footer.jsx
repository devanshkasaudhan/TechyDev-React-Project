import React from 'react'
import "../style/Footer.scss";
export default function Footer() {
  return (
    <footer>
        <div>
            <h1>Techydev</h1>
            <p>
                @all rights reserved.
            </p>
        </div>
        <div>
            <h5>
                Follow Us
            </h5>
            <div>
                <a href="https://www.instagram.com/atpug_yahba/" target={"_blank"}>
                    <i className="fab fa-facebook-f">Instagram</i>
                </a>
                <a href="https://www.linkedin.com/in/devansh-kasaudhan-a071a4204/" target={"_blank"}>
                    <i className="fab fa-instagram">Linkedin</i>
                </a>
                <a href="https://github.com/devanshkasaudhan" target={"_blank"}>
                    <i className="fab fa-instagram">Github</i>
                </a>
            </div>
        </div>
    </footer>
  )
}
