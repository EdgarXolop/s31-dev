import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Saved from './components/Saved'
import Domain from'./components/Domain'
import {available,saved} from './data/data.json'
import 'bulma/css/bulma.min.css';
import './styles/App.css'
import './styles/Navbar.css'

class App extends Component {
  
  state={
    msg: 'POPULAR EXTENSIONS',
    logo: "/assets/logo.png",
    warning: '3',
    titleList: 'Saved',
    searchText: '',
    available,
    saved
  }

  buy=(index)=>{
    saved.push(JSON.parse(JSON.stringify(available[index])));
    available.splice(index,1);
    this.setState(
      {
        available,
        saved
      }
    )
  }

  buyback=(index)=>{
    console.log(index)
    available.push(JSON.parse(JSON.stringify(saved[index])));
    saved.splice(index,1);

    this.setState(
      {
        available,
        saved
      }
    )
  }

  render() {
    return (
      <div className="container is-paddingless">
        <Navbar logo={this.state.logo} warning={this.state.warning} >
          <input className="input is-medium" type="text" placeholder="Search" value={this.state.searchText} onChange={(event)=>{this.setState({searchText: event.target.value})}} />
        </Navbar >
        <div className="columns is-multiline">
          <div className="column is-8">
            <br/>
            <h5 className="title is-5">{this.state.msg}</h5>
          </div>
          <div className="column is-8">
            {
              this.state.available.map((d,$index)=>{
                if(d.name.trim().indexOf(this.state.searchText.trim()) !== -1){
                  return <Domain domain={d} key={d.name} buy={this.buy} index={$index}/>
                }else{
                  return null
                }
              })
            }
          </div>
          <div className="column is-4 columns saved-main">
            <div className="column is-12 saved">
                <div className="column is-5">
                    <h2 className="subtitle subtitle-saved">{this.state.titleList}</h2>
                    <div className="line"></div>
                </div>
                <div className="column is-12 ">
                    <aside className="menu">
                        <ul className="menu-list">
                          {
                            this.state.saved.map((domain,$index)=>{
                              return <Saved buyback={this.buyback} index={$index} domain={domain} key={domain.name}/>
                            })
                          }
                        </ul>
                    </aside>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
