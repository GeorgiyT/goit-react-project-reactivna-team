const getAuthSelector = state => state.auth.tokens.username;

const getEmailSelector = state => state.auth.tokens.email;
const isAuthenticatedSelector = state => Boolean(state.auth.tokens.accessToken);

export { getAuthSelector, getEmailSelector, isAuthenticatedSelector };
