import './App.scss';
import Navbar from './components/Navbar';
import {retry} from './utils/commonFunctions';

import countapi from 'countapi-js';
import {lazy, useState, Suspense, useEffect} from 'react';
import {Route, Redirect, Switch, useLocation} from 'react-router-dom';
const Home = lazy(() => retry(() => import('./components/Home')));
const Volunteers = lazy(() => retry(() => import('./components/Volunteers')));
const About = lazy(() => retry(() => import('./components/About')));
const State = lazy(() => retry(() => import('./components/State')));
const Faq = lazy(() => retry(() => import('./components/Faq')));
const LanguageSwitcher = lazy(() =>
  retry(() => import('./components/LanguageSwitcher'))
);
const Banner = lazy(() => retry(() => import('./components/Banner')));

const App = () => {
  const [showLanguageSwitcher, setShowLanguageSwitcher] = useState(false);
  const location = useLocation();

  const pages = [
    {
      pageLink: '/',
      view: Home,
      displayName: 'Home',
      showInNavbar: true,
    },
    {
      pageLink: '/collaborators',
      view: Volunteers,
      displayName: 'Collaborators',
      showInNavbar: true,
    },
    {
      pageLink: '/about',
      view: About,
      displayName: 'About',
      showInNavbar: true,
    },
    {
      pageLink: '/faq',
      view: Faq,
      displayName: 'FAQ',
      showInNavbar: true,
    },
    {
      pageLink: '/state/:stateCode',
      view: State,
      displayName: 'State',
      showInNavbar: false,
    },
  ];
  // const [visits, getCount] = useState(0);

  useEffect(() => {
    countapi.visits('incovid19').then((result) => {
      console.log(result.value);
      // getCount(result.value);
    });
  }, []);

  // getCount(

  // );
  useEffect(() => {
    if (showLanguageSwitcher) {
      // For Chrome, Firefox, IE and Opera
      document.documentElement.scrollTo({top: 0, behavior: 'smooth'});
      // For Safari
      document.body.scrollTo({top: 0, behavior: 'smooth'});
    }
  }, [showLanguageSwitcher]);

  return (
    <div className="App">
      <Suspense fallback={<div />}>
        <LanguageSwitcher
          {...{showLanguageSwitcher, setShowLanguageSwitcher}}
        />
      </Suspense>

      <Navbar {...{pages, showLanguageSwitcher, setShowLanguageSwitcher}} />

      <Banner />

      <Suspense fallback={<div />}>
        <Switch location={location}>
          {pages.map((page, index) => {
            return (
              <Route
                exact
                path={page.pageLink}
                render={({match}) => <page.view />}
                key={index}
              />
            );
          })}
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
