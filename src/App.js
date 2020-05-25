import React, { Component } from 'react';
import './stylesheets/App.scss';

import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

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

    if (e.target.id === "Home") {
      this.setState({project: e.target.id})
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
          <div className="nav-container-main">
                  <div className="bg w-12-col h-1-row">
                      
                  </div>
                  <div className="nav-container">

                    <NavLink 
                      exact to="/" 
                      className="home"
                      onClick={this.handleRouteChange}>
                      <div 
                        className="
                          logo 
                          w-3-quarters-row 
                          h-3-quarters-row"
                          id="Home">
                      </div>
                    </NavLink>

                    <h4 className="current-view">
                      {this.state.project}
                    </h4>

                    <NavLink 
                      to="/blog" 
                      className="nav-1 "
                      onClick={this.handleRouteChange}>
                      <div 
                        className="
                          logo 
                          w-3-quarters-row 
                          h-3-quarters-row"
                          id="Blog">
                      </div>
                    </NavLink>

                    <NavLink 
                      to="/about" 
                      className="nav-2"
                      onClick={this.handleRouteChange}>
                      <div 
                        className="
                          logo  
                          w-3-quarters-row 
                          h-3-quarters-row"
                          id="About">
                      </div>
                    </NavLink>

                    <NavLink 
                      to="/contact" 
                      className="nav-3"
                      onClick={this.handleRouteChange}>
                      <div 
                        className="
                          logo  
                          w-3-quarters-row 
                          h-3-quarters-row"
                          id="Contact">
                      </div>
                    </NavLink>

                      <div className="logo cta-1 w-h-cta">
                      </div>

                      <div className="logo cta-2 w-h-cta">
                      </div>

                      <div className="logo cta-3 w-h-cta">
                      </div>
                      
                  </div>
              </div>
          
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/blog" component={Blog}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default App;
