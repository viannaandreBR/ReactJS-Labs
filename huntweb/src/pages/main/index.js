import React, { Component } from 'react';
import api from '../../services/api';
export default class Main extends Component {
  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async() => { 
    const response = await api.get('/products')

//    console.log(response);
       
      console.log(response.data.docs);

  };

render(){
  return <h1>Hello BioLabs</h1>
}
}