import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render () {
    let utilsSpace
    if (this.props.showSearch) {
      utilsSpace = <input type='text' placeholder='Search' value={this.props.searchTerm} onChange={this.props.handleSearchTermChange} />
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
  handleSearchTermChange: func,
  showSearch: bool,
  searchTerm: string
}

export default Header
