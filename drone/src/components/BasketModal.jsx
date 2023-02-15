import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";

function BasketModal({ basketModalShow, basket, products, dispatch }) {
  const productPrice = [];

  const increaseCount = (id) => {
    let f = basket.find((t) => t.id === id);
    f.count++;
    dispatch({
      type: "SET_BASKET",
      payload: [...basket],
    });
  };
  const decreaseCount = (id) => {
    let f = basket.find((t) => t.id === id);
    if (f.count - 1 > 0) {
      f.count--;
      dispatch({
        type: "SET_BASKET",
        payload: [...basket],
      });
    } else {
      Swal.fire({
        title: "Əminsən ?",
        text: "Bu son məhsuldur...",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Bəli",
        cancelButtonText: "Xeyr",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch({
            type: "SET_BASKET",
            payload: [...basket.filter((a) => a.id !== id)],
          });
        }
      });
    }
  };
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (!products.length) {
      return;
    }
    setTotal(
      basket.reduce(
        (acc, item) =>
          acc + products.find((a) => a.id === item.id).price * item.count,
        0
      )
    );
  }, [products, basket]);
  // console.log(basket);
  return (
    <div className='basket-modal-products'>
      <h5 className='h5 modal-manat-big flex' style={{ textAlign: "center", padding: 20 }}>
        Toplam: {total}  <img src="https://cdn-icons-png.flaticon.com/512/6366/6366608.png" alt="" />
      </h5>
      <NavLink to='/basket-page' className='modal-link'>
        
        Səbətim
      </NavLink>
      {basket.length ? (
        basket.map((basketItem) => {
          const findProduct = products.find((t) => t.id === basketItem.id);
          // console.log(findProduct);
          return (
            <Link
              to={`/detail-product/${findProduct.id}`}
              key={findProduct.id}
              className='basket-modal-product'
            >
              <img src={findProduct.image} alt='' />

              <h4>{findProduct.name.slice(0, 20)}...</h4>

              <div
                className='operations'
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <h5 className="modal-manat flex">
                  {basketItem.count} x {findProduct.price}  <img src="https://cdn-icons-png.flaticon.com/512/6366/6366608.png" alt="" />=  
                  {basketItem.count * findProduct.price}   <img src="https://cdn-icons-png.flaticon.com/512/6366/6366608.png" alt="" /> 
                </h5>

                <div className='sell-add'>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      decreaseCount(basketItem.id);
                    }}
                    className='sell'
                  >
                    -
                  </button>
                  <h3 className='basketItem-count'>{basketItem.count}</h3>
                  <button
                    className='add'
                    onClick={(e) => {
                      e.preventDefault();
                      increaseCount(basketItem.id);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </Link>
          );
        })
      ) : (
        <div className='selectedd'>
          <h2 >Zəhmət olmasa məhsul seçin...</h2>
        </div>
      )}
    </div>
  );
}
const t = (a) => a;
export default connect(t)(BasketModal);
