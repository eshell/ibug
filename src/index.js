import Inferno from 'inferno';
import {Provider} from 'inferno-mobx';
import {observable, action} from 'mobx';
import {Router, Route, IndexRoute} from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';
import {HomePage} from './pages/home-page';
import {EventsPage} from './pages/events-page';
import {ArtistsPage} from './pages/artists-page';
import {VenuesPage} from './pages/venues-page';

import {App} from './App';

const browserHistory = createBrowserHistory();

const ui_win = observable({
  width: window.innerWidth,
  showMenu: false,
  toggleMenu: action(function () {
    ui_win.showMenu = !ui_win.showMenu;
  }),
  menuOff: action(function () {
    ui_win.showMenu = false;
  })
})
const auth = observable({
  loggedIn: false
})

const routes = [
  {title: 'Events', src: 'events', component: EventsPage},
  {title: 'Artists', src: 'artists', component: ArtistsPage, onEnter: doHome},
  {title: 'Venues', src: 'venues', component: VenuesPage}
];

window.onresize=(evt) => {
  ui_win.width=window.innerWidth;
  if (ui_win.showMenu && window.innerWidth>800) {
    ui_win.menuOff();
  }
}
const NotFoundPage = ({params}) => {
  return <h1>{params} not found</h1>
}

function doHome(props){
  console.log('unauthorized', props)
  props.router.push('/')
  return;
}

Inferno.render(
  <Provider ui_win={ui_win} auth={auth}>
    <Router history={browserHistory}>
      <Route component={App}>
        <IndexRoute component={HomePage}/>
        {routes.map(function (route) {
          if (route.onEnter) {
            return <Route path={route.src} component={route.component} onEnter={route.onEnter}/>

          } else {
            return <Route path={route.src} component={route.component}/>

          }
        })}
        <Route path="*" component={NotFoundPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
