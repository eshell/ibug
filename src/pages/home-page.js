import Inferno from 'inferno';
import {connect} from 'inferno-mobx';

const UHomePage = ({auth}) => {
  return <h1>Home {(auth.loggedIn)?'true':'false'}</h1>
}

export const HomePage = connect(['auth'])(UHomePage)
