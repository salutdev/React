export default store => next => action => {
    console.log('---', 'state before: ', store.getState())
    console.log('--- in middleware ---', 'dispatching: ', action)
    next(action)
    console.log('---', 'state after: ', store.getState())
}