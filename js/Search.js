import React from 'react'
import { connect } from 'react-redux'
import ShowCard from './ShowCard'
import Header from './Header'

const { arrayOf, shape, string } = React.PropTypes

const Search = React.createClass({
  propTypes: {
    shows: arrayOf(shape({
      title: string,
      description: string
    })),
    searchTerm: string
  },
  render () {
    const { shows } = this.props

    return (
      <div className='search'>
        <Header showSearch />
        <div>
          {shows
            .filter((show) => {
              return `${show.title} ${show.description}`
                .toUpperCase()
                .indexOf(this.props.searchTerm.toUpperCase()) >= 0
            })
            .map((show) => {
              return (
                <ShowCard {...show} key={show.imdbID} />
              )
            })}
        </div>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Search)
