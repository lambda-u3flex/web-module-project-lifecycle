import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GithubCard from './components/GithubCard';

class App extends Component {
  state = {
    myData: [],
    followerData: []
    // name: '',
    // username: '',
    // avatar: '',
    // website: '',
    // followers: '',
    // following: '',
    // followerUsername: '',
    // followerAvatar: '',
    // profileUrl: ''
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
        <GithubCard myData={this.state.myData} followerData={this.state.followerData} />
      </div>
    );
  }
}

export default App;
