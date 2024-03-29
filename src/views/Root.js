import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'template/MainTemplate';
import Home from 'views/Home/Home';
import Cards from 'views/Cards/Cards';
import Gallery from 'views/Gallery/Gallery';
import Logout from 'views/Logout/Logout';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cards" component={Cards} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
