const getProducts = state => state.currentDay.eatenProducts;
const getEatenProductsByDate = (state, currentDate) => state.days.find(day => day.date === currentDate);

export default { getProducts, getEatenProductsByDate };
