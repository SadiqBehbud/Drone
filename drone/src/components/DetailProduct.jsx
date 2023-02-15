import { connect } from "react-redux";
import { useParams, useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import StarRating from "star-rating-react";
import drone_icon from "../assets/icons/drone.png";
import long_icon from "../assets/icons/long-distance.png";
import stopwatch_icon from "../assets/icons/stopwatch.png";
import heart_icon from "../assets/icons/heart32.png";
import like_icon from "../assets/icons/like.png";
import manat_icon from "../assets/icons/manat.png";
import left_quotes from "../assets/icons/leftquotes.png";
import right_quotes from "../assets/icons/rightquotes.png";
import men_ from "../assets/icons/men.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Mousewheel, Navigation } from "swiper";
function DetailProduct({
  basketModalShow,
  basket,
  products,
  categories,
  dispatch,
  brandsFilter,
  videos,
  favorite,
}) {
  const [rating, setRating] = useState(0);

  let { id } = useParams();
  let { category } = useParams();
  let { pathname } = useLocation();
  const [product, setProduct] = useState({});
  const check = basket.find((a) => a.id === product.id);
  const cek = favorite.find((b) => b.id === product.id);
  const [otherProducts, setOtherProducts] = useState([]);
  const [show, setShow] = useState(true);
  console.log(show);

  useEffect(() => {
    fetch("http://localhost:1313/products/" + id)
      .then((a) => a.json())
      .then((a) => {
        setProduct(a);
        setCurrentImage(a.image);
      });
  }, [pathname]);

  useEffect(() => {
    setOtherProducts(products.filter((a) => a.category === product.category));
  }, [product]);
  // console.log(otherProducts);
  const [currentImage, setCurrentImage] = useState(null);

  return (
    <>
      {product.id && (
        <div className='container '>
          <div className='card'>
            <section className='detailPage-container'>
              <div className='flex top-section'>
                <div className='detail-container-image'>
                  <img src={currentImage} alt='' />
                </div>
                <div className='detail-container'>
                  <div className='detail-container-text'>
                    <h2>{product.name}</h2>

                    <div className='ratingg flex'>
                      <img src={product.imagestar1} alt='' />
                      <img src={product.imagestar2} alt='' />
                      <img src={product.imagestar3} alt='' />
                      <img src={product.imagestar4} alt='' />
                      <img src={product.imagestar5} alt='' />
                      <div>
                        <p className='rating-p'>
                          {" "}
                          {product.fun} nəfər dəyərləndirib
                        </p>
                      </div>
                    </div>
                    <div>
                      <h3>
                        {product.price} <img src={manat_icon} alt='' />
                      </h3>
                    </div>
                    <div className='border-bottom  '>
                      <img src={drone_icon} alt='' />{" "}
                      <div className='border-bottomm  '>
                        <h4>Camera :</h4>
                        <h3>{product.kamera}</h3>
                      </div>
                    </div>
                    <div className='border-bottom '>
                      <img src={long_icon} /> <h4>Flight Distance :</h4>
                      <h3>{product.mesafe}</h3>
                    </div>
                    <div className='border-bottom'>
                      <img src={stopwatch_icon} /> <h4>Flight Duration :</h4>
                      <h3>{product.zaman}</h3>
                    </div>
                    <h5 className='garanty'>
                      Məhsula rəsmi bir il zəmanət verilir
                    </h5>
                    <div className='flexx'>
                      {" "}
                      {check ? (
                        <button
                          className='reddd'
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch({
                              type: "SET_BASKET",
                              payload: [
                                ...basket.filter((a) => a.id != product.id),
                              ],
                            });
                          }}
                        >
                          <p>Remove from Basket</p>
                        </button>
                      ) : (
                        <button
                          className='greennn'
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch({
                              type: "SET_BASKET",
                              payload: [
                                ...basket,
                                {
                                  id: product.id,
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
                          className='likee'
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch({
                              type: "SET_FAVORITE",
                              payload: [
                                ...favorite.filter((a) => a.id != product.id),
                              ],
                            });
                          }}
                        >
                          <img src={heart_icon} alt='' />
                        </div>
                      ) : (
                        <div
                          className='likee'
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch({
                              type: "SET_FAVORITE",
                              payload: [
                                ...favorite,
                                {
                                  id: product.id,
                                  name: product.name,
                                  image: product.image,
                                },
                              ],
                            });
                          }}
                        >
                          <img src={like_icon} alt='' />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className='detail-container-img-con'>
                <div className='detail-container-img '>
                  <div>
                    <img
                      className='product-images'
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentImage(product.image);
                      }}
                      src={product.image}
                      alt=''
                    />
                  </div>
                  <div>
                    {product.images.map((image, b) => (
                      <img
                        className='product-images'
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentImage(image);
                        }}
                        key={b}
                        src={image}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>
            <div className='col-lg-12'>
              <h3 className='box-title'>Əlavə məlumatlar</h3>
              <div className='table-responsive'>
                <table className='table table-striped table-product'>
                  <tbody>
                    <tr>
                      <td width='390'>Brend</td>
                      <td>{product.brand}</td>
                    </tr>
                    <tr>
                      <td>Çatdırılma vəziyəti</td>
                      <td>Knock Down</td>
                    </tr>
                    <tr>
                      <td>Smart kilidi</td>
                      <td>Bəli</td>
                    </tr>
                    <tr>
                      <td>Növ</td>
                      <td>Outdoor</td>
                    </tr>
                    <tr>
                      <td>Stil</td>
                      <td>Müasir və Modern</td>
                    </tr>
                    <tr>
                      <td>Təkərlər daxildir</td>
                      <td>Bəli</td>
                    </tr>
                    <tr>
                      <td>Qoruyucu daxildir</td>
                      <td>Bəli</td>
                    </tr>
                    <tr>
                      <td>Material </td>
                      <td>Metal və plastik</td>
                    </tr>
                    <tr>
                      <td>Baş dəstəyi</td>
                      <td>Xeyr</td>
                    </tr>
                    <tr>
                      <td>İstifadə olunur</td>
                      <td>Tədqiqat və İncəsənətdə</td>
                    </tr>
                    <tr>
                      <td>Tənzimlənən hündürlük</td>
                      <td>Bəli</td>
                    </tr>
                    <tr>
                      <td>Model Nömrəsi</td>
                      <td>F01020701-00HT744A06</td>
                    </tr>
                    <tr>
                      <td>Qol dayama daxildir</td>
                      <td>Bəli</td>
                    </tr>
                    <tr>
                      <td>Qulluq təlimatları</td>
                      <td>
                        Diqqətlə tutun,Quru yerdə saxlayın,
                        <br /> Təmizlərkən heçbir kimyəvi maddədən istifadə
                        etməyin.
                      </td>
                    </tr>
                    <tr>
                      <td>Bitirmə növü</td>
                      <td>Tutqun</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className=' reviews-contanier'>
            <div className=' reviews'>
              <h3
                onClick={() => setShow(true)}
                className={show ? "" : "grey-color"}
              >
                Rəylər
              </h3>{" "}
              <h3
                onClick={() => setShow(false)}
                className={show ? "grey-color" : ""}
              >
                Rəy bildir
              </h3>
            </div>
            <div
              className={
                show ? "show-reviews reviews-reading" : "reviews-reading"
              }
            >
             <div className="flex margin-top"> <img src={left_quotes} alt="" /></div>
              <div className="reviews-form">  
              <Swiper
        pagination={{
          type: "fraction",
        }}
        loop
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div>
         <div className="profil-img"><img src={men_} alt="" /></div> 
          <h3>Sadiq Behbud</h3>
          <p> 11.11.2022  12:30</p>
          <div className=' rev '>
        <img src="https://cdn-icons-png.flaticon.com/512/2377/2377810.png" alt='' />
        <img src="https://cdn-icons-png.flaticon.com/512/2377/2377810.png" alt='' />
        <img src="https://cdn-icons-png.flaticon.com/512/2377/2377810.png" alt='' />
        <img src="https://cdn-icons-png.flaticon.com/512/2377/2377810.png" alt='' />
        <img src="https://cdn-icons-png.flaticon.com/512/2377/2377810.png" alt='' />
      </div>
          <p>Uşağımın oynaması üçün almışdım, videolarına baxaraq aldım, amma bu qədər möhkəm olduğunu təxmin edə bilmədim. Bu dronu uşağımın motor bacarıqlarını inkişaf etdirmək üçün almışam, barmaq hərəkətləri yaxşılaşır, salto edir, görüntü keyfiyyəti yaxşıdır</p>
          </div></SwiperSlide>
        <SwiperSlide><div>
         <div className="profil-img"><img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="" /></div> 
          <h3>Aytac Ağalı</h3>
          <p> 11.11.2022  12:30</p>
          <div className=' rev '>
        <img src="https://cdn-icons-png.flaticon.com/512/2377/2377810.png" alt='' />
        <img src="https://cdn-icons-png.flaticon.com/512/2377/2377810.png" alt='' />
        <img src="https://cdn-icons-png.flaticon.com/512/2377/2377810.png" alt='' />
        <img src="https://cdn-icons-png.flaticon.com/512/2377/2377878.png" alt='' />
        <img src="https://cdn-icons-png.flaticon.com/512/2377/2377878.png" alt='' />
      </div>
          <p>Məhsul çox yaxşıdır, təcrübəsizlik üçün idealdır, satıcı şirkət çox uyğundur, hər növ məhsulun arxasında olan hər kəsə tövsiyə edirəm</p>
          </div></SwiperSlide>
        <SwiperSlide><div>
         <div className="profil-img"><img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp" alt="" /></div> 
          <h3>Orxan Ağalı</h3>
          <p> 11.11.2022  12:30</p>
          <div className=' rev '>
        <img src="https://cdn-icons-png.flaticon.com/512/2377/2377810.png" alt='' />
        <img src="https://cdn-icons-png.flaticon.com/512/2377/2377810.png" alt='' />
        <img src="https://cdn-icons-png.flaticon.com/512/2377/2377810.png" alt='' />
        <img src="https://cdn-icons-png.flaticon.com/512/2377/2377810.png" alt='' />
        <img src="https://cdn-icons-png.flaticon.com/512/2377/2377878.png" alt='' />
      </div>
          <p>Məhsul çox yaxşıdır, təcrübəsizlik üçün idealdır, satıcı şirkət çox uyğundur, hər növ məhsulun arxasında olan hər kəsə tövsiyə edirəm</p>
          </div></SwiperSlide>
        <SwiperSlide><div>
         <div className="profil-img"><img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp" alt="" /></div> 
          <h3>Gunay Ağalı</h3>
          <p> 11.11.2022  12:30</p>
          <div className=' rev '>
        <img src="https://cdn-icons-png.flaticon.com/512/2377/2377810.png" alt='' />
        <img src="https://cdn-icons-png.flaticon.com/512/2377/2377810.png" alt='' />
        <img src="https://cdn-icons-png.flaticon.com/512/2377/2377810.png" alt='' />
        <img src="https://cdn-icons-png.flaticon.com/512/2377/2377810.png" alt='' />
        <img src="https://cdn-icons-png.flaticon.com/512/2377/2377878.png" alt='' />
      </div>
          <p>Məhsul çox yaxşıdır, təcrübəsizlik üçün idealdır, satıcı şirkət çox uyğundur, hər növ məhsulun arxasında olan hər kəsə tövsiyə edirəm</p>
          </div></SwiperSlide>
        <SwiperSlide><div>
         <div className="profil-img"><img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp" alt="" /></div> 
          <h3>Nuray Ağalı</h3>
          <p> 11.11.2022  12:30</p>
          <div className=' rev '>
        <img src="https://cdn-icons-png.flaticon.com/512/2377/2377810.png" alt='' />
        <img src="https://cdn-icons-png.flaticon.com/512/2377/2377810.png" alt='' />
        <img src="https://cdn-icons-png.flaticon.com/512/2377/2377810.png" alt='' />
        <img src="https://cdn-icons-png.flaticon.com/512/2377/2377878.png" alt='' />
        <img src="https://cdn-icons-png.flaticon.com/512/2377/2377878.png" alt='' />
      </div>
          <p>Məhsul çox yaxşıdır, təcrübəsizlik üçün idealdır, satıcı şirkət çox uyğundur, hər növ məhsulun arxasında olan hər kəsə tövsiyə edirəm</p>
          </div></SwiperSlide>
        <SwiperSlide><div>
         <div className="profil-img"><img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" alt="" /></div> 
          <h3>Ləman Ağalı</h3>
          <p> 11.11.2022  12:30</p>
          <div className=' rev '>
        <img src="https://cdn-icons-png.flaticon.com/512/2377/2377810.png" alt='' />
        <img src="https://cdn-icons-png.flaticon.com/512/2377/2377810.png" alt='' />
        <img src="https://cdn-icons-png.flaticon.com/512/2377/2377810.png" alt='' />
        <img src="https://cdn-icons-png.flaticon.com/512/2377/2377810.png" alt='' />
        <img src="https://cdn-icons-png.flaticon.com/512/2377/2377878.png" alt='' />
      </div>
          <p>Məhsul çox yaxşıdır, təcrübəsizlik üçün idealdır, satıcı şirkət çox uyğundur, hər növ məhsulun arxasında olan hər kəsə tövsiyə edirəm</p>
          </div></SwiperSlide>
        
      </Swiper>
      </div>
     <div className="flex margin-bottom"> <img src={right_quotes} alt="" /></div>

            </div>
            <div
              className={
                show ? "reviews-writing" : "show-reviews reviews-writing"
              }
            >
              <h4>Ad Soyad</h4>
              <input type='text' placeholder='Ad və Soyadınızı daxil edin ' />
              <h4>Email</h4>
              <input type='text' placeholder='drone@gmail.com ' />
              <h4>Dəyər təyin edin</h4>
              <div className='star'>
                <StarRating
                  rating={5}
                  onChange={setRating}
                  value={rating}
                  style={{ color: "orange" }}
                />
              </div>
              <h4>Qeyd</h4>
              <input
                className='reviews-input'
                type='text'
                placeholder='Rəyinizi ətraflı qeyd edin'
              />
              <div className='reviews-checkbox'>
                {" "}
                <input type='checkbox' id="checkbox" />{" "}
                <label htmlFor="checkbox">Digər şəxslər tərəfindən Ad Soyadınız görünsün?</label>
              </div>{" "}
              <button className='reviews-submit'  > <h3>Təsdiq et</h3></button>
            </div>
          </div>
          <h1 className='h1-other'>
            {product.name} ilə eyni katiqoriyada olan dronlar
          </h1>
          <div className='best-centerr'>
            <section className='best-containerr'>
              <div className='best-drone'>
                <Swiper
                  slidesPerView={otherProducts.length > 4 ? 4 : 3}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  spaceBetween={30}
                  loop
                  navigation={true}
                  modules={[Autoplay, Navigation]}
                  className='mySwiper'
                >
                  {otherProducts.length &&
                    otherProducts.map((b) => (
                      <SwiperSlide key={b.id} className='other-product'>
                        <Link to={`/detail-product/${b.id}`}>
                          <div>
                            <div className='rating flex'>
                              <img src={b.imagestar1} alt='' />
                              <img src={b.imagestar2} alt='' />
                              <img src={b.imagestar3} alt='' />
                              <img src={b.imagestar4} alt='' />
                              <img src={b.imagestar5} alt='' />
                              <p>({b.fun})</p>
                            </div>
                            <img src={b.image} alt='' />
                          </div>
                          <h3>{b.name.slice(0, 18)}...</h3>
                          <h5 className='basket-16-manat flex'>
                            {b.price} <img src={manat_icon} alt='' />
                          </h5>
                          <div className='flexx'>
                            {" "}
                            {basket.find((a) => a.id === b.id) ? (
                              <button
                                className='red-best'
                                onClick={(e) => {
                                  e.preventDefault();
                                  dispatch({
                                    type: "SET_BASKET",
                                    payload: [
                                      ...basket.filter((a) => a.id != b.id),
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
                                        id: b.id,
                                        count: 1,
                                      },
                                    ],
                                  });
                                }}
                              >
                                <p>Add to Basket</p>
                              </button>
                            )}
                            {favorite.find((a) => a.id === b.id) ? (
                              <div
                                className='lik'
                                onClick={(e) => {
                                  e.preventDefault();
                                  dispatch({
                                    type: "SET_FAVORITE",
                                    payload: [
                                      ...favorite.filter((a) => a.id != b.id),
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
                                        id: b.id,
                                        name: b.name,
                                        image: b.image,
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
      )}
    </>
  );
}
const t = (a) => a;
export default connect(t)(DetailProduct);
