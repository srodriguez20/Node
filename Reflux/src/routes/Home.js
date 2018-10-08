import React from 'react'
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'

import PeopleFrame from '../components/PeopleFrame.js'

import PeopleActions from '../actions/PeopleActions.js'

import PeopleStore from '../stores/PeopleStore.js'

@ReactMixin.decorate(Reflux.connect(PeopleStore,'people'))
export default class Home extends React.Component{

  constructor(){
    super()
  }
  componentDidMount(){
    PeopleActions.fetchPeople()
  }
  handlePeople()
  {
    PeopleActions.askForPeople()
  }
  render(){
    if(this.people!= null){
      return (
        <div>
          <PeopleFrame people={this.state.people}/>
          <button onClick = {this.handlePeople.bind(this)}> ASK</button>
        </div>
        )
    }
    else {
      return(
        <div>
          <h1>loading</h1>
          <button onClick = {this.handlePeople.bind(this)}> ASK</button>
        </div>
      )
    }
  }
}
