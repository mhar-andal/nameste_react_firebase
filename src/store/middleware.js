const apiMiddleware = () => next => (action) => {
  const {
    promise, type, validate, ...rest
  } = action;

  // if we dont have a promise, continue dispatching
  if (!promise) return next(action);

  // names for promise state dispatches
  const SUCCESS = type;
  const REQUEST = `${type}_REQUEST`;
  const FAILURE = `${type}_FAILURE`;

  // dispatch 'type_REQUEST' at the start of the promise
  next({ ...rest, type: REQUEST, isFetching: true });

  // dispatch based on promise completion
  return promise
    .then((payload) => {
      // we do .data because of axios
      next({
        ...rest, payload: payload.data, type: SUCCESS, isFetching: false
      });
      return { payload: payload.data };
    })
    .catch((error) => {
      if (error.response && error.response.status === 401) {
        // our session has expired, so dispatch an event that resets the session.
        next({ ...rest, type: 'SESSION_CHECK_FAILURE', isFetching: false });
      }

      next({
        ...rest, type: FAILURE, error, isFetching: false
      });

      return Promise.reject(error);
    });
};

export default apiMiddleware;
