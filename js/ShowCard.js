import React from 'react'

const {string, shape} = React.PropTypes

const ShowCard = React.createClass({
  /* propTypes are not checked using react on production */
  propTypes: {
    show: shape({
      poster: string,
      title: string.isRequired,
      year: string,
      description: string
    })
  },
  render () {
    const {poster, title, year, description} = this.props.show

    return (
      <div className='show-card'>
        <img src={`/public/img/posters/${poster}`} />
        <div>
          <h3>{title}</h3>
          <h4>({year}) </h4>
          <p>{description}</p>
        </div>
      </div>
    )
  }
})

export default ShowCard
