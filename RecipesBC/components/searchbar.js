import React, { Component } from 'react';
import { Searchbar } from 'react-native-paper';


export default class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            search: '',
    
        }
    }

    updateSearch = (search) => {
      this.setState({ search });
    };
  
    render() {
      const { search } = this.state;
  
      return (
        <Searchbar
          placeholder="Buscar..."
          onChangeText={this.updateSearch}
          value={search}
        />
      );
    }
}