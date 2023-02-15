const initalState = {
  basketModalShow: false,
  basket: JSON.parse(window.localStorage.getItem("basket")) || [],
  products: [],
  categories: [],
  brandsFilter: [],
  videos: [],
  priceFilter: [],
  parametr: [],
  favorite: JSON.parse(window.localStorage.getItem("favorite")) || [],
  favoriteModalShow: false,   
  supportmodalshow: false,   
  loading: true,

};
export default function reducer(state = initalState, action) {
  switch (action.type) {
    case "SET_BASKETMODALSHOW":
      return { ...state, basketModalShow: action.payload };
    case "SET_BASKET":
      return { ...state, basket: action.payload };
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "SET_BRANDSFILTER":
      return { ...state, brandsFilter: action.payload };
    case "SET_VIDEOS":
      return { ...state, videos: action.payload };
    case "SET_PRICEFILTER":
      return { ...state, priceFilter: action.payload };
    case "SET_PARAMETR":
      return { ...state, parametr: action.payload };
    case "SET_FAVORITE":
      return { ...state, favorite: action.payload };
    case "SET_FAVORITEMODALSHOW":
      return { ...state, favoriteModalShow: action.payload };
    case "SET_SUPPORTMODALSHOW":
      return { ...state, supportmodalshow: action.payload };
      case "SET_LOADING":
        return { ...state, loading: action.payload };
    default:
      return state;
  }
}
