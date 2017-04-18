import React from 'react'
import preload from '../public/data.json'
import ShowCard from './ShowCard'

const Search = React.createClass({
  render () {
    return (
      <div className='search'>
        {/*
        <pre><code>{JSON.stringify(preload, null, 4) }</code></pre>
      */}
        {
          preload.shows.map((show) => {
            return (
              <ShowCard show={show} key={show.imdbID} />
            )
          })
        }
      </div>
    )
  }
})

export default Search
