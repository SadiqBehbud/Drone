import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import React, {useEffect, useState } from "react";
import manat_icon from "../assets/icons/manat.png";
import heart_icon from "../assets/icons/heart32.png";
import like_icon from "../assets/icons/like.png";
import vid1 from "../assets/videos/vid1.mp4";
import vid2 from "../assets/videos/vid2.mp4";
import vid3 from "../assets/videos/vid3.mp4";
import vid4 from "../assets/videos/vid4.mp4";
import vid5 from "../assets/videos/vid5.mp4";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import {
  FreeMode,
  Thumbs,
  Autoplay,
  Pagination,
  Navigation,
  Mousewheel
} from "swiper";


function HomePage({ basket, products,favorite, dispatch }) {


  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [bestDrones, setBestDrones] = useState([]);

  useEffect(() => {
    setBestDrones(products.filter((a) => a.star == 5));
  }, [products]);
  // console.log(bestDrones);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1313/categories")
      .then((a) => a.json())
      .then((a) => setCategories(a));
  }, []);
  let videos = [vid1, vid2, vid3, vid4, vid5];
  let video = [  {
    video: "https://terra-1-g.djicdn.com/851d20f7b9f64838a34cd02351370894/F31_HG306_shot-on_CLEAN__10s_V1_2400x1440.mp4",
    id: "106",
    name: "DJI AVATA",
    image:
      "https://stormsend1.djicdn.com/stormsend/uploads/1a207b8e6a10319a40efd2f9f7912177.jpg",
    subtitle: "Uçmaq üçün doğulub",
    text: "DJİ-da pulsuz çatdırılma",
  }, {video:"https://terra-1-g.djicdn.com/851d20f7b9f64838a34cd02351370894/M3P%20shot%20on/WM162_%E5%AE%98%E7%BD%91%E9%A6%96%E9%A1%B5ShotOn_MASTER_1200x720_20220509.mp4",
  id: "133",
  name: "DJI MINI 3 Pro",
  image:
    "https://dji-official-fe.djicdn.com/cms/uploads/3e6e37ab06f20116bcad351c0c622bc8.jpg",
  subtitle: "Mini uçuş, Böyük işlər",
  text: "Mini dron",
}, 
 {
  video:"https://terra-1-g.djicdn.com/851d20f7b9f64838a34cd02351370894/F31_HG306_shot-on_CLEAN__10s_V1_2400x1440.mp4",
  id: "112",
  name: "AGRAS T40",
  image:
    "https://dji-official-fe.djicdn.com/cms/uploads/5a843d0cd7230195ad9c4891a49718dc@origin.jpg",
  subtitle: "Hamı üçün bir",
  text: "Kənd təsərrüfatı üçün xüsusi model",
},

{ video: "https://terra-1-g.djicdn.com/851d20f7b9f64838a34cd02351370894/260-5/F19_WM2605_Webclips_banner_PC-M_V1_2400x1440.mp4",
  id: "81",
  name: "DJI MAVIC 3",
  image:
    "https://dji-official-fe.djicdn.com/cms/uploads/f441b6be29d3eff292f4e3b22e306cb7.jpg",
  subtitle: "Gündəlik peşəkar dronunuz",
  text: "Peşəkar əl dronu",
},  {video:"https://terra-1-g.djicdn.com/851d20f7b9f64838a34cd02351370894/AC202%20Video/F83_AC202_Showreel_Clean_-10s_V3_2400-1440_20220913.mp4",
id: "113",
name: "GAMME MATRICE 30",
image:
  "https://dji-official-fe.djicdn.com/cms/uploads/2cebb36df1f1bebc497161d4502aab59.jpg",
subtitle: "Gələcək bizim qarşımızda açılır",
text: "İdealların seçimi",
},];
  let data = [
    {
      id: "112",
      name: "AGRAS T40",
      image:
        "https://dji-official-fe.djicdn.com/cms/uploads/5a843d0cd7230195ad9c4891a49718dc@origin.jpg",
      subtitle: "Hamı üçün bir",
      text: "Kənd təsərrüfatı üçün xüsusi model",
    },

    {video:"",
      id: "133",
      name: "DJI MINI 3 Pro",
      image:
        "https://dji-official-fe.djicdn.com/cms/uploads/3e6e37ab06f20116bcad351c0c622bc8.jpg",
      subtitle: "Mini uçuş, Böyük işlər",
      text: "Mini dron",
    },
    { video: "https://terra-1-g.djicdn.com/851d20f7b9f64838a34cd02351370894/260-5/F19_WM2605_Webclips_banner_PC-M_V1_2400x1440.mp4",
      id: "81",
      name: "DJI MAVIC 3",
      image:
        "https://dji-official-fe.djicdn.com/cms/uploads/f441b6be29d3eff292f4e3b22e306cb7.jpg",
      subtitle: "Gündəlik peşəkar dronunuz",
      text: "Peşəkar əl dronu",
    },

    {video:"",
      id: "113",
      name: "GAMME MATRICE 30",
      image:
        "https://dji-official-fe.djicdn.com/cms/uploads/2cebb36df1f1bebc497161d4502aab59.jpg",
      subtitle: "Gələcək bizim qarşımızda açılır",
      text: "İdealların seçimi",
    },
    {
      id: "110",
      name: "AGRAS T30",
      image:
        "https://dji-official-fe.djicdn.com/cms/uploads/d7d76b136bd88ba952a0ec61a100c4cb.jpg",
      subtitle: "Dəyərini ödəyən ən yaxşı dron",
      text: "Kənd təsərrüfatı üçün xüsusi model",
    },
    {
      id: "106",
      name: "DJI AVATA",
      image:
        "https://stormsend1.djicdn.com/stormsend/uploads/1a207b8e6a10319a40efd2f9f7912177.jpg",
      subtitle: "Uçmaq üçün doğulub",
      text: "DJİ-da pulsuz çatdırılma",
    },
  ];

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className} custom_bullet">${data[index].name}</span>`;
    },
  };
  const playVideo = (e) => {
    [...document.querySelectorAll(".slider_video")].map((a) => {
      a.pause();
    });
    e.target.play();
  };

  return (
    <div className='containerr'>
      <section className='container-drone'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={pagination}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className='hero_slider'
        >
          {data.map((a) => (
            <SwiperSlide key={a.id}>
              <div className='container-drone-info '>
                <img src={a.image} alt='' />
                <div className='container-drone-text '>
                  <p className='p-color-grey'>{a.text}</p>
                  <h1>{a.name}</h1>
                  <h3>{a.subtitle}</h3>
                </div>
                <div className='home-btn'>
                  <Link to={`/detail-product/${a.id}`}>
                    Daha ətraflı <div className='icon fa fa-angle-right'></div>
                  </Link>
                  <Link
                    to={"/basket-page"}
                    onClick={(e) => {
                      dispatch({
                        type: "SET_BASKET",
                        payload: basket.find((b) => b.id === a.id)
                          ? [...basket]
                          : [
                              ...basket,
                              {
                                id: a.id,
                                count: 1,
                              },
                            ],
                      });
                    }}
                  >
                    İndi al <div className='icon fa fa-angle-right'></div>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <div className='blogPage-header-container'>
          <h1>
          İşinizə yeni bir ölçü verin

          </h1>
          <div className='blogPage-header-detail'>
            <div className='blogPage-header-info'>
              <img src="https://dji-official-fe.djicdn.com/dps/39505c38b3c3fb452e2251d2d6f281a5.png" alt='' />
              <h2>İxtisaslaşmış heyət
</h2>
              <p>
              Komandalarınızı imkanlarını genişləndirən <br />ağıllı alətlərlə təchiz edin.
              </p>
            </div>
            <div className='blogPage-header-info'>
              <img src="https://dji-official-fe.djicdn.com/dps/b97cb244b8c3adb245f62fcdc1ea94f8.png" alt='' />
              <h2>Riskləri azaldın</h2>
              <p>Layihələri cədvəl üzrə saxlayın və <br/> komandalarınızı zərərdən uzaq tutun.
              </p>
            </div>
            <div className='blogPage-header-info'>
              <img src="https://dji-official-fe.djicdn.com/dps/c6ae7b080e2d1c79332ce3c18118102f.png" alt='' />
              <h2>İşləri rəqəmsallaşdırın</h2>
              <p>Ətraf mühiti ələ keçirin, məlumatlardan <br/> istifadə edin və real vaxtda qərarlar qəbul edin.</p>
            </div>
          </div>
        </div>
      <section className='container-drone-boxs-section'>
        <div className='container-drone-boxs'>
          <Link to={"/home-page1"} className='container-drone-box photo1'>
            <p className='p-color-grey'>flaqman kamera dron</p>
            <h1>DJI Mavic 3</h1>
            <h3>Yuxarıdan möhtəşəm şəkil</h3>
          </Link>
          <Link to={"/home-page2"} className='container-drone-box photo2'>
            {" "}
            <p className='p-color-grey'>Flaqman kameralı dron</p>
            <h1>DJI FPV</h1>
            <h3>Uçuş yenidən təyin olundu</h3>
          </Link>
          <Link to={"/home-page3"} className='container-drone-box photo3'>
            {" "}
            <p className='p-color-grey'>Seçilmiş modellər Kənd təsərrüfatı</p>
            <h1>Agras T40</h1>
            <h3>Hamı üçün bir</h3>
          </Link>
          <Link to={"/home-page4"} className='container-drone-box photo4'>
            {" "}
            <p className='p-color-grey'>Məhsul haqqında məlumat</p>
            <h1>Kamera dronları</h1>
            <h3>Məhsulun müqayisəsi burada</h3>
          </Link>
        </div>
      </section>
      <h1 className="best-text">Ən çox dəyərləndirilən məhsullarımız</h1>
      <div className="best-center">
      <section className='best-container'>
        <div className='best-drone'>
          <Swiper
            // direction={"horizontal"}
            slidesPerView={5}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
            // mousewheel={true}
           navigation={true}
            modules={[Autoplay, Pagination,Navigation]}
            className='mySwiper'
          >
            {bestDrones.map((a) => (
              <SwiperSlide key={a.id} className='best-con'>
                <Link to={`/detail-product/${a.id}`} key={a.id}>
                  <div className='rating flex'>
                    <img src={a.imagestar1} alt='' />
                    <img src={a.imagestar2} alt='' />
                    <img src={a.imagestar3} alt='' />
                    <img src={a.imagestar4} alt='' />
                    <img src={a.imagestar5} alt='' />
                    <p>({a.fun})</p>
                  </div>
                  <img src={a.image} alt='' />

                  <h3>{a.name.slice(0, 18)}</h3>
                  <h5 className='basket-16-manat flex'>
                    {a.price} <img src={manat_icon} alt='' />
                  </h5>
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
      <h1 className="best-text">Yüksək səviyədə görüntü effekli Dronlarımız</h1>

      <section className='video-slider-container'>
        <Swiper
          slidesPerView={1.5}
          spaceBetween={10}
          // mousewheel={true}
          loop={true}
          centeredSlides={true}
          navigation={true}
          // thums={{ swiper: thumbsSwiper }}
          modules={[ Navigation]}
          className='mySwiper2'
        >
          {video.map((a, b) => (
            <SwiperSlide key={b} className="relative">
               <div  className='container-video-info '>
                <div className='container-video-text '>
                  <p >{a.text}</p>
                  <h1>{a.name}</h1>
                  <h3>{a.subtitle}</h3>
                </div>
                <div className='home-btn'>
                  <Link to={`/detail-product/${a.id}`}>
                    Daha ətraflı <div className='icon fa fa-angle-right'></div>
                  </Link>
                  <Link
                    to={"/basket-page"}
                    onClick={(e) => {

                      console.log(a)
                      dispatch({
                        type: "SET_BASKET",
                        payload: basket.find((b) => b.id === a.id)
                          ? [...basket]
                          : [
                              ...basket,
                              {
                                id: a.id,
                                count: 1,
                              },
                            ],
                      });
                    }}
                  >
                    İndi al <div className='icon fa fa-angle-right'></div>
                  </Link>
                </div>
              </div>
              <video
                className='slider_video'
                onMouseEnter={playVideo}
                autoPlay
                muted
                loop
                src={a.video}
              ></video>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className=' blog-at-home '>
        <h1>Müxtəlif sahələrdə Drone məhsullarını kəşf edin</h1>
        <div className='blog-at-home-container flex'>
          <div className='blog-at-home-product'>
            <div className='blog-at-home-image'>
              <img
                src={
                  "https://www1.djicdn.com/cms/uploads/aed8f11ace20a21a51f4bd272a0de203.webp"
                }
                alt=''
              />
            </div>
            <div className='blog-at-home-text'>
              <h2>Şirkətlər</h2>
              <p>
                Müasir dövrdə dronların köməkliyi ilə problemlər daha operativ
                həll olunur.
              </p>{" "}
              <Link to={`/blog-page/construction-management`}>
                Daha ətraflı <div className='icon fa fa-angle-right'></div>
              </Link>
            </div>
          </div>
          <div className='blog-at-home-product'>
            <div className='blog-at-home-image'>
              <img
                src={
                  "https://dji-official-fe.djicdn.com/dps/a80c8fab970d94d45447d239ee2ec2b9.jpg"
                }
                alt=''
              />
            </div>
            <div className='blog-at-home-text'>
              <h2>Dövlət qurumları</h2>
              <p>
                Güc struktur orqanları bir çox təxirə salınmaz əməliyatları məhz
                müasir dronlar vasitəsi ilə həyata keçirirlər
              </p>{" "}
              <Link to={`/blog-page/law-enforcement`}>
                {" "}
                Daha ətraflı <div className='icon fa fa-angle-right'></div>
              </Link>
            </div>
          </div>
          <div className='blog-at-home-product'>
            <div className='blog-at-home-image'>
              <img
                src={
                  "https://www1.djicdn.com/cms/uploads/5bc202b7bdcdfcafdf2b6bbcdbcc9645.webp"
                }
                alt=''
              />
            </div>
            <div className='blog-at-home-text'>
              <h2>Kənd təsərrüfatı</h2>
              <p>
                DJI Agriculture operatorları qabaqcıl texnologiya, eləcə də
                innovativ iş axınları ilə təchiz etməklə əkinçiliyi həmişəkindən
                daha səmərəli edir
              </p>{" "}
              <Link to={`/blog-page/power-generation-management`}>
                {" "}
                Daha ətraflı <div className='icon fa fa-angle-right'></div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      

    
      <section className='list-logo-container'>
        <div className='list-drone'>
          <Swiper
            // direction={"horizontal"}
            slidesPerView={13}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            loop
            spaceBetween={1}
            // mousewheel={true}
            // pagination={{
            //   clickable: true,
            // }}
            modules={[ Autoplay, Pagination]}
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
      </section>
      </div>
  
  );
}
const t = (a) => a;
export default connect(t)(HomePage);
