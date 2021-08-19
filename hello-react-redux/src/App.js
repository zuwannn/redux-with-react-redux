import React from 'react'
import { connect } from 'react-redux'

import { increment, decrement } from './actions'


const App =({ message, counter, dispatch }) => (

  <div className="container">
    <div className="column column is-12">
      <h1>Counter : { counter }</h1>
    </div>

    <div className="buttons">
      <button className="button is-primary" onClick={() => dispatch(increment(1))}>
        +1
      </button>
      <button className="button is-link" onClick={() => dispatch(increment(2))}>
        +2
      </button>
      <button className="button is-info" onClick={() => dispatch(increment(3))}>
        +3
      </button>
    </div>

    <div className="buttons">
      <button className="button is-primary" onClick={() => dispatch(decrement(1))}>
        - 1
      </button>
      <button className="button is-link" onClick={() => dispatch(decrement(2))}>
        - 2
      </button>
      <button className="button is-info" onClick={() => dispatch(decrement(3))}>
        - 3
      </button>
    </div>

  </div>
)

const mapStateToProps = function (state) {
  return {
    message: 'This is message from mapStateToProps',
    counter: state.counters || 0
  }
}

// หรือเขียตนแบบ Arrow function
// const mapStateToProps = state => ({
//   message: 'This is message from mapStateToProps',
//   counter: state.counters || 0
// })

const AppWithConnect = connect(mapStateToProps)(App)
export default AppWithConnect

