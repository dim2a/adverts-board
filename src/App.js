import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router'
import Layout from './hoc/Layout/Layout'
import Adverts from './containers/Adverts/Adverts' 
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Content from './hoc/Content/Content'
import Advert from './containers/Advert/Advert'

class App extends Component {
  render() {
    return (
      <Layout>
        <Header/>
        <Sidebar/>
        <Content>
          <Switch>
            <Route path="/adverts/:id" component={Advert}/>
            <Route path="/" exact component={Adverts} />          
            <Redirect to="/" />
          </Switch>
        </Content>
      </Layout>
    );
  }
}

export default App;
