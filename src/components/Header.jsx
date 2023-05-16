import React from "react";
import { Link } from "react-router-dom";
import {HashLink} from 'react-router-hash-link';
export default function Header() {
  return (
    <nav>
        <h1>Techydev</h1>
        <main>
            <HashLink to={"/#home"}>Home</HashLink>
            <Link to={"/Contact"}>Contact</Link>
            <HashLink to={"/#About"}>About</HashLink>
            <HashLink to={"/#Brands"}>Brands</HashLink>
            <Link to={"/Services"}>Services</Link>
        </main>
    </nav>
  );
}
