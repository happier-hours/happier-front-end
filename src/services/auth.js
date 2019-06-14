import { WebAuth } from 'auth0-js';

const auth0 = new WebAuth({
  domain: 'dave-cornelius.auth0.com',
  clientID: 'kcHpVTh2bnQu5E2eI58yMmg1I9P9Wcmm',
  redirectUri: 'http://localhost:3000/callback',
  responseType: 'token id_token',
  scope: 'openid'
});

export const login = () => {
  auth0.authorize();
};

export const handleAuth = () => {
  return new Promise((resolve, reject) => {
    auth0.parseHash((error, results) => {
      if(results && results.accessToken && results.idToken) {
        auth0.client.userInfo(results.accessToken, (err, profile) => {
          if(err) return reject('Could not get user profile');
          resolve({
            email: profile.name,
            token: results.accessToken,
            image: profile.picture
          });
        });
      } else {
        reject('Could not log in.');
      }
    });
  });
};
