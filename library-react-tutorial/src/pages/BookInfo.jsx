import Book from "../components/Book";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/Rating";
import Price from "../components/Price";

const BookInfo = ({ books, addToCart }) => {
  const { id } = useParams();
  const book = books.find(book => +book.id === +id);

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="booKs__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img
                  src={book.url}
                  alt=""
                  className="book__selected--img"
                />
              </figure>
            </div>
            <div className="book__selected--description">
              <h2 className="book__selected--title">
                {book.title}
              </h2>
              <Rating rating={book.rating} />
              <div className="book__selected--price">
                <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
              </div>
              <div className="book__summary">
                <h3 className="book__summary--title">Summary</h3>
                <p className="book__summary--para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur ullam architecto harum excepturi sed totam sequi
                  soluta molestias, consectetur doloremque magnam quisquam
                  deserunt vel magni odio voluptates reprehenderit iusto esse?
                </p>
                <p className="book__summary--para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur ullam architecto harum excepturi sed totam sequi
                  soluta molestias, consectetur doloremque magnam quisquam
                  deserunt vel magni odio voluptates reprehenderit iusto esse?
                </p>
              </div>
              <button className="btn" onClick={() => addToCart(book)}>Add to cart</button>
            </div>
          </div>
        </div>
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title-top">
                Recommended Books
              </h2>
            </div>
            <div className="books">
            {
              books
              .filter(book => book.rating === 5 && +book.id !== +id)
              .slice(0, 4)
              .map(book => <Book book={book} key={book.id} />)
            }
          </div>
        </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
