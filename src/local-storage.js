export function loadAuthToken() {
  return localStorage.getItem('authToken');
}

export function saveAuthToken(authToken) {
  try {
    localStorage.setItem('authToken', authToken);
  } catch(err) {
    console.log(err);
  }
}

export function clearAuthToken() {
  try {
    localStorage.removeItem('authToken');
  } catch(err) {
    console.log(err);
  }
}
