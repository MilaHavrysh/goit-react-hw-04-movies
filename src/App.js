import './App.css';
import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import routes from './routes';
import AppBar from './components/AppBar/AppBar';
const HomePage = lazy(() =>
  import('./views/HomePage/HomePage.jsx' /*webpackChunkName: "HomePage"*/),
);
const MoviesSearch = lazy(() =>
  import(
    './views/MoviesSearch/MoviesSearch.jsx' /*webpackChunkName: "MoviesSearch"*/
  ),
);
const DetailsMovies = lazy(() =>
  import(
    './views/DetailsMovies/DetailsMovies.jsx' /*webpackChunkName: "DetailsMovies"*/
  ),
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <>
          <AppBar />
          <Suspense fallback={<p>загрузка...</p>}>
            <Switch>
              <Route exact path={routes.home} component={HomePage} />
              <Route exact path={routes.movies} component={MoviesSearch} />
              <Route path={routes.detailsMovie} component={DetailsMovies} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </>
      </div>
    );
  }
}

export default App;

//Ключ API (v3 auth) ef67f56e6a03a8573aa8d4dddcc93e68
