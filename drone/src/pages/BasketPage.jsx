import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import master_icon from "../assets/icons/tool.png";
import visa_icon from "../assets/icons/visa-logo.png";
import manat_icon from "../assets/icons/manat.png";
import manat_white24 from "../assets/icons/manatwhite24.png";
import manat_white from "../assets/icons/manatwhite.png";

function BasketPage({
  basketModalShow,
  basket,
  products,
  dispatch,
  priceFilter,
  loading,
}) {

  const productPrice = [];
  let countTotal = +0;
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
  basket.map((a) => (countTotal += a.count));
  // console.log(countTotal);
  // console.log(total);
  // console.log(basket);

  return (
    <><main className='basket-background-main'>
      
    </main>
    <section className='basketPage-container-background flex'>
      
      <section className='basket-page-contanier flex'>
        <div className='basket-products'>
         
          <h1 className='basket-products-h1'>Alış-veriş kartı</h1>
          {basket.length ? (
            products.length &&
            basket.map((basketItem) => {
              const findProduct = products.find((t) => t.id === basketItem.id);
              return (
                <Link
                  to={`/detail-product/${findProduct.id}`}
                  key={findProduct.id}
                  className='basket-product'
                >
                  <img src={findProduct.image} alt='' />
                  <div className='basket-product-text flex'>
                    <h1> {findProduct.name.slice(0, 30)}</h1>
                  </div>

                  <div
                    className='operations-basketPage'
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <div className='sell-add-basketPage'>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          decreaseCount(basketItem.id);
                        }}
                        className='sell-basketPage'
                      >
                         -
                      </button>
                      <h3 className='basketItem-count'>{basketItem.count}</h3>
                      <button
                        className='add-basketPage'
                        onClick={(e) => {
                          e.preventDefault();
                          increaseCount(basketItem.id);
                        }}
                      >
                        +
                      </button>
                    </div>
                    <h4 style={{ color: " #4f4f4f" }}>
                       {basketItem.count * findProduct.price}  <img src={manat_icon} alt="" />
                    </h4>
                  </div>
                </Link>
              );
              // <div>{total}</div>
            })
          ) : (
            <div className='selectedBasketpage'>
              <h1>Zəhmət olmasa məhsul seçin</h1>
            </div>
          )}
        </div>
        <div className='pay-container flex'>
          <div className='pay'>
            <div className='Summary'>
              <h3>Ödəniş detalları</h3>
              <hr />
            </div>
            <div className='items flex'>
              <h4>MƏHSUL x {countTotal}</h4>
              <h4 className="basket-24-manat flex"> {total} <img src={manat_white24} alt="" /></h4>
            </div>
            <hr />
            <div className='items'>
              <h3>Kart məlumatları</h3>
            </div>
            <div>
              <p>Kart növü</p>
            </div>
            <div className='flex cards-container'>
              <div className='cards'>
                <img src={master_icon} alt='' />
              </div>
              <div className='cards'>
                <img src={visa_icon} alt='' />
              </div>
            </div>
            <div className='input'>
              <input type='text' placeholder="Cardholder's Name" />
            </div>
            <div className='input'>
              <input type='text' placeholder='Card Number' />
            </div>
            <div className='input2 flex'>
              <input type='text' placeholder='MM/YYYY' />

              <input type='text' placeholder='Cvv' />
            </div>
            <hr />
            <div className='j-between'>
              <h5>Məhsulların cəm dəyəri</h5> <h4 className="basket-24-manat flex">{total} <img src={manat_white24} alt="" /></h4>
            </div>
            <div className='j-between'>
              <h6>Karqo</h6> <h5 className="basket-16-manat flex">20 <img src={manat_white} alt="" /></h5>
            </div>
            <div className='j-between'>
              <h3>Ümumi (Karqo daxil)</h3>{" "}
              {total ? <h3 className="basket-24-manat flex">{total + 20} <img src={manat_white24} alt="" /></h3> : <h3 className="basket-24-manat flex">0.00 <img src={manat_white24} alt="" /></h3>}
            </div>
            <div className='pay-button flex'>
              <button>
                <h2>Ödəniş et</h2>
              </button>
            </div>
          </div>
        </div>
      </section>
    </section></>
  );
}

const t = (a) => a;
export default connect(t)(BasketPage);
