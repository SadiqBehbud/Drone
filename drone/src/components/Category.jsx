import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import FavoritePage from "../pages/FavoritePage";
import main_png from "../assets/icons/main-end.png";
import heart_icon from "../assets/icons/heart32.png";
import like_icon from "../assets/icons/like.png";

function Category({
  basketModalShow,
  categories,
  basket,
  products,
  dispatch,
  category_category,
  favorite,
  favoriteModalShow,
}) {
  const location = useLocation();
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 16;
  const [product, setProduct] = useState([]);

  const cek = favorite.find((b) => b.id === a.id);
  const check = basket.find((f) => f.id === a.id);

  useEffect(() => {
    fetch(
      `http://localhost:1313/products?category=${location.state.category_category}`
    )
      .then((a) => a.json())
      .then((a) => setProduct(a));
  }, []);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(product.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(product.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, products, product]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % product.length;
    setItemOffset(newOffset);
  };

  // console.log(product)
  return (
    <>
      <main className='category-main'>
        <div className='main-end'>
          <div className='main-end-l'></div>
          <div className='main-end-c'>
            <img src={main_png} alt='' />
          </div>
          <div className='main-end-r'></div>
        </div>
      </main>

      <section className='categori-contanier'>
        <div className='categori-header'>
          <img src={location.state.category_logo} alt='' />
          <div className='categori-header-text'>
            <h1>{location.state.category_name}</h1>
            <h3>{location.state.category_about} </h3>
          </div>
        </div>

        <div className='products'>
          {currentItems.map((a) => {
            const check = basket.find((basketItem) => basketItem.id === a.id);
            return (
              <Link
                to={`/detail-product/${a.id}`}
                key={a.id}
                className='product'
              >
                <div className='rating flex'>
                  <img src={a.imagestar1} alt='' />
                  <img src={a.imagestar2} alt='' />
                  <img src={a.imagestar3} alt='' />
                  <img src={a.imagestar4} alt='' />
                  <img src={a.imagestar5} alt='' />
                  <p>({a.fun})</p>
                </div>
                <img src={a.image} alt='' />
                <h3 style={{ marginBottom: "10px" }}>
                  {a.name.slice(0, 15)}...
                </h3>
                <h4>${a.price}</h4>
                <div className='btn'>
                  {check ? (
                    <button
                      className='red'
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch({
                          type: "SET_BASKET",
                          payload: [
                            ...basket.filter(
                              (basketItem) => basketItem.id !== a.id
                            ),
                          ],
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
                              id: a.id,
                              count: 1,
                            },
                          ],
                        });
                      }}
                    >
                      <p> Add to Basket</p>
                    </button>
                  )}
                  
        {cek ? (
          <div
            className='like'
            onClick={(e) => {
              e.preventDefault();
              dispatch({
                type: "SET_FAVORITE",
                payload: [...favorite.filter((b) => b.id !== a.id)],
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
                    id: a.id,
                    name: a.name,
                    image: a.image,
                  },
                ],
              });
            }}
          >
            <img src={like_icon} alt='' />
          </div>
        )}
                </div>
              </Link>
            );
          })}
        </div>

        <ReactPaginate
          className='pagenation'
          breakLabel='...'
          nextLabel=' >'
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel='<'
          renderOnZeroPageCount={null}
        />
      </section>
    </>
  );
}
const t = (a) => a;

export default connect(t)(Category);
