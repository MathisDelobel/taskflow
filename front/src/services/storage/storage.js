export default {
    setAuthToken,
    getAuthToken,
    removeAuthToken
}

function setAuthToken(token) {
    // This line add the token to localStorage under the x-auth-token name
    localStorage.setItem("x-auth-token", token);
}

function getAuthToken() {
    // This line retrieves the token from localStorage
    return localStorage.getItem("x-auth-token");
}

function removeAuthToken() {
    localStorage.removeItem("x-auth-token");
}