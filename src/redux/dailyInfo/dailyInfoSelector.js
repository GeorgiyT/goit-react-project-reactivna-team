const calSelector = state => state.currentDay?.daySummary?.dailyRate;
const notProductsSelector = state => state.user?.notAllowedProducts;
const kcalLeftSelector = state => state.currentDay?.daySummary?.kcalLeft;
const dateSelector = state => state.currentDay?.daySummary?.date;

const kcalConsumedSelector = state => state.currentDay?.daySummary?.kcalConsumed;
const percentsOfDailyRateSelector = state => state.currentDay?.daySummary?.percentsOfDailyRate;

export { notProductsSelector, calSelector, percentsOfDailyRateSelector, kcalConsumedSelector, kcalLeftSelector, dateSelector };
