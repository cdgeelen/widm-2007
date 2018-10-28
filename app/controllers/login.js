import Controller from '@ember/controller';
import { inject as service } from '@ember/service';


export default Controller.extend({
  session: service(),


  username: '',
  password: '',


  actions: {
    login() {
      this.session.authenticate(
        'authenticator:widm',
        this.username,
        this.password
      );
    }
  }
});
