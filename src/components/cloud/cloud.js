import React from 'react'
import styled, {keyframes} from 'styled-components'
import Icon from './Icon'


function randNum() {
    const min = 40;
    const max = 76;
    return (Math.floor(Math.random() * (max - min + 1)) + min)+'s';
}
function randSize(){
    const min = 100;
    const max = 400;
    return (Math.floor(Math.random() * (max - min + 1)) + min)+'px';
}
function randTop(){
    const min = 0;
    const max = 300;
    return (Math.floor(Math.random() * (max - min + 1)) + min)+'px';
}
function randDelay(){
    const min = 1;
    const max = 3;
    return (Math.floor(Math.random() * (max - min + 1)) + min)+'s';
}
function randLeft(){
    const min = -250;
    const max = 250;
    return (Math.floor(Math.random() * (max - min + 1)) + min)+'px';
}
function randOpacity(){
    const min = 0.2;
    const max = 1;
    return Math.random() * (max - min) + min;
}


const moveAnimation = keyframes`
  0% { opacity: 0;
    transform: translateX(0); }
  5%{ opacity: ${randOpacity};}
  50%{
    opacity: 0.9;
  }
  100% {
    opacity: 0;
    transform: translateX(100vw); }
`

const Cloud1 = styled(Icon)` 
  position: absolute;
  top:${randTop};
  left: ${randLeft};
  width: ${randSize}; 
  height: ${randSize};
  fill: #eee;
  animation-name: ${moveAnimation};
  animation-duration: ${randNum};
  animation-play-state: running;
  animation-iteration-count: infinite;
  transition: opacity 2s ease-in;
  animation-timing-function: linear;
`

const Cloud2 = styled(Icon)`
  position: absolute;
  top:${randTop};
  left: ${randLeft};
  width: ${randSize}; 
  height: ${randSize};
  fill: #eee;
  animation-name: ${moveAnimation};
  animation-duration: ${randNum};
  animation-iteration-count: infinite;
  transition: opacity 2s ease-in;
  animation-timing-function: linear;
  // animation-delay: ${randDelay};
`
const Cloud3 = styled(Icon)`
  position: absolute;
  top:${randTop};
    left: ${randLeft};
  width: ${randSize}; 
  height: ${randSize};
  fill: #eee;
  animation-name: ${moveAnimation};
  animation-duration: ${randNum};
  animation-iteration-count: infinite;
  transition: opacity 2s ease-in;
  animation-timing-function: linear;
  // animation-delay: ${randDelay};
`

const Cloud4 = styled(Icon)`
  position: absolute;
  top:${randTop};
    left: ${randLeft};
  width: ${randSize};
  height: ${randSize};
  fill: #eee;
  animation-name: ${moveAnimation};
  animation-duration: ${randNum};
  animation-iteration-count: infinite;
  transition: opacity 2s ease-in;
  animation-timing-function: linear;
  // animation-delay: ${randDelay};
`

const Cloud5 = styled(Icon)`
  position: absolute;
  top:${randTop};
    left: ${randLeft};
  width: ${randSize}; 
  height: ${randSize};
  fill: #eee;
  animation-name: ${moveAnimation};
  animation-duration: ${randNum};
  animation-iteration-count: infinite;
  transition: opacity 2s ease-in;
  animation-timing-function: linear;
  //animation-delay: ${randDelay};
`
const Cloud6 = styled(Icon)`
  position: absolute;
  top:${randTop};
    left: ${randLeft};
  width: ${randSize}; 
  height: ${randSize};
  fill: #eee;
  animation-name: ${moveAnimation};
  animation-duration: ${randNum};
  animation-iteration-count: infinite;
  transition: opacity 2s ease-in;
  animation-timing-function: linear;
  //animation-delay: ${randDelay};
`
const Cloud7 = styled(Icon)`
  position: absolute;
  top:${randTop};
    left: ${randLeft};
  width: ${randSize};
  height: ${randSize};
  fill: #eee;
  animation-name: ${moveAnimation};
  animation-duration: ${randNum};
  animation-iteration-count: infinite;
  transition: opacity 2s ease-in;
  animation-timing-function: linear;
  // animation-delay: ${randDelay};
`

export default ({ className }) => (
<>
    <Cloud1 viewBox="0 0 512 512">
        <path d="M348,107.5a54.5,54.5,0,0,1-94.87,36.61,77.55,77.55,0,0,1-81.57-1.43A73,73,0,0,1,71,145.07,42.48,42.48,0,1,1,49.61,71.59,73,73,0,0,1,154.85,26.84,77.51,77.51,0,0,1,287.16,53.37,53,53,0,0,1,293.5,53,54.5,54.5,0,0,1,348,107.5Z"/>
	</Cloud1>

    <Cloud2 viewBox="0 0 512 512">
        <path d="M348,107.5a54.5,54.5,0,0,1-94.87,36.61,77.55,77.55,0,0,1-81.57-1.43A73,73,0,0,1,71,145.07,42.48,42.48,0,1,1,49.61,71.59,73,73,0,0,1,154.85,26.84,77.51,77.51,0,0,1,287.16,53.37,53,53,0,0,1,293.5,53,54.5,54.5,0,0,1,348,107.5Z"/>
    </Cloud2>

    <Cloud3 viewBox="0 0 512 512">
        <path d="M210.3,118.5c-70.9,0-129.2,56.7-131.5,126.8c-1.6,0-3.2,0-4.7,0c-41,0-74,33.1-74,74   c0,41,33.1,74,74,74h390.7c26,0,47.3-21.3,47.3-47.3s-21.3-47.3-47.3-47.3c-2.4,0-4.7,0-7.1,0.8v-1.6c0-49.6-40.2-89.8-89.8-89.8   c-11,0-21.3,1.6-30.7,5.5C321.4,158.7,271,118.5,210.3,118.5L210.3,118.5z"/>
    </Cloud3>

    <Cloud4 viewBox="0 0 1280.000000 660.000000">
        <path d="M406.1 227.63c-8.23-103.65-144.71-137.8-200.49-49.05 -36.18-20.46-82.33 3.61-85.22 45.9C80.73 229.34 50 263.12 50 304.1c0 44.32 35.93 80.25 80.25 80.25h251.51c44.32 0 80.25-35.93 80.25-80.25C462 268.28 438.52 237.94 406.1 227.63z"/>
    </Cloud4>

    <Cloud5 viewBox="0 0 512 512">
        <path d="M512,312.8c0-40.8-28.3-75.4-66.5-84.8c-1.6-64.4-54.4-116.2-118.8-116.2c-37.7,0-71.7,17.8-93.2,45.5   c-12-15.7-31.4-26.2-52.9-26.2c-36.6,0-67,29.8-67,67c0,3.1,0,6.3,0.5,9.4c-5.8-1-11.5-1.6-17.3-1.6C43.5,206.5,0,250,0,303.4   s43.5,96.9,96.9,96.9h328.2C472.7,400.2,512,361,512,312.8L512,312.8z"/>
    </Cloud5>

    <Cloud6 viewBox="0 0 512 512">
        <path d="M406.1 227.63c-8.23-103.65-144.71-137.8-200.49-49.05 -36.18-20.46-82.33 3.61-85.22 45.9C80.73 229.34 50 263.12 50 304.1c0 44.32 35.93 80.25 80.25 80.25h251.51c44.32 0 80.25-35.93 80.25-80.25C462 268.28 438.52 237.94 406.1 227.63z"/>
    </Cloud6>

    <Cloud7 viewBox="0 0 512 512">
        <path d="M441.953,142.352c-4.447-68.872-61.709-123.36-131.705-123.36c-59.481,0-109.766,39.346-126.264,93.429  c-9.244-3.5-19.259-5.431-29.729-5.431c-42.84,0-78.164,32.08-83.322,73.523c-0.309-0.004-0.614-0.023-0.924-0.023  c-36.863,0-66.747,29.883-66.747,66.747s29.883,66.746,66.747,66.746c4.386,0,8.669-0.436,12.819-1.243  c20.151,27.069,52.394,44.604,88.734,44.604c31.229,0,59.429-12.952,79.533-33.772c15.071,15.091,35.901,24.428,58.913,24.428  c31.43,0,58.783-17.42,72.955-43.127c11.676,5.824,24.844,9.106,38.777,9.106c48.047,0,86.998-38.949,86.998-86.996  C508.738,185.895,480.252,151.465,441.953,142.352z"/>
    </Cloud7>

</>
)
