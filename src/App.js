import React from 'react'
import {Route} from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import Searchpage from './Searchpage'
import ListBooks from './ListBooks'
import './App.css'



class BooksApp extends React.Component {
  state = {
     books:[]
  }
  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      console.log(books);
      this.setState({
        books
      })
    })
  }
  render() {
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
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
