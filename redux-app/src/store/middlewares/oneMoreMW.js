export default store => next => action => {
    console.log('--- One more middleware before next ---')
    next(action)
    console.log('--- One more middleware after next ---')
}