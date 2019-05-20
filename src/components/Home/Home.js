import React, { Component } from 'react';
// import './Home.css'
// import {Link} from 'react-router-dom';
// import SideNav, {MenuIcon} from 'react-simple-sidenav';
import { Sidenav, Toggle, Nav, Icon } from 'rsuite';

class Home extends Component {
    constructor(props) {
        super()

        this.state = {
            expanded: true,
            activeKey: '1'
          };
          this.handleToggle = this.handleToggle.bind(this);
          this.handleSelect = this.handleSelect.bind(this);
    }


    handleToggle() {
        this.setState({
          expanded: !this.state.expanded
        });
      }
    handleSelect(eventKey) {
        this.setState({
          activeKey: eventKey
        });
      }

    
    render() {
        const { expanded } = this.state;

        return (
            <div className="side-div">
            <Toggle onChange={this.handleToggle} checked={expanded} />
                <hr />
                <Sidenav
                expanded={expanded}
                defaultOpenKeys={['3', '4']}
                activeKey={this.state.activeKey}
                onSelect={this.handleSelect}
                >
                    <Sidenav.Body>
                        <Nav>
                            <Nav.Item eventKey="1" icon={<Icon icon="dashboard" />}>
                                Dashboard
                            </Nav.Item>
                            <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
                                User Group
                            </Nav.Item>
                        </Nav>
                    </Sidenav.Body>
                </Sidenav>
            
                
            </div>
        );
    }
}

export default Home;