export const createUser = (email, password, firebase) => ({
  type: 'AUTH',
  promise: firebase.createUser(
    { email, password },
  )
});

export const login = (email, password) => ({
  type: 'AUTH',
  promise: firebase.createUser(
    { email, password },
  )
});
