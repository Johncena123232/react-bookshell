import React from "react";
import "../index.css";
export const List = ({ items }) => {
  return (
    <div className="MainDiv">
      <div className="container">
        {items &&
          items.map((item) => {
            const { id, bookname, bookprice, img } = item;

            return (
              <div
                style={{ textAlign: "center" }}
                className="card-container"
                key={id}
              >
                <div className="image-conatiner">
                  <img src="../assets/tg.jpg" alt="" />
                </div>
                <div className="card-title">
                  <h4>NAME: {bookname}</h4>
                </div>
                <div className="card-price">
                  <h4>PRICE: {bookprice}</h4>
                </div>
                <div className="card-cart">
                  <button className="btn btn-primary">
                    <a
                      style={{ color: "white", paddingBottom: "11vh" }}
                      href="#"
                    >
                      ADD TO CART
                    </a>
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
