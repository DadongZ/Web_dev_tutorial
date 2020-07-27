import React from 'react';
import MenuItem from './menu-item';
import { PAGES } from './constants/routers.js'
import { ASSETS } from 'assets'
import "style.css";

function SideNavigation() {
    const [manuOpened, setManuOpened] = useState(false);

    const slideMenu = () => {
        return menuOpened ? {}: { marginleft: -230 }
    }

    const menuIconClicked = () => {
        setMenuOpened(!menuOpened)
    }

    return (
        <div className="side-navigation" style={{slideMenu}}>
            <div className="menu-icon">
                <img src={ASSETS.NAV_MENU_ICON} alt="Menu Icon" onClick{() => {menuIconClicked()}} />
            </div>
            <div className="container">
                <div className="links">
                    <MenuItem to={PAGES.HOME} name="Home" />
                    <MenuItem to={PAGES.ABOUT} name="About" />
                    <MenuItem to={PAGES.CONTACT} name="Contact" />
                </div>
            </div>
        </div>
    )
}

export default func_component;