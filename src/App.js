import Inferno from 'inferno';
import './w3.css';

import {TopNav} from './top-nav';
import {connect} from 'inferno-mobx';

const UApp = ({children, params, ui_win, auth}) => {

  return (
    <div class="w3-container">
      <div class="w3-container w3-center w3-wide w3-opacity">our local entertainment guide</div>
      <TopNav auth={auth} ui_win={ui_win}/>
      <div class="w3-row">
        <div class="w3-col s12">
          {children}
        </div>
      </div>
    </div>
  )
}

export const App = connect(['ui_win', 'auth'])(UApp);
