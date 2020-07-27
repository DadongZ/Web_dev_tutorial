import React, { Component } from 'react'

class SideNavigation extends Component {
    constructor(props) {
        super(props)
    
        this.state = { menuOpened: false}
        this.menuIconClicked = this.menuIconClicked(this);
    }

    slideMenu() {
        return { this.state.menuOpened ? {}: { marginLeft: -230} }
    }

    menuIconClicked() {
        this.setState({menuOpened: !this.state.menuOpened})
    }

    render() {
        return (
            <div className="side-navigation" style={{ slideMenu }}>
                <div className="menu-icon">
                    <img src={ASSETS.NAV_MENU_ICON} alt="Menu Icon" onClick{() => { menuIconClicked() }} />
                </div>
                <div className="container">
                    <div className="links">
                        <MenuItem to={PAGES.HOME} name="Home" />
                        <MenuItem to={PAGES.ABOUT} name="About" />
                        <MenuItem to={PAGES.CONTACT} name="Contact" />
                    </div>
                </div>
            </div>
        );
    }
}

export default class_component;
