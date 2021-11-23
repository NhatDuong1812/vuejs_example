import apiURL from '../../../data/api_url'
export default {
  // Endpoints
  loginEndpoint: apiURL.LOGIN,
  registerEndpoint: '/jwt/register',
  refreshEndpoint: apiURL.REFRESH_TOKEN,
  logoutEndpoint: '/jwt/logout',

  // This will be prefixed in authorization header with token
  // e.g. Authorization: Bearer <token>
  tokenType: 'Bearer',

  // Value of this property will be used as key to store JWT token in storage
  storageTokenKeyName: 'accessToken',
  storageRefreshTokenKeyName: 'refreshToken',
}
