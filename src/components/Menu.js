import React from 'react'

import '../assets/css/meanmenu.css'
import '../assets/css/menu.css'

import MenuDesktop from './MenuDesktop'
import MenuMobile from './MenuMobile'

export default function Menu() {
    return (
        <div>
            <MenuDesktop />
            <MenuMobile />
        </div>
    )
}
