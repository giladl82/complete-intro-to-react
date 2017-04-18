import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import Landing from './Landing'
import Search from './Search'
import '../public/normalize.css'
import '../public/style.css'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Route exact path='/' component={Landing} />
          <Route path='/search' component={Search} />
        </div>
      </BrowserRouter>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
