import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GithubCard from './components/GithubCard';

class App extends Component {
  state = {
    name: '',
    username: '',
    avatar: '',
    website: '',
    followers: '',
    following: '',
    followerUsername: '',
    followerAvatar: '',
    profileUrl: ''
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/fromtimwithcode`)
      .then(res => {
        this.setState({
          ...this.state,
          name: res.data.name,
          username: res.data.login,
          avatar: res.data.avatar_url,
          website: res.data.blog,
          followers: res.data.followers,
          following: res.data.following
        })
      })
      .catch(err => {
        console.error(err)
      })

    axios.get(`https://api.github.com/users/fromtimwithcode/followers`)
      .then(res => {
        this.setState({
          ...this.state,
          followerUsername: res.data.login,
          followerAvatar: res.data.avatar_url,
          profileUrl: res.data.html_url
        })
      })
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Github API</h1>
        <GithubCard />
      </div>
    );
  }
}

export default App;
