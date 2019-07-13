// export function someMutation(/* state */) {}

export function setUser(state, payload) {
  state.user = payload;
}

export function removeUser(state) {
  state.user = null;
}

export function setStatus(state, payload) {
  state.status = payload;
}

export function setError(state, payload) {
  state.error = payload;
}

export function setUserRegistrationDialog(state, payload) {
  state.userRegistrationDialog = payload;
}
export function setUserLoginDialog(state, payload) {
  state.userLoginDialog = payload;
}
export function setIsAuthenticated(state, payload) {
  state.isAuthenticated = payload;
}
export function setUserRegistrationSubmitButtonLoading(state, payload) {
  state.userRegistrationSubmitButtonLoading = payload;
}

export function setUserLoginSubmitButtonLoading(state, payload) {
  state.userLoginSubmitButtonLoading = payload;
}
export function setLoading(state, payload) {
  state.loading = payload;
}
