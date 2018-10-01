import React from 'react'

export default class PeoplePhoto extends React.Component {
  constructor(){
    super()
  }
  render(){
    return (
      <div>
        <img src ={this.props.photo} alt="people imag"/>
      </div>
    )
  }
}
