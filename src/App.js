import React from 'react'
import {Route} from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import Searchpage from './Searchpage'
import ListBooks from './ListBooks'
import './App.css'



class BooksApp extends React.Component {
  state = {
     books:[],
     loading:false
  }
  getAllBooks=()=>{
    this.setState({
      loading:true
    })
    BooksAPI.getAll().then((books)=>{
      this.setState({
        books,
        loading:false
      })
    })
  }
  componentDidMount(){
    this.getAllBooks()
  }
  moveTo=(book,shelf)=>{
    BooksAPI.update(book,shelf).then(book=>{
      this.getAllBooks()
    })
  }
  render() {
    console.log(this.state);
    return (
      <div className="app">
        <Route
          path='/search'
          render={()=>(
            <Searchpage/>
          )}
        />
        <Route
          exact path='/'
          render={()=>(
            <ListBooks
              books={this.state.books}
              loadState={this.state.loading}
              moveTo={this.moveTo}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
