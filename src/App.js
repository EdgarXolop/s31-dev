import React, { Component } from 'react'
import Body from './components/dumb/Body'
import Navbar from './components/dumb/Navbar'
import InputSeach from './components/dumb/InputSearch'
import Title from './components/dumb/Title'
import Content from './components/dumb/Content'
import Cart from './components/dumb/Cart'
import Saved from './components/dumb/Saved'
import Result from'./components/dumb/Result'
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
      <Body>
        <Navbar logo={this.state.logo} warning={this.state.warning} >
          <InputSeach value={this.state.searchText} onChange={(event)=>{this.setState({searchText: event.target.value})}} />
        </Navbar >
        <Content>
          <Title text={this.state.msg}/>
          <Result>
            {
              this.state.available.map((d,$index)=>{
                if(d.name.trim().indexOf(this.state.searchText.trim()) !== -1){
                  return <Domain domain={d} key={d.name} buy={this.buy} index={$index}/>
                }else{
                  return null
                }
              })
            }
          </Result>
          <Cart titleList={this.state.titleList}>
            {
              this.state.saved.map((domain,$index)=>{
                return <Saved buyback={this.buyback} index={$index} domain={domain} key={domain.name}/>
              })
            }
          </Cart>
        </Content>
      </Body>
    );
  }
}

export default App;
