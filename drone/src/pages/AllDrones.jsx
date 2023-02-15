import { connect } from "react-redux";
import Product from "../components/Product";
import React, { useRef,useState, useEffect } from "react";
import { Link } from "react-router-dom";
import  { Swiper, SwiperSlide } from "swiper/react";
import ReactPaginate from "react-paginate";
import next_png from "../assets/icons/next.png";
import manat_icon from "../assets/icons/manat.png";
import heart_icon from "../assets/icons/heart32.png";
import like_icon from "../assets/icons/like.png";
import down_png from "../assets/icons/down-arrow.png";
import StarRating from "star-rating-react";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import {
  FreeMode,
  Thumbs,
  Autoplay,
  Pagination,
  Mousewheel,
  Navigation,
} from "swiper";

// import StarRating from "react-native-star-rating-widget";

// import greyw_svg from "../assets/icons/grey-w.svg";

function AllDrones({
  basketModalShow,
  basket,
  products,
  categories,
  parametr,
  dispatch,
  favorite,
}) {
  const [bestDrones, setBestDrones] = useState([]);

  useEffect(() => {
    setBestDrones(products.filter((a) => a.star == 5));
  }, [products]);
  useEffect(() => {
    AOS.init();
  }, []);
  const handleInput = (e) => {
    const endOffset = itemOffset + itemsPerPage;
    setPageCount(Math.ceil(t.length / itemsPerPage));
  };
  const [brands, setBrands] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 16;
  const [filteredItems, setFilteredItems] = useState([]);
  const [camera, setCamera] = useState([]);
  const [time, setTime] = useState([]);
  const [rating, setRating] = useState(0);
  const [filteredStarProduct, setFilteredStarProduct] = useState([]);
  const [favoryModal, setFavoryModal] = useState(false);
  const [brandModal, setBrandModal] = useState(false);
  const [cameraModal, setCameraModal] = useState(false);
  const [mesafeModal, setMesafeModal] = useState(false);
  const [timeModal, setTimeModal] = useState(false);
  const [deleteFilter, setDeleteFilter] = useState(false);

  const five = [
    <i class='fi fi-sr-star'></i>,
    <i class='fi fi-sr-star'></i>,
    <i class='fi fi-sr-star'></i>,
    <i class='fi fi-sr-star'></i>,
    <i class='fi fi-sr-star'></i>,
  ];
  const four = [
    <i class='fi fi-sr-star'></i>,
    <i class='fi fi-sr-star'></i>,
    <i class='fi fi-sr-star'></i>,
    <i class='fi fi-sr-star'></i>,
    <i class='fi fi-rr-star'></i>,
  ];
  const tree = [
    <i class='fi fi-sr-star'></i>,
    <i class='fi fi-sr-star'></i>,
    <i class='fi fi-sr-star'></i>,
    <i class='fi fi-rr-star'></i>,
    <i class='fi fi-rr-star'></i>,
  ];
  const two = [
    <i class='fi fi-sr-star'></i>,
    <i class='fi fi-sr-star'></i>,
    <i class='fi fi-rr-star'></i>,
    <i class='fi fi-rr-star'></i>,
    <i class='fi fi-rr-star'></i>,
  ];
  const one = [
    <i class='fi fi-sr-star'></i>,
    <i class='fi fi-rr-star'></i>,
    <i class='fi fi-rr-star'></i>,
    <i class='fi fi-rr-star'></i>,
    <i class='fi fi-rr-star'></i>,
  ];
  const uncheck = () => {
    let allCheckboxButtons = document.querySelectorAll(".checkboxButtons");
    allCheckboxButtons.forEach((value) => (value.checked = false));
  };

  useEffect(() => {
    if (rating) {
      setFilteredStarProduct(products.filter((a) => a.star == rating));
    } else {
      setFilteredStarProduct(products);
    }
  }, [rating]);
  // console.log(products)
  // console.log(filteredStarProduct)

  useEffect(() => {
    setFilteredItems(products);
  }, [products]);
  useEffect(() => {
    let f = products.filter((a) => brands.includes(a.brand) || !brands.length);
    f = f.filter((a) => camera.includes(a.kamera) || !camera.length);
    f = f.filter((a) => time.includes(a.zaman) || !time.length);
    f = f.filter((a) => +a.star === rating || !rating);
    setFilteredItems(f);
  }, [brands, camera, time, rating]);
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(filteredItems.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredItems.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, products, filteredItems]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredItems.length;
    setItemOffset(newOffset);
  };
  console.log(brands);
  return (
    <div className='yuz'>
      <div className='top-main'></div>
      <main className='allDrones-main'>
        <div
          className='all-left'
          data-aos='fade-right'
          data-aos-duration='2000'
          // data-aos-offset='400'
          data-aos-delay='800'
        >
          {" "}
          <h1>
            Xoş gəlmisizniz, <br />
            əldə etmək istədiyiniz Dronu <br />
            seçin zəhmət olmasa
          </h1>{" "}
          <div
            className='all-center'
            // data-aos='fade-left'
            // data-aos-duration='2000'
            // data-aos-offset='470'
            // data-aos-delay='600'
          >
            {" "}
            <img
              data-aos='fade-left'
              data-aos-duration='1700'
              data-aos-offset='300'
              data-aos-delay='1000'
              src='https://images.unsplash.com/photo-1536704689578-8fff53d4dfd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
              alt=''
            />
          </div>
        </div>
        {/* <div className="main-left">
      </div>
      <div className="main-rigth ">
        <div className="main-rigth-box aaaa"><img src={aaaa_png} alt=""  /></div>
        <div className="main-rigth-box2 aaaa"><img src={aaaaa_png} alt=""  /></div>
        <div className="main-rigth-box3 aaaa"><img src={aaa_png} alt=""  /></div>
        <div className="main-rigth-box4 aaaa"><img src={aaaa_png} alt=""  /></div>
      </div> */}
        {/* <img src={aa_png} alt="" /> */}
        {/* <div className="aaaa"><img src={aa_png} alt=""  /></div> */}
      </main>
      <div className="line-all">
      {/* <section className='list-logo-container'>
        <div className='list-drone'>
          <Swiper
            // direction={"horizontal"}
            slidesPerView={5}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
            mousewheel={true}
            // pagination={{
            //   clickable: true,
            // }}
            modules={[Mousewheel, Autoplay, Pagination]}
            className='mySwiper'
          >
            {categories.map((category) => (
              <SwiperSlide
                //  autoPlay
                className='drone-logo'
                key={category.id}
              >
                <div
                  state={{
                    category_id: category.id,
                    category_name: category.name,
                    category_about: category.about,
                    category_logo: category.logo,
                    category_video: category.video,
                    category_category: category.category,
                  }}
                  
                >
                  <img src={category.logo} alt={category.name} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </section> */}
      </div>
      <section className='products-contanier'>
        
        <div className='listes'>
          <h4 className='delete-filter'>
            Filtiri təmizlə{" "}
            <i
              className='fi fi-ss-filter-slash'
              onClick={() => {
                uncheck();
                setCamera([]),
                  setTime([]),
                  setRating(0),
                  setBrands([]),
                  deleteFilter ? setDeleteFilter(false) : setDeleteFilter(true);
              }}
            ></i>
          </h4>
          <div className='list-brands'>
            <div className="flex"><h4
              onClick={() =>
                favoryModal ? setFavoryModal(false) : setFavoryModal(true)
              }
            >
              Reytinq 
            </h4>{favoryModal  ?     <img src={down_png} alt="" onClick={() =>
                favoryModal ? setFavoryModal(false) : setFavoryModal(true)
              } /> :   <img src={next_png} alt="" onClick={() =>
                favoryModal ? setFavoryModal(false) : setFavoryModal(true)
              } />   }</div>
            
            <div
              className={
                favoryModal ? "list-modal-show flex" : "list-modal-not-show"
              }
            >
              {" "}
              <StarRating
                rating={rating}
                onChange={setRating}
                value={rating}
                style={{ color: "orange" }}
              />{" "}
            </div>
          </div>
          <ul className='list-brands'>
            <div className="flex"><h4
              onClick={() =>
                brandModal ? setBrandModal(false) : setBrandModal(true)
              }
            >
              Dron Brendləri 
            </h4>{brandModal  ?     <img src={down_png} alt="" onClick={() =>
                brandModal ? setBrandModal(false) : setBrandModal(true)
              } /> :   <img src={next_png} alt="" onClick={() =>
                brandModal ? setBrandModal(false) : setBrandModal(true)
              }/>   }</div>
            

            {categories.map((a) => (
              <li
                key={a.id}
                className={
                  brandModal
                    ? "list-modal-show list-brand"
                    : "list-modal-not-show"
                }
              >
                <input
                  className='checkboxButtons'
                  type='checkbox'
                  value={a.name}
                  id={a.id}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setBrands([...brands, a.name]);
                    } else {
                      setBrands([...brands.filter((y) => y !== a.name)]);
                    }

                    console.log(e.target.value);
                  }}
                />
                <label htmlFor={a.id}>
                  <h3>{a.name}</h3>
                </label>
              </li>
            ))}
          </ul>
          <ul className='list-brands'> <div className="flex"><h4
              onClick={() =>
                cameraModal ? setCameraModal(false) : setCameraModal(true)
              }
            >
              Kamera növləri  
            </h4>
          {cameraModal  ?     <img src={down_png} alt="" onClick={() =>
                cameraModal ? setCameraModal(false) : setCameraModal(true)
              }/> :   <img src={next_png} alt="" onClick={() =>
                cameraModal ? setCameraModal(false) : setCameraModal(true)
              }/>   } 
          </div>
           

            {categories.map((b) => (
              <li
                className={
                  cameraModal
                    ? "list-modal-show list-brand"
                    : "list-modal-not-show"
                }
                key={b.id}
              >
                <input
                  className='checkboxButtons'
                  type='checkbox'
                  id={b.id + 1}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setCamera([...camera, b.kamera]);
                    } else {
                      setCamera([...camera.filter((y) => y !== b.kamera)]);
                    }
                  }}
                />
                <label htmlFor={b.id + 1}>
                  <h3>{b.kamera}</h3>
                </label>
              </li>
            ))}
          </ul>
          <ul className='list-brands '> <div className="flex"><h4 
              onClick={() =>
                timeModal ? setTimeModal(false) : setTimeModal(true)
              }
            >
              Uçuş müddəti 
            </h4>{timeModal  ?     <img src={down_png} alt="" onClick={() =>
                timeModal ? setTimeModal(false) : setTimeModal(true)
              }/> :   <img src={next_png} alt="" onClick={() =>
                timeModal ? setTimeModal(false) : setTimeModal(true)
              }/>   }</div>
            
            {categories.map((b) => (
              <li
                className={
                  timeModal
                    ? "list-modal-show list-brand"
                    : "list-modal-not-show"
                }
                key={b.id}
              >
                <input
                  className='checkboxButtons'
                  type='checkbox'
                  id={b.id + 2}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setTime([...time, b.zaman]);
                    } else {
                      setTime([...time.filter((y) => y !== b.zaman)]);
                    }
                  }}
                />
                <label htmlFor={b.id + 2}>
                  <h3>{b.zaman}</h3>
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className='products'>
          {currentItems.length ? (
            currentItems.map((a) => <Product key={a.id} item={a} />)
          ) : (
            <h1 className="no-product">Seçiminizə uyğun tapilmadi...</h1>
          )}
        </div>
      </section>
      <ReactPaginate
        className='pagenation'
        breakLabel='...'
        nextLabel=' >'
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        previousLabel='<'
        renderOnZeroPageCount={null}
      />
            <h1 className="best-h1">Ən çox dəyərləndirilən məhsullarımız</h1>
<div className="best-center">

      <section className='best-container'>
      <div className='best-drone'>
        <Swiper
            slidesPerView={5}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
            // mousewheel={true}
            // pagination={{
            //   clickable: true,
            // }}
            navigation={true}
            modules={[ Autoplay, Navigation]}
            className='mySwiper'
        >
          {bestDrones.map((a) => (
            <SwiperSlide key={a.id}  className="best-con">
             
              <Link to={`/detail-product/${a.id}`}  key={a.id}>

               
                  <div className='rating flex'>
                    <img src={a.imagestar1} alt='' />
                    <img src={a.imagestar2} alt='' />
                    <img src={a.imagestar3} alt='' />
                    <img src={a.imagestar4} alt='' />
                    <img src={a.imagestar5} alt='' />
                    <p>({a.fun})</p>
                  </div>
                  <img src={a.image} alt='' />
                
                <h3>{a.name.slice(0,18)}</h3>
                <h5 className="basket-16-manat flex">{a.price} <img src={manat_icon} alt="" /></h5>
                <div className='flexx'>
                    {" "}
                    {basket.find((b) => b.id === a.id) ?
                     (
                      <button
                        className='red-best'
                        onClick={(e) => {
                          e.preventDefault();
                          dispatch({
                            type: "SET_BASKET",
                            payload: [
                              ...basket.filter((b) => b.id != a.id),
                            ],
                          });
                        }}
                      >
                        <p>Remove from Basket</p>
                      </button>
                    ) : (
                      <button
                        className='green-best'
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
                        <p>Add to Basket</p>
                      </button>
                    )}
                    {favorite.find((b) => b.id === a.id) ? (
                      <div
                        className='lik'
                        onClick={(e) => {
                          e.preventDefault();
                          dispatch({
                            type: "SET_FAVORITE",
                            payload: [
                              ...favorite.filter((b) => b.id != a.id),
                            ],
                          });
                        }}
                      >
                        <img src={heart_icon} alt='' />
                      </div>
                    ) : (
                      <div
                        className='lik'
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

             
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </section>
      </div>
    </div>
  );
}
const t = (a) => a;
export default connect(t)(AllDrones);
