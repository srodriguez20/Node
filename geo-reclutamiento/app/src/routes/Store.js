import React from 'react'

import FilterableProductTable from '../components/FilterableProductTable.js'

let db = [
  {category:"Sporting Goods", price: "$49.99", stocked:true, name:"Football"},
  {category:"Sporting Goods", price: "$9.99", stocked:true, name:"Baseball"},
  {category:"Sporting", price: "$39.99", stocked:false, name:"Ball"},
  {category:"Electronics", price: "$59.99", stocked:true, name:"Ipod"}
]

export default class Store extends React.Component {

  constructor(){
    super()
  }
  render(){
    return (<FilterableProductTable store={db} /> )
  }
}
