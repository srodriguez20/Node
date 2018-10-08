import Reflux from 'reflux'
import io from 'socket.io-client'

import PeopleActions from '../actions/PeopleActions.js'

let PeopleStore = Reflux.createStore({
  listenables:[PeopleActions],
  fetchPeople: function(){
    this.socket= io('http://localhost:3002')
    let self = this
    this.socket.on=('persona',(body)=> {
      var people = JSON.parse(body)
      people = people.results[0]
      self.trigger(people)
    });
    this.socket.emit('ask')
  },
  askForPeople: function(){
    this.socket.emit('ask')
  }
})

export default PeopleStore
