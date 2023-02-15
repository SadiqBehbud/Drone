import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

import header_1 from "../assets/icons/blog-header1.png";
import header_2 from "../assets/icons/blog-header2.png";
import header_3 from "../assets/icons/blog-header3.png";
import fire_drone from "../assets/icons/fire-drone.jpg";
import police_drone from "../assets/icons/police-drone.jpg";
import anbulance_drone from "../assets/icons/anbulance-drone.jpg";
import electric_drone from "../assets/icons/electric-drone.jpg";
import electric_drone2 from "../assets/icons/electric-drone2.jpg";
import sunPanel_drone from "../assets/icons/sunPanel-drone.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function BlogPage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className='blogPage'>
      <main className='blogPage-main'>
        <div className='blogePage-main-text'>
          <h1>İctimai təhlükəsizlik</h1>
          <h4>
          Hava məlumatları ilə effektiv cavab <br />
            Lazım olan yerdə birbaşa və ünvanlı yardım
          </h4>
        </div>
      </main>
      <section className='blogPage-container'>
        <div className='blogPage-header-container'>
          <h1>
          Mühafizə və xidmət üçün <br /> DRONE-nin yerləşdirilməsi
          </h1>
          <div className='blogPage-header-detail'>
            <div className='blogPage-header-info'>
              <img src={header_1} alt='' />
              <h2>Dərhal məlumat</h2>
              <p>
              Fövqəladə missiyalara sürətli hava   <br />bilikləri ilə cavab verin
              </p>
            </div>
            <div className='blogPage-header-info'>
              <img src={header_2} alt='' />
              <h2>Koordinasiya edilmiş həllər</h2>
              <p>
              Birbaşa ilə komandalar arasında sinxronizasiya
                <br />
                resurslar və canlı missiya nəzarəti
              </p>
            </div>
            <div className='blogPage-header-info'>
              <img src={header_3} alt='' />
              <h2>Riskin azaldılması</h2>
              <p>Etibarlı əməliyyatlar üçün təxminləri aradan qaldırın</p>
            </div>
          </div>
        </div>
        <div className='applications flex'>
          <h1>Proqramlar</h1>
        </div>
        <section className='blogPage-container2'>
          <div>
            <div className='blogPage-container2-1 flex' data-aos="fade-up" data-aos-duration="2000"
     data-aos-anchor-placement="top-center" data-aos-offset="10" data-aos-delay="100">
              <div className='fire-drone'   >
                <img src={fire_drone} alt='' />
              </div>
              <div className='blogPage-container2-text'  >
                <h1>Yanğınlara qarşı mübarizə aparın</h1>
                <p>
                DRON texnologiyası yanğınsöndürənləri hava məlumatları ilə təmin edir,
                  sürətli asanlaşdıran,
                  <br /> maksimum səmərəli və məlumatlı qərar qəbul etmək
                  təhlükəsizlik.
                </p>
                <Link to={"/blog-page/firefighting"}>
                Dronların yanğınsöndürənləri necə dəstəklədiyini öyrənin
                </Link>
              </div>
            </div>
            <div className='blogPage-container2-1 flex' data-aos="fade-up" data-aos-duration="2000"
     data-aos-anchor-placement="top-center" data-aos-offset="50" data-aos-delay="200">
              <div className='blogPage-container2-text'  >
                <h1>İctimai asayişin qorunması</h1>
                <p>
                Pilotsuz uçuş aparatları hüquq-mühafizə orqanları üçün əvəzsiz alətə çevrilir{" "}
                  <br />
                  agentliklər, daha çox təhlükəsizlik, daha sürətli müdaxilələr və
                  daha yaxşı
                  <br /> qərarlar.
                </p>
                <Link to={"/blog-page/law-enforcement"}>
                Dronların yanğınsöndürənləri necə dəstəklədiyini öyrənin
                </Link>
              </div>
              <div className='fire-drone'  >
                <img src={police_drone} alt='' />
              </div>
            </div>
            <div className='blogPage-container2-1 flex' data-aos="fade-up" data-aos-duration="2000"
     data-aos-anchor-placement="top-center" data-aos-offset="300" data-aos-delay="600">
              <div className='fire-drone'  >
                <img src={anbulance_drone} alt='' />
              </div>
              <div className='blogPage-container2-text'  >
                <h1>Xilasetmə xidmətləri</h1>
                <p>
                Təcili yardım qrupları hədəfləri müəyyən edə və yerləşdirə bilər
                  relyef <br />
                  Dronların hava naviqasiyası ilə daha sürətli.
                </p>
                <Link to={"/blog-page/rescue-services"}>
                Dronların yanğınsöndürənləri necə dəstəklədiyini öyrənin
                </Link>
              </div>
            </div>
            <div className='blogPage-container2-1 flex' data-aos="fade-up" data-aos-duration="2000"
     data-aos-anchor-placement="top-center" data-aos-offset="500" data-aos-delay="700">
              <div className='blogPage-container2-text'  >
                <h1>Tikinti idarəçiliyi</h1>
                <p>
                Drone həlləri tikintinin hər bir addımını idarə etməyə kömək edir
                  tərəqqini izləmək, riskləri azaltmaq və personalı saxlamaq üçün proses
                  təhlükəsiz.
                </p>
                <Link to={"/blog-page/construction-management"}>
                Dronların tikinti layihələrini idarə etməyə necə kömək etdiyini öyrənin
                </Link>
              </div>
              <div className='fire-drone'  >
                <img src={electric_drone} alt='' />
              </div>
            </div>
            <div className='blogPage-container2-1 flex' data-aos="fade-up" data-aos-duration="2000"
     data-aos-anchor-placement="top-center" data-aos-offset="700" data-aos-delay="800">
              <div className='fire-drone'  >
                <img src={electric_drone2} alt='' />
              </div>
              <div className='blogPage-container2-text'  >
                <h1>Şəbəkə idarəetməsi</h1>
                <p>
                Drone həlləri hər şey haqqında ətraflı və dəqiq məlumat verir
                  şəbəkə hissələri, yoxlamaları avtomatlaşdırmaq, sürətli imkan verir
                  təmir edir və dayanma müddətini azaldır.
                </p>
                <Link to={"/blog-page/power-grid-management"}>
                Dronların idarə olunmasına necə töhfə verə biləcəyini kəşf edin
                  elektrik şəbəkəsi
                </Link>
              </div>
            </div>
            <div className='blogPage-container2-1 flex' data-aos="fade-up" data-aos-duration="2000"
     data-aos-anchor-placement="top-center" data-aos-offset="900" data-aos-delay="900">
              <div className='blogPage-container2-text'  >
                <h1>Elektrik stansiyasının idarə edilməsi</h1>
                <p>
                Drone həlləri vacib vizual və termal məlumatları təmin edir
                  personalın müəyyən etməsinə imkan yaratmaq üçün elektrik stansiyalarının vəziyyəti
                  riskləri aradan qaldırır və müdaxilə etmədən tez bir zamanda düzəldici tədbirlər görür
                  əməliyyatlar.
                </p>
                <Link to={"/blog-page/power-generation-management"}>
                Dronların bir gücün idarə edilməsini necə təkmilləşdirdiyini kəşf edin
                  nəsil şəbəkəsi
                </Link>
              </div>
              <div className='fire-drone'  >
                <img src={sunPanel_drone} alt='' />
              </div>
            </div>
          </div>
        </section>
      </section>
      <ReactPaginate
        className='pagenation'
        breakLabel='...'
        nextLabel=' >'
        // onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={8}
        previousLabel='<'
        renderOnZeroPageCount={null}
      />
    </section>
  );
}

export default BlogPage;
