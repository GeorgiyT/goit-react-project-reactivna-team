const getProducts = state => state.products.day?.eatenProducts;
const getEatenProductsByDate = (state, currentDate) => state.days.find(day => day.date === currentDate);

export default { getProducts, getEatenProductsByDate };
