import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { useState } from "react";
import search_icon from "../assets/icons/magnifying-glass.png";
import basket_icon from "../assets/icons/shopping-basket.png";
import drone_logo from "../assets/icons/black1.png";
import close from "../assets/icons/close.png";
// import magnifying_glass from "../assets/icons/magnifying-glass1.png";
import delete_icon from "../assets/icons/delete.png";
import zoom_icon from "../assets/icons/zoom.png";
import heart_icon from "../assets/icons/heart.png";
import FavoritePage from "../pages/FavoritePage";

function Header({
  basketModalShow,
  basket,
  products,
  favorite,
  favoriteModalShow,
  dispatch,
}) {
 
  const [fix, setFix] = useState(false);
  // const [search, setSearch] = useState([]);
  const [searchInput, setSearchInput] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const [wordEntered, setWordEntered] = useState("");
  const handleFilter = (e) => {
    const searcWord = e.target.value;
    setWordEntered(searcWord);
  };

  function setFixed() {
    if (window.scrollY > 80) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixed);
  const toggle = () =>
    basket.length ? (basketModalShow ? false : true) : false;
  return (
    <header className={fix ? "fixed" : ""}>
      <div className={searchInput ? "fon" : ""}>
        <nav className='NavLink'>
          <div className='link'>
            <div className='linkc'>
              <NavLink className='logo' to='/'>
                <img src={drone_logo} alt='' />
              </NavLink>

              <NavLink to='/all-drones'> Bütün Dronlar</NavLink>
              <NavLink to='/basket-page'> Səbətim</NavLink>
            </div>
            <div className='flex'>
              <div className='other'>
                <NavLink to='/about-page'> Haqqımızda </NavLink>
                <NavLink to='/blog-page'> Bloq</NavLink>
                <NavLink to='/contact-page'> Bizimlə əlaqə</NavLink>
              </div>
              <div
                className={
                  searchInput ? "search-contanier active" : "search-contanier"
                }
              >
                <Link to='/' className='logo-search'>
                  <img
                    src={drone_logo}
                    alt=''
                    onClick={() => (
                      setSearchInput(false),
                      setSearchModal(false),
                      setWordEntered("")
                    )}
                  />
                </Link>

                <div className='search-img'>
                  <img src={zoom_icon} alt='' />
                </div>
                <input
                  autoComplete='off'
                  id='search_name'
                  type='text'
                  value={wordEntered}
                  placeholder='Search...'
                  onChange={handleFilter}
                />
                <div className='search-img' onClick={() => setWordEntered("")}>
                  <img src={delete_icon} alt='' />
                </div>
                <div
                  className='search-img'
                  onClick={() => (
                    setSearchInput(false),
                    setSearchModal(false),
                    setWordEntered("")
                  )}
                >
                  <img src={close} alt='' />
                </div>
                <div
                  className={
                    wordEntered.length
                      ? "search-product active"
                      : "search-product"
                  }
                >
                  {wordEntered.length &&
                    products
                      .filter((item) =>
                        item.name
                          .toLowerCase()
                          .includes(wordEntered.toLowerCase())
                      )
                      .map((item) => (
                        <Link
                          to={`/detail-product/${item.id}`}
                          key={item.id}
                          onClick={() => setSearchInput(false)}
                          className='search-list-product'
                        >
                          <img src={item.image} alt='' />
                          <h3>{item.name}</h3>
                        </Link>
                      ))}
                </div>
              </div>

              <img
                src={search_icon}
                alt=''
                onClick={() => setSearchInput(true)}
              />

              <img
                src={basket_icon}
                alt=''
                onClick={() =>
                  dispatch({
                    type: "SET_BASKETMODALSHOW",
                    payload: toggle(),
                  })
                }
              />
             
            </div>
          </div>
        </nav>
      </div>
      <div >
      <div className={favoriteModalShow ? "favoriteModalShow-active":"favoriteModalShow"}>
   <FavoritePage className={favoriteModalShow ? "favoriteModalShow-active":"favoriteModalShow"} />
    </div>
        <div
          className={favoriteModalShow ? "heart-hover flex" : "heart flex "}
          onClick={() =>
            dispatch({
              type: "SET_FAVORITEMODALSHOW",
              payload:
                 favoriteModalShow
                  ? false
                  : true
                
            })
          }
        >
          <p>Favorite </p>  <img className="heart_icon" src={heart_icon} alt='' />
        </div>
      </div>
    </header>
  );
}
const t = (a) => a;

export default connect(t)(Header);
