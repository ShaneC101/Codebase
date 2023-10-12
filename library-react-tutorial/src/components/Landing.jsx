import React from 'react';
import { Link } from "react-router-dom";
import UndrawBooks from '../assets/Undraw_Books.svg';

const Landing = () => {
    return (
   <section id="Landing">
    <header>
      <div className="header__container">
        <div className="header__description">
         <h1>Austrailia's most awarded online library platform</h1>
         <h2>Find your dream book with <span classname="pruple">Library</span></h2>
         <Link to="#features">
         <button className="btn">Browse Books</button>
         </Link>
        </div>
        <figure className="header__img--wrapper">
         <img src={UndrawBooks} alt="" />
        </figure>
        </div>
    </header>
   </section>
    );
}

export default Landing;