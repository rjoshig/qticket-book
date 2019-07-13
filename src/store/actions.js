import { Auth } from './../plugins/firebase.js';
import router from './../router/index.js';

export function signUpAction({ commit }, payload) {
  commit('setUserRegistrationSubmitButtonLoading', true);
  //commit('setStatus', 'loading');

  Auth.createUserWithEmailAndPassword(payload.email, payload.password)
    .then(response => {
      // alert('success');

      // response will have user
      // user will have uid will be updated to the state
      commit('setUser', response.user.uid);
      // commit('setStatus', 'success');
      commit('setError', null);
      commit('setUserRegistrationSubmitButtonLoading', false);
      commit('setUserRegistrationDialog', false);
    })
    .catch(error => {
      commit('setStatus', 'failure');
      commit('setError', error.message);
      commit('setUserRegistrationSubmitButtonLoading', false);

      console.log(error);
    });
}

export function signInAction({ commit }, payload) {
  commit('setUserLoginSubmitButtonLoading', true);
  Auth.signInWithEmailAndPassword(payload.email, payload.password)
    .then(response => {
      // alert('success login');
      commit('setIsAuthenticated', true);
      commit('setUser', response.user.uid);
      commit('setStatus', 'success');
      commit('setError', null);
      commit('setUserLoginSubmitButtonLoading', false);
      commit('setUserLoginDialog', false);
      router.push('/');
    })
    .catch(error => {
      commit('setStatus', 'failure');
      commit('setError', error.message);
      commit('setUserLoginSubmitButtonLoading', false);
      commit('setIsAuthenticated', false);
      console.log(error);
    });
}

export function signOutAction({ commit }) {
  Auth.signOut()
    .then(response => {
      commit('setUser', null);
      commit('setStatus', 'success');
      commit('setError', null);
      commit('setIsAuthenticated', false);
      console.log(response);
    })
    .catch(error => {
      commit('setStatus', 'failure');
      commit('setError', error.message);
      commit('setIsAuthenticated', false);
    });
}
