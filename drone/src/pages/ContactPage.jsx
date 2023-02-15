import contact_mail from "../assets/icons/contact.png";
import call_png from "../assets/icons/call.svg";
import comp_png from "../assets/icons/comp.svg";
import office_png from "../assets/icons/office.svg";
import map_png from "../assets/icons/map.png";
import main_png from "../assets/icons/main-end.png";

function ContactPage() {
  return (
    <>
      <main className="contactUs-main">
        <section className='contactPage-main'>
          <div className='contact_main_text'>
            <h1>
            Bizə   <br />müraciətiniz var? <br /> 
             
            </h1>

            <h2>Azərbaycan, Sumqayıt</h2>

            <h2>+994(50)444-33-22</h2>
          </div>
          <div className='contact_mail'>
            <img src={contact_mail} alt='' />
          </div>
        </section>
        <div className='main-end'>
          <div className='main-end-l'></div>
          <div className='main-end-c'><img src={main_png} alt="" /></div>
          <div className='main-end-r'></div>
        </div>
      </main>
      <section>
        <div className='contactUs-container flex'>
          <div className='contactUs flex'>
            <div className='contactUs-info'>
              <h3>Şirkətin qərargahı</h3>
              <h4 className='number'>
              Azərbaycan, Sumqayıt ş.,
                <br />
                1305 NW 18th Ave. <br />
                Oreqon 97209
              </h4>
              <h4>+994(50)444-33-22</h4>
              <h4>dron@mail.com</h4>
            </div>
            <div className='contactUs-right-container'>
              <h2 className='look'>
              Peşəkar şəkil və ya video axtarırsınız? Görmək istəyirsiniz
                ətraf hər kəsdən fərqlidir? İstəyirsən
                işinizdə texnologiyadan faydalanırsınız? Əgər belədirsə, əlaqə saxlayın
                bizə. Uyğun olaraq sizə ən ideal Drone modellərini təqdim edəcəyik
                ehtiyaclarınız.
              </h2>
              <h4>
              Bir Drone Digital komandası ilə birbaşa əlaqə yaratmaq üçün bizə bir xətt buraxın
                üzv.
              </h4>
              <div>
                <input
                  className='input-contactUs-two'
                  type='text'
                  placeholder='First Name*'
                />{" "}
                <input
                  className='input-contactUs-two'
                  type='text'
                  placeholder='Last Name*'
                />
              </div>
              <div>
                <input
                  className='input-contactUs'
                  type='text'
                  placeholder='Email Address so we can write you back*'
                />
              </div>
              <div>
                <input
                  className='input-contactUs'
                  type='text'
                  placeholder='Company Name*'
                />
              </div>
              <div>
                <input
                  className='input-contactUs'
                  type='text'
                  placeholder='Phone number'
                />
              </div>
              <div>
                <input
                  className='input-contactUs'
                  type='text'
                  placeholder='Website URL'
                />
              </div>
              <div>
                <input
                  className='input-contactUs-one'
                  type='text'
                  placeholder='What is your ideal outcome for working with an agency?'
                />
              </div>
              <div>
                <ul className='robot'>
                  <div className='robot-text'>
                    <input type='checkbox' id='not_robot' />
                    <label htmlFor='not_robot'>
                      <h3>Mən robot deyiləm</h3>
                    </label>
                  </div>
                  <div className='test-container'>
                    <div className='test'></div>
                    <div>reCAPTCHA</div>
                    <div>Privacy-Terms</div>
                  </div>
                </ul>
              </div>
              <div className='contactUs-end'>
                <h1>BİZİMLƏ ƏLAQƏ SAXLAYIN</h1>
              </div>
            </div>
          </div>
        </div>
        <div className='flex grey-background'>
          <ul className='contactUs-svg'>
            <img src={call_png} alt='' />

            <li>
              <h3>Bizə bir əlaqə buraxın</h3>
            </li>
            <li>
              <p>Bizə zəng edin!</p>
            </li>
            <li>
              <h4>+994(50)444-33-22</h4>
            </li>
          </ul>
          <ul className='contactUs-svg'>
            <img src={comp_png} alt='' />

            <li>
              <h3>Bizə E-poçt Göndərin</h3>
            </li>
            <li>
              <p>Qiymət təklifi alın və ya xidmətlər haqqında öyrənin.</p>
            </li>
            <li>
              <h4>drone@mail.com</h4>
            </li>
          </ul>
          <ul className='contactUs-svg '>
            <img src={office_png} alt='' />

            <li>
              <h3>Ofisimiz</h3>
            </li>
            <li>
              <p>
              Azərbaycan, Sumqayıt ş.,
                <br />
                1305 NW 18th Ave. Oregon 97209
              </p>
            </li>
            <li>
              <h4>İstiqamətləri əldə edin</h4>
            </li>
          </ul>
        </div>
        <div className='map'>
          <img src={map_png} alt='' />
        </div>
      </section>
    </>
  );
}

export default ContactPage;
