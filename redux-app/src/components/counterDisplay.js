import React from 'react'
import {connect} from 'react-redux'


const CounterDisplayP = ({counter}) => {
    return <div>{counter}</div>
}

//const decorator = connect(mapStateToProps)

export default connect((state) => {                            // Reading state from store
    return {
        counter: state.counter          // Part of the state this component is interested in. Will be available as props
    }
})(CounterDisplayP)