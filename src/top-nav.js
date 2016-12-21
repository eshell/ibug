import Inferno from 'inferno';
// import Component from 'inferno-component';
import {connect} from 'inferno-mobx';
import {Link} from 'inferno-router';

const links = [
    {title: 'Venues', src: 'venues'},
    {title: 'Artists', src: 'artists'},
    {title: 'Events', src: 'events'}
  ];


const UTopNav = ({ui_win, auth}) => {
  const mobileLinks = links.map(function(link) {
        return <div class="w3-row"><div class='w3-col s12 w3-center' onClick={ui_win.menuOff}><Link class="w3-btn-block" to={'/'+link.src}>{link.title}</Link></div></div>
      })
  const deskLinks = links.map(function(link) {
    return <li class='w3-navitem w3-right'><Link to={'/'+link.src}>{link.title}</Link></li>
  })
  const menuButton = <li class="w3-navitem w3-right">
      <a href="javascript:void(0);" onClick={ui_win.toggleMenu} class="">menu</a>
    </li>

  return (
    <div>
      <ul class="w3-navbar w3-border w3-round">
        <li class="w3-navitem">
          <Link to="/">Olweg.com</Link>
        </li>
        {(ui_win.width>=800) ? deskLinks: menuButton }
      </ul>
      {(ui_win.width<800 && ui_win.showMenu) ? mobileLinks : null }
    </div>
  );
}

export const TopNav = connect(['ui_win', 'auth'])(UTopNav);
