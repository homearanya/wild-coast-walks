import React from 'react'
import Loader from 'react-loader-spinner'

import '../assets/css/spinner.css'


export default function Spinner() {
    return (
        <div className='spinnerWrapper'>
            <div className='spinnerContainer'>
                <Loader
                    type="Circles"
                    color="#00BFFF"
                    height="100"
                    width="100"
                />
            </div>
        </div>
    )
}


// import React from 'react'
// import Loader from 'react-loader-spinner'
// import styled from 'styled-components'

// const SpinnerWrap = styled.div`
//     background-color: white;
//     display: flex;
//     align-items: center;
//     overflow: auto;
//     position: fixed;
//     top: 0;
//     left: 0;
//     bottom: 0;
//     right: 0;
//     z-index: 99999;
// `
// const SpinnerContainer = styled.div`
//     margin: auto;
//     max-height: 100%
// `

// export default function Spinner() {
//     return (
//         <SpinnerWrap>
//             <SpinnerContainer>
//                 <Loader
//                     type="Circles"
//                     color="#00BFFF"
//                     height="100"
//                     width="100"
//                 />
//             </SpinnerContainer>
//         </SpinnerWrap>
//     )
// }