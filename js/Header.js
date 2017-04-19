import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setSearchTerm } from './actionsCreators'
class Header extends React.Component {
  constructor (props) {
    super(props)
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }
  handleSearchTermChange (event) {
    this.props.dispatch(setSearchTerm(event.target.value))
  }
  render () {
    let utilsSpace
    if (this.props.showSearch) {
      utilsSpace = <input type='text' placeholder='Search' value={this.props.searchTerm} onChange={this.handleSearchTermChange} />
    } else {
      utilsSpace = (
        <h2>
          <Link to='/search'>
            Back
          </Link>
        </h2>
      )
    }
    return (
      <header>
        <h1>
          <Link to='/'>
            svideo
          </Link>
        </h1>
        {utilsSpace}
      </header>
    )
  }
}

const { func, bool, string } = React.PropTypes

Header.propTypes = {
  dispatch: func,
  showSearch: bool,
  searchTerm: string
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Header)
