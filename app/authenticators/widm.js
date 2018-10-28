import OAuth2PasswordGrantAuthenticator from 'ember-simple-auth/authenticators/oauth2-password-grant';


export default OAuth2PasswordGrantAuthenticator.extend({
  authenticate() {
    return new Promise((resolve) => {
      // NOTE: for now, accept any username/password combination and always resolve.
      // TODO: replace with real login.
      resolve();
    })
  }
});