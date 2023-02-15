import facebook_icon from "../assets/icons/facebook.png";
import twitter_icon from "../assets/icons/twitter.png";
import youtube_icon from "../assets/icons/youtube.png";
import vimeo_icon from "../assets/icons/vimeo.png";
import instagram_icon from "../assets/icons/instagram.png";
import sumbit_icon from "../assets/icons/sumbit.png";

function Footer() {
  return (
    
      <section className="footer-footer">
        <div className='footer-container'>
          <div className='footer-ul-container'>
            <div className='ul-container'>
              <div className='li-container'>
                <p className='white'>Where to Buy</p>
                <ul>
                  <li>Online Store</li>
                  <li>Flagship Stores</li>
                  <li>Retail Stores</li>
                  <li>Become a Dealer</li>
                  <li>Apply For Authorized Store</li>
                </ul>
              </div>
            </div>
            <div className='ul-container'>
              <div className='li-container'>
                <p className='white'>Support</p>
                <ul>
                  <li>Fly Safe</li>
                  <li>Drone Flying Tips</li>
                  <li>Product Support</li>
                  <li>Help Purchasing</li>
                  <li>After-Sales Service Policies</li>
                </ul>
              </div>
            </div>
            <div className='ul-container'>
              <div className='li-container'>
                <p className='white'>Explore</p>
                <ul>
                  <li>Newsroom</li>
                  <li>Events</li>
                  <li>Drone Global Citizenship</li>
                  <li>Buying Guides</li>
                </ul>
              </div>
            </div>
            <div className='ul-container'>
              <div className='li-container'>
                <p className='white'>Community</p>
                <ul>
                  <li>SkyPixel</li>
                  <li>Drone Forum</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='input-container'>
            
              <p className='white'>Subscribe to DRONE PRO</p>
              <p>Get the latest news from DRONE Pro.</p>
              <input
              autoComplete='off'
                type='text'
                id='mail'
                placeholder='Please Enter Your Email Address'
              />
               <p className="submit"> send </p> 
             
             
           
          </div>
        </div>
        <div className="line-end">
        <div className='line-container'>
          <div className='line-ul-container'>
            <ul>
              <li className='white'>Who We Are</li>
              <li className='white'>Contact Us</li>
              <li className='white'>About</li>
              <li className='white'>Blog</li>
            </ul>
          </div>
          <div className='media'>
            <div>
              <img src={facebook_icon} alt='' />
            </div>
            <div>
              <img src={twitter_icon} alt='' />
            </div>
            <div>
              <img src={youtube_icon} alt='' />
            </div>
            <div>
              <img src={vimeo_icon} alt='' />
            </div>
            <div>
              <img src={instagram_icon} alt='' />
            </div>
          </div>
        </div>
        </div>
        <div className="end">

          <p>Copyright © 2022 DRONE All Rights Reserved.</p>
</div>
      </section>
  
  );
}

export default Footer;
