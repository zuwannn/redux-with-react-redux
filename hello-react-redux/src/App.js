import React from 'react'
import { connect } from 'react-redux'

const App =({ message, counter }) => (

  <div className="container">
    <div className="column column is-12">
      <h1>Counter : { counter }</h1>
    </div>

    <div className="buttons">
      <button className="button is-primary">+1</button>
      <button className="button is-link">+2</button>
      <button className="button is-info">+3</button>
    </div>

    <div className="buttons">
      <button className="button is-primary">- 1</button>
      <button className="button is-link">- 2</button>
      <button className="button is-info">- 3</button>
    </div>

  </div>
)

const mapStateToProps = function (state) {
  return {
    message: 'This is message from mapStateToProps',
    counter: state.counters || 0
  }
}

const AppWithConnect = connect(mapStateToProps)(App)
export default AppWithConnect

