import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GithubCard from './components/GithubCard';
import SearchBar from './components/SearchBar';

class App extends Component {
  state = {
    myData: [],
    followerData: []
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/fromtimwithcode`)
      .then(res => {
        this.setState({
          ...this.state,
          myData: res.data
        })
      })
      .catch(err => {
        console.error(err)
      })

    axios.get(`https://api.github.com/users/fromtimwithcode/followers`)
      .then(res => {
        this.setState({
          ...this.state,
          followerData: res.data
        })
      })
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <GithubCard myData={this.state.myData} followerData={this.state.followerData} />
      </div>
    );
  }
}

export default App;
