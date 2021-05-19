import "./App.css";
import SearchMovies from "./components/searchMovies";
import React from 'react';

class App extends React.Component {
    render() {
        return ( 
        <div className = "container">
            <h1 className = "title" > React Movie Search </h1> 
            <SearchMovies/>
        </div>
        );
    }
}

export default App