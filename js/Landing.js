import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setSearchTerm } from './actionsCreators'
const { string, func, object } = React.PropTypes

const Landing = React.createClass({
  contextTypes: {
    router: object
  },
  propTypes: {
    searchTerm: string,
    dispatch: func
  },
  handleSearchTermChange (event) {
    this.props.dispatch(setSearchTerm(event.target.value))
  },
  handleSearchSubmit (event) {
    event.preventDefault()
    this.context.router.history.push('/search')
  },
  render () {
    return (
      <div className='landing'>
        <h1>Svideo</h1>
        <form onSubmit={this.handleSearchSubmit}>
          <input type='text' onChange={this.handleSearchTermChange} placeholder='Search' value={this.props.searchTerm} />
        </form>
        <Link to='/search'>or Browse All</Link>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Landing)
