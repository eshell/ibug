import Inferno from 'inferno';
import {connect} from 'inferno-mobx';

const UArtistsPage = ({auth}) => {
  return <h1>Artists: </h1>
}

export const ArtistPage = connect(['auth'])(UArtistsPage)
