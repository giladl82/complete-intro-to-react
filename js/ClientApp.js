import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      <div>
        <MyTitle titile='props are the best' color='peru' />
        <MyTitle titile='semicolons are the worst' color='blue' />
        <MyTitle titile='sklol its okay if you like semicolons' color='green' />
        <MyTitle titile='im out of ideas' color='red' />
      </div>
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
