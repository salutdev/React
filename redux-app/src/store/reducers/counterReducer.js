const counterReducer = function(counter = 0, action) {
    console.log('In reducer', counter, action)
    const {type} = action
    switch(type) {
        case '+': return counter + action.num
        case '-': return counter - action.num
        case '*': return counter * action.num

        // return {...obj, field: val}
        // return Object.assign({}, obj, { field: val })
    }
    return counter //|| 0
}

export default counterReducer