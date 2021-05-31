const getAuthSelector = state => state.auth.tokens.username;

const getEmailSelector = state => state.auth.tokens.email;



export { getAuthSelector, getEmailSelector};
