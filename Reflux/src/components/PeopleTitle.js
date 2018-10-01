import React from 'react'

export default class PeopleTitle extends React.Component {
  constructor(){
    super()
  }
  render(){
    return (
      <div>
        <h1>{this.props.name.first}</h1>
      </div>
    )
  }
}
