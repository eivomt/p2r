import React, { Component } from 'react';

import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

import Logo from './assets/Logo'

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class App extends Component {

  constructor(props) {
      super(props)
      this.handleScroll = this.handleScroll.bind(this)
      this.handleRouteChange = this.handleRouteChange.bind(this)
      this.state = {project: "Home"}
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = (e) => {

      let row = window.innerHeight / 12
      let breakPoint = 10 * row
      let project = 16 * row
      let scroll = window.pageYOffset

      if (scroll < breakPoint) {
        this.setState({project: "Home"})
      } else if ( breakPoint + project > scroll && scroll > breakPoint) {
        this.setState({project: "Plus U"})
      } else if (breakPoint + project * 2 > scroll && scroll > breakPoint + project) {
        this.setState({project: "Forget Me Not"})
      } else if (breakPoint + project * 3 > scroll && scroll > breakPoint + project * 2) {
        this.setState({project: "Portfolio"})
      }
  }

  handleRouteChange = (e) => { 

    if (e.target.id === "Logo") {
      this.setState({project: "Home"})
      window.removeEventListener('scroll', this.handleScroll)
      window.addEventListener('scroll', this.handleScroll)
    } else {
      window.removeEventListener('scroll', this.handleScroll)
      this.setState({project: e.target.id})
    }
  }



  render() {
    return (
      <HashRouter>
        <div className="App" onScroll={this.handleScroll}>
          <div className="header">

            <div className="left">
              <NavLink 
                exact to="/" 
                className="home"
                onClick={this.handleRouteChange}>
                <div className="logo" id="Home">
                  <Logo fill="#222"/>
                </div>
              </NavLink>

              <h4 className="current-view">
                {this.state.project}
              </h4>

            </div>

            <div className="right">

              <NavLink 
                to="/about" 
                onClick={this.handleRouteChange}>
                <p>About</p>
              </NavLink>

              <NavLink 
                to="/blog" 
                onClick={this.handleRouteChange}>
                <p>Blog</p>
              </NavLink>

              <NavLink 
                to="/contact" 
                onClick={this.handleRouteChange}>
                  <p>Contact</p>
              </NavLink>
            </div>
          </div>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/blog" component={Blog}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
          </div>
        </div>
        <div className="footer">
            <p>copyright:    something</p>
            <p>e.omtveit@gmail.com</p>
        </div>
      </HashRouter>
    )
  }
}

export default App;
