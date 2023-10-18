import React from "react";

const Cart = ({ cart, changeQuantity }) => {
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="books__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__price">Price</span>
              </div>
              <div className="cart__body">
               {cart.map((book) => {
                return (
                  <div className="cart__item">
                    <div className="cart__book">
                       <img
                      src={book.url}
                      class="cart__book--img"
                      alt=""
                    />
                    <div className="cart__book--info">
                      <span className="cart__book--title">
                        {book.title}
                      </span>
                      <span className="cart__book--price">${(book.sale.Price  || book.original.Price).toFixed(2)}</span>
                      <button className="cart__book--remove">Remove</button>
                    </div>
                   </div>
                   <div className="cart__quantity">
                    <input 
                    type="number"
                    min={0} 
                    max={99} 
                    class="cart__input"
                    value={book.quantity}
                    onChange={(event) => changeQuantity(book, event.target.value)}
                    />
                   </div>
                  <div className="cart__total">$10.00</div>
                  </div>
                   );
                  })}
                <div className="cart__item">
                  <div className="cart__book">
                    <img
                      src="https://covers.openlibrary.org/b/id/8091016-L.jpg"
                      class="cart__book--img"
                      alt=""
                    />
                    <div className="cart__book--info">
                      <span className="cart__book--title">
                        Crack the coding interview
                      </span>
                      <span className="cart__book--price">$10.00</span>
                      <button className="cart__book--remove">Remove</button>
                    </div>
                  </div>
                  <div className="cart__quantity">
                    <input type="number" min={0} max={99} class="cart__input" />
                  </div>
                  <div className="cart__total">
                    $10.00
                    </div>
                </div>
              </div>
            </div>
            <div className="total">
              <div className="total__item total__sub-total">
                <span>Subtotal</span>
                <span>$9.00</span>
              </div>
            </div>
            <div className="total__item total__tax">
              <span>Tax</span>
              <span>$1.00</span>
            </div>
            <div className="total__item total__price">
              <span>Total</span>
              <span>$10.00</span>
            </div>
            <button
              className="btn btn__chackout no-cursor"
              onClick={() => alert(`Haven't got around to doing this :(`)}>
              Proceed to checkout
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
