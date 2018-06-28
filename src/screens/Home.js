import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppAside,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
} from '@coreui/react';

// routes config
import {
  Header,
  Footer,
  RightSlideMenu,
  LeftSlideMenu
} from '../components';

import routes from '../common/routes';

class Home extends Component {
  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <Header />
        </AppHeader>
        <div className="app-body">
          <LeftSlideMenu menuProps={this.props} />
          <main className="main">
            <AppBreadcrumb appRoutes={routes}/>
            <Container fluid>
              <Switch>
                {routes.map((route, idx) => {
                    return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                        <route.component {...props} />
                      )} />)
                      : (null);
                  },
                )}
                <Redirect from="/" to="/dashboard" />
              </Switch>
            </Container>
          </main>
          <AppAside fixed hidden>
            <RightSlideMenu />
          </AppAside>
        </div>
        <AppFooter>
          <Footer />
        </AppFooter>
      </div>
    );
  }
}

export default Home;
