import React from 'react'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
// import Landing from './Landing'
// import Search from './Search'
// import Details from './Details'
import AsycRoute from './AsyncRoute'
import preload from '../public/data.json'
// import '../public/normalize.css'
// import '../public/style.css'

if (global) {
  global.System = {
    import () { }
  }
}

const AsyncDetailsComponent = (props) => {
  const shows = preload.shows.filter((show) => {
    return props.match.params.id === show.imdbID
  })

  return (
    <AsycRoute
      props={Object.assign({ show: shows[ 0 ] }, props)}
      loadingPromise={System.import('./Details')} />
  )
}

AsyncDetailsComponent.propTypes = {
  match: React.PropTypes.object
}

const App = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        {/* <Route exact path='/' component={Landing} /> */}
        <Route exact path='/'
          component={(props) => <AsycRoute props={props}
            loadingPromise={System.import('./Landing')} />}
        />
        {/* <Route path='/search'
          component={(props) => <Search shows={preload.shows} {...props} />} />  */}
        <Route path='/search'
          component={(props) => {
            return (<AsycRoute
              props={Object.assign({ shows: preload.shows }, props)}
              loadingPromise={System.import('./Search')} />)
          }} />
        {/* <Route path='/details/:id'
          component={(props) => {
            const shows = preload.shows.filter((show) => {
              return props.match.params.id === show.imdbID
            })

            return <Details show={shows[ 0 ]} {...props} />
          }} /> */}
        <Route path='/details/:id'
          component={AsyncDetailsComponent} />
      </div>
    </Provider>
  )
}

export default App
