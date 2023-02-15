import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";

function FavoritePage({
  basketModalShow,
  basket,
  products,
  categories,
  parametr,
  dispatch,
  favoriteModalShow,
  favorite,
}) {
  return (
    <div className='favoritePage-container'>
      {favorite.length ? (
        favorite.map((b) => (
          <Link
            to={`/detail-product/${b.id}`}
            key={b.id}
            className='favorite-modal-product flex'
          >
            <div className='favorite-modal-product-img'>
              <img src={b.image} alt='' />
            </div>
            <div>
              <p>{b.name.slice(0, 25)}</p>
            </div>
          </Link>
        ))
      ) : (
        <div className='selecteddd'>
          <h2>Zəhmət olmasa məhsul seçin...</h2>
        </div>
      )}
    </div>
  );
}
const t = (a) => a;
export default connect(t)(FavoritePage);
