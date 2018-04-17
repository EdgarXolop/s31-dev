import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Saved from './components/Saved'
import Domain from'./components/Domain'
import {available,saved} from './data/data.json'
import 'bulma/css/bulma.min.css';
import appcss from './styles/App.css'


class App extends Component {
  
  state={
    msg: 'POPULAR EXTENSIONS',
    logo: "/assets/logo.png",
    warning: '3'
  }

  render() {
    return (
      <div className="container is-paddingless">
        <Navbar text="searchTxt" logo={this.state.logo} warning={this.state.warning} />
        <div className="columns">
          <div className="column is-12">
            <br/>
            <h5 className="title is-5">{this.state.msg}</h5>
          </div>
        </div>
        <div className="columns">
          <div className="column is-8">
          {
            available.map((d)=>{
              return <Domain domain={d} key={d.name}/>
            })
          }
          </div>
          <div className="column is-4 columns saved-main">
            <Saved saved={saved}/>
          </div>
        </div>
      <style scoped src={appcss}></style>
      </div>
    );
  }
}

export default App;
