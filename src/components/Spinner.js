
import React from 'react'
// import Loader from 'react-loader-spinner'
import logo_color from '../assets/img/logo/logo-trails-color.png'

// import '../assets/css/spinner.css'


export default function Spinner() {
    return (
        <div style={{
            backgroundColor: 'white',
            display: 'flex',
            alignItems: 'center',
            overflow: 'auto',
            position: 'fixed',
            top: '0',
            left: '0',
            bottom: '0',
            right: '0',
            zIndex: '99999',
        }}>
            <div style={{
                margin: 'auto',
                maxHeight: "100%",
            }}
            >
                <img className="logo-color" src={logo_color} alt="Sa Adventure Trails logo"></img>
                {/* <Loader
                    type="Circles"
                    color="#00BFFF"
                    height="100"
                    width="100"
                /> */}
            </div>
        </div>
    )
}