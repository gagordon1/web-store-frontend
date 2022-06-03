import { storeName } from '../config/StoreInfo'
import styled from 'styled-components'
import { Media, withBreakpoints } from 'react-breakpoints';
import TabletMenu from '../assets/tabletMenu.svg'
import React from 'react';
import { DesktopMenu } from './DesktopMenu';

export const menuItems = {
  "about" : "/about",
  "contact" : "/contact",
  "store" : "/"
}


class Navbar extends React.Component {
  render() {
    const { breakpoints, currentBreakpoint } = this.props;

    return (
      <div>
        <h1> {storeName} </h1>
        <div> {breakpoints[currentBreakpoint]} </div>
        {
          breakpoints[currentBreakpoint] > breakpoints.tablet?
           <DesktopMenu> </DesktopMenu>
           :
           <img src={TabletMenu} alt="menu"/>
        }
      </div>
    )
  }
}

export default withBreakpoints(Navbar)
