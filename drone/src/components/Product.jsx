import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import heart_icon from "../assets/icons/heart32.png";
import like_icon from "../assets/icons/like.png";

function Product({
  basketModalShow,
  item,
  basket,
  products,
  dispatch,
  favorite,
}) {
  const check = basket.find((a) => a.id === item.id);
  const cek = favorite.find((b) => b.id === item.id);

  useEffect(() => {
    products.length &&
      window.localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [favorite]);
  return (
    <Link to={`/detail-product/${item.id}`} item={item} className='product'>
      <div className='rating flex'>
        <img src={item.imagestar1} alt='' />
        <img src={item.imagestar2} alt='' />
        <img src={item.imagestar3} alt='' />
        <img src={item.imagestar4} alt='' />
        <img src={item.imagestar5} alt='' />
        <p>({item.fun})</p>
      </div>
      <img src={item.image} alt='' />
      <h3 >{item.name.slice(0, 15)}...</h3>
      <h4 className="product-manat flex"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
         {item.price}   <img src="https://cdn-icons-png.flaticon.com/512/6366/6366608.png" alt="" />
      </h4>

      <div className='btn'>
        {check ? (
          <button
            className='redd'
            onClick={(e) => {
              e.preventDefault();
              dispatch({
                type: "SET_BASKET",
                payload: [...basket.filter((a) => a.id != item.id)],
              });
            }}
          >
            <p>Remove from Basket</p>
          </button>
        ) : (
          <button
            className='green'
            onClick={(e) => {
              e.preventDefault();
              dispatch({
                type: "SET_BASKET",
                payload: [
                  ...basket,
                  {
                    id: item.id,
                    count: 1,
                  },
                ],
              });
            }}
          >
            <p>Add to Basket</p>
          </button>
        )}

        {cek ? (
          <div
            className='like'
            onClick={(e) => {
              e.preventDefault();
              dispatch({
                type: "SET_FAVORITE",
                payload: [...favorite.filter((a) => a.id != item.id)],
              });
            }}
          >
            <img src={heart_icon} alt='' />
          </div>
        ) : (
          <div
            className='like'
            onClick={(e) => {
              e.preventDefault();
              dispatch({
                type: "SET_FAVORITE",
                payload: [
                  ...favorite,
                  {
                    id: item.id,
                    name: item.name,
                    image: item.image,
                  },
                ],
              });
            }}
          >
            <img src={like_icon} alt='' />
          </div>
        )}
      </div>
      <div className='product-hidden'>
        <h5>Brend - - - - -{item.brand}</h5>
        <h5>Uçuş müddəti - - - - - {item.zaman}</h5>
        <h5>Uçuş məsafəsi - - - - - {item.mesafe}</h5>
      </div>
    </Link>
  );
}
const t = (a) => a;

export default connect(t)(Product);
