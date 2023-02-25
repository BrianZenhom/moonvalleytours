/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from 'react'
import './navbar.css'
import { RiCloseCircleFill } from 'react-icons/ri'
import { CgMenuGridO } from 'react-icons/cg'



const Navbar = () => {

  // Toggle ShowNav
  const [active, setActive] = useState('navBar')
  const showNav = () => {
    setActive('navBar activeNavbar')
  }

  const menuRef = useRef()
  useEffect(()=>{
    document.addEventListener("mousedown", (event)=>{
      if(!menuRef.current.contains(event.target)){
        removeNav(true);
      }
    })
  })

  // Toggle CloseNav
  const removeNav = () => {
    setActive('navBar')
  }

  return (
    <section className="navBarSection">
      <div className="header">

        <div className="logoDiv">
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2135.67 991.54">
            <path class="cls-1" d="m633.41,553.27c8.99-15.18,17.97-29.68,26.96-43.51-18.31-13.87-34.95-29.87-49.57-47.62-17.46,27.47-35.46,59.52-54.01,96.25-39.03,77.27-83.1,175.68-132.2,295.22-4.83-3.41-8.22-9.81-10.19-19.21-1.97-9.39-2.86-20.38-2.63-32.98.21-12.59,1.2-26.36,2.96-41.31,1.75-14.94,3.83-29.78,6.25-44.51,2.41-14.73,4.82-28.5,7.23-41.3,2.41-12.81,4.28-23.7,5.59-32.66,2.63-15.37,5.26-31.7,7.89-48.99,2.63-17.29,4.49-34.47,5.59-51.55.16-2.55-.29,1.77-.18-.74h-60.94c-.83,7.69-1.33,8.78-2.67,17.07-3.29,20.29-6.69,39.6-10.19,57.96-1.76,9.83-3.84,21.88-6.25,36.18-2.42,14.31-4.93,29.46-7.56,45.47-2.63,16.01-5.05,32.24-7.24,48.67-2.2,16.44-3.84,32.02-4.93,46.75-1.1,14.73-1.54,27.97-1.32,39.71.21,11.75,1.64,20.6,4.28,26.57,3.5,8.97,9.09,17.4,16.77,25.3,7.67,7.9,16.33,14.73,25.98,20.49,9.64,5.76,19.95,10.03,30.91,12.81,10.95,2.77,21.48,3.52,31.57,2.24,9.21-21.78,20.28-47.28,33.22-76.53,12.93-29.24,27.07-60.2,42.42-92.86,15.34-32.66,31.67-65.96,49-99.9,17.32-33.94,35.08-66.28,53.28-97.02Z" /><path class="cls-1" d="m1075.72,639.73c15.34-34.15,31.9-65.96,49.66-95.42,12.68-21.04,26.24-41.05,40.6-60.13-15.19-15.09-28.71-31.87-40.34-50-26.53,37.65-50.43,76.38-71.63,116.22-21.93,41.21-41.66,84-59.2,128.4-.88.86-1.31,1.71-1.31,2.56s-.44,1.71-1.32,2.56c-5.7,13.24-11.62,26.48-17.76,39.71-6.14,13.24-12.5,26.69-19.07,40.34-6.15,12.81-12.5,24.66-19.08,35.54-6.57,10.88-13.15,20.6-19.73,29.14-12.73,14.09-17.33,6.62-13.81-22.41,1.31-14.94,5.26-33.51,11.84-55.71,6.58-22.19,15.56-48.88,26.97-80.05,7.01-18.35,14.9-37.03,23.68-56.04,8.77-18.99,18.42-38.74,28.94-59.23,12.22-23.3,24.82-44.82,37.78-64.67-29.77,27.71-65.27,49.21-104.46,62.54-4.82,10.26-9.57,20.66-14.22,31.27-10.97,24.97-21.7,51.34-32.23,79.09-1.79,4.64-3.45,9.16-5.14,13.7-18.17,28.97-33.99,51.94-47.47,68.91-17.98,22.64-31.35,34.16-40.12,34.58-3.07,0-4.72-3.41-4.93-10.25-.23-6.82,1.75-16.86,5.92-30.1,4.16-13.23,10.74-29.46,19.73-48.67,8.98-19.21,20.93-41.19,35.84-65.96,3.06-4.7,2.74-9.71-.99-15.05-3.73-5.33-8.66-9.93-14.8-13.77-6.14-3.84-12.61-6.18-19.4-7.04-6.8-.85-11.74.64-14.8,4.48-5.26,5.55-10.2,11.21-14.8,16.97-4.6,5.77-9.32,11.21-14.14,16.33-7.46-4.26-14.47-8.65-21.04-13.13-6.58-4.48-13.16-7.89-19.73-10.25-6.58-2.34-13.38-3.09-20.39-2.24-7.02.86-14.7,4.48-23.02,10.89-11.41,9.39-22.92,21.56-34.53,36.5-11.62,14.95-22.14,31.06-31.57,48.35-9.42,17.29-17.43,35.12-24.01,53.48-6.58,18.36-10.52,35.65-11.84,51.87-.87,6.4,1.65,12.49,7.56,18.25,5.92,5.76,12.83,10.47,20.72,14.09,7.89,3.63,15.9,5.87,24.01,6.72,8.11.86,14.14-.64,18.09-4.48,8.32-7.68,16.33-16.01,24.01-24.97,7.67-8.96,15.01-17.93,22.03-26.89,7.01-8.97,13.48-17.39,19.4-25.3,5.92-7.89,11.51-14.83,16.77-20.82-3.07,9.83-5.92,20.71-8.55,32.66-2.63,11.96-3.51,21.36-2.63,28.18.43,5.12,2.73,10.35,6.91,15.69,4.16,5.34,9.21,9.83,15.13,13.45,5.92,3.63,12.49,5.98,19.73,7.04,7.24,1.07,14.14.11,20.72-2.88,12.27-5.54,24.77-15.05,37.49-28.5,8.47-8.96,16.78-18.7,24.96-29.08-2.47,11.52-4.44,22.6-5.89,33.24-5.69,41.85,2.42,67.24,24.34,76.21,14.91,4.7,29.81,4.06,44.73-1.92,7.01-4.7,14.69-13.87,23.02-27.54,4.38-7.26,8.76-14.73,13.16-22.41,4.38-7.69,8.76-15.58,13.15-23.69,2.63-4.26,5.15-8.43,7.57-12.49,2.4-4.05,4.71-8,6.91-11.84-11.84,32.45-16.89,58.5-15.13,78.13,1.32,19.21,6.58,33.3,15.79,42.26,8.76,8.97,19.29,14.51,31.57,16.65,10.95,2.56,21.48,2.56,31.57,0,9.21-1.71,14.9-4.48,17.1-8.32-28.51-6.83-39.46-37.36-32.88-91.58,6.58-53.79,24.77-114.84,54.59-183.15Zm-340.7,31.38c-5.26,7.68-12.07,16.87-20.39,27.53-8.33,10.68-16.88,21.36-25.65,32.02-8.78,10.68-17.21,20.39-25.32,29.14-8.12,8.76-14.58,15.05-19.4,18.89,0-5.12,1.97-12.91,5.92-23.37,3.95-10.46,9.1-21.87,15.46-34.26,6.35-12.38,13.81-24.97,22.36-37.78,8.55-12.81,17.86-23.9,27.95-33.3,4.82-5.13,8.77-7.26,11.84-6.4,3.06.86,5.36,3.1,6.91,6.72,1.53,3.63,2.3,7.59,2.3,11.85s-.66,7.27-1.97,8.97Z" /><path class="cls-1" d="m2007.25,620.62c-16.83-11.1-45.08-21.47-54.71-20.61l-89.7,15.8c-47.25-22.58-145.75-68.99-164.5-72.51-21.84-4.1,74.55,61.08,106.88,82.66l-104.31,18.36c-5.11-10.93-13.42-27.83-18.32-33.17-5-5.44-2.38,23.46-.58,39.65-2.79,2.44-4.66,5.65-5.19,9.8-.18,1.42-.21,2.97-.06,4.62.46.12.87.29,1.29.45-29.69,2.85-75.35,7.39-94.47,11.52-27.18,5.87-32.82,8.94-60.91,19.47-12.18,4.57-23.61,9.67-39.83,21.2,2.19-7.69,5.03-17.18,8.55-28.5,3.5-11.3,7.23-23.26,11.18-35.86,3.94-12.59,7.56-24.86,10.85-36.82,3.29-11.95,5.59-22.41,6.91-31.38.87-3.84-.99-7.89-5.59-12.17-4.6-4.26-10.2-7.78-16.77-10.57-6.58-2.77-12.94-4.26-19.08-4.48-6.14-.21-10.52,1.6-13.16,5.44-2.63,4.7-7.35,12.28-14.14,22.73-6.8,10.47-14.58,22.32-23.35,35.54-8.78,13.24-18.2,27.01-28.28,41.31-10.09,14.31-19.73,27.44-28.94,39.39-9.21,11.96-17.54,21.99-24.99,30.1-7.46,8.12-13.16,12.6-17.1,13.45-3.95.86-4.5-3.41-1.65-12.8,2.85-9.39,7.34-20.49,13.48-33.3,6.14-12.81,13.04-25.61,20.72-38.42,7.67-12.81,14.14-22.2,19.4-28.18,3.95-4.26,4.16-8.75.66-13.45-3.51-4.69-8.45-8.65-14.8-11.85-6.36-3.2-12.94-5.22-19.73-6.08-6.8-.85-11.74.43-14.8,3.84-8.78,10.25-17.1,21.99-24.99,35.22-4.67,7.83-8.99,15.87-13.05,24.07-7.88,14.7-17.78,29.74-29.7,45.1-13.6,17.51-27.41,33.2-41.44,47.07-14.04,13.88-27.52,25.08-40.45,33.62-12.94,8.54-22.92,12.17-29.93,10.89-4.83-.85-7.46-4.59-7.89-11.21-.44-6.61,0-14.19,1.32-22.73,1.31-8.54,3.29-16.97,5.92-25.3,2.63-8.32,5.04-14.62,7.24-18.89,7.89,3.42,15.13,5.55,21.7,6.4,6.58.86,14.25.22,23.02-1.92,12.27-3.84,23.35-11.41,33.22-22.73,9.86-11.31,18.19-23.47,24.99-36.5,6.79-13.02,12.06-25.51,15.79-37.46,3.72-11.95,5.59-20.27,5.59-24.97.87-9.81-3.94-17.93-14.47-24.34-7.46-4.26-14.14-8.22-20.06-11.85-5.92-3.62-11.74-6.4-17.43-8.32-5.7-1.92-11.18-2.77-16.44-2.56-5.26.22-10.96,1.82-17.1,4.8-10.09,5.55-20.83,14.31-32.23,26.26-11.4,11.96-22.26,25.84-32.56,41.63-10.31,15.8-19.63,32.66-27.95,50.59-8.32,17.93-14.57,35.22-18.74,51.87-4.16,16.65-5.81,32.13-4.94,46.43.88,14.31,5.49,25.73,13.81,34.26,3.95,3.84,8.99,7.9,15.13,12.17,6.14,4.27,12.93,8.01,20.39,11.21,7.45,3.2,14.9,5.23,22.36,6.08,7.45.86,14.47-.42,21.05-3.84,14.03-7.68,28.28-17.5,42.75-29.46,14.47-11.95,28.28-25.18,41.44-39.7.53-.58,1.02-1.19,1.54-1.78.84,3.08,2.51,6.13,5.03,9.14,4.83,5.77,10.85,10.57,18.09,14.41,7.23,3.84,14.8,6.4,22.69,7.69,7.89,1.28,14.25.43,19.07-2.56,7.89-5.13,16.33-11.74,25.33-19.86,8.98-8.1,17.86-17.07,26.64-26.89,8.77-9.81,17.43-20.17,25.98-31.06,8.55-10.88,16.11-21.66,22.69-32.34-1.32,4.7-3.29,10.36-5.92,16.97-2.63,6.62-5.26,13.45-7.89,20.49-2.63,7.04-5.38,13.88-8.22,20.49-2.86,6.62-5.38,12.07-7.56,16.33-2.2,4.27-10.2,11.96-24.01,23.05-13.81,11.11-29.6,23.91-47.36,38.42-17.76,14.52-35.4,30.21-52.95,47.07-17.53,16.87-31.34,33.19-41.44,48.99-7.89,12.38-10.2,23.37-6.91,32.98,3.29,9.61,8.99,17.5,17.1,23.69,8.12,6.19,17.21,10.46,27.3,12.81,10.09,2.34,17.99,2.45,23.68.32,14.9-5.55,30.03-16.01,45.38-31.38,15.34-15.37,30.03-32.77,44.07-52.19,14.03-19.42,26.97-39.8,38.81-61.16,11.84-21.34,22.14-40.77,30.91-58.28,3.06-5.97,7.66-11.3,13.81-16.01,13.59-11.1,27.73-21.66,42.42-31.7,0,0,95.98-59.66,171.37-73.59,7.92,3.34,8.01,14.4,21.13,13.23l145.76-15.96c-2.53,36.78-7.22,116.27,1.52,90.82,5.83-16.97,27.23-73.32,35.43-94.87l74.87-8.2c13.48-1.19,61.63-1.83,63.28-14.71.05-.37.05-.77.02-1.17-.38-4.3-5.57-9.35-13-14.25Zm-775.36-8.95c-19.35,94.53-59.84,85.17-59.84,85.17,28.96-61.76,59.84-85.17,59.84-85.17Zm30.24,339.41s-6.61-12.12,86.15-98.62c0,0-33.66,58.3-86.15,98.62Z" /><polygon class="cls-1" points="405.06 512.69 505.76 512.69 505.76 10.41 404.31 10.41 252.26 224.68 104.44 10.41 0 10.41 0 512.69 97.72 512.69 97.72 151.87 248.41 365.09 405.06 150.52 405.06 512.69" /><polygon class="cls-1" points="2041.68 10.41 2041.68 345.24 1799.24 10.41 1708.23 10.41 1708.23 512.69 1802.97 512.69 1802.97 173.52 2053.61 512.69 2135.67 512.69 2135.67 10.41 2041.68 10.41" /><path class="cls-1" d="m1379.4,523.52c7.97,0,15.85-.36,23.64-1.08,3.53-.29,7.05-.68,10.54-1.15,1.91-6.75,3.51-16.19,4.12-26.25.77-12.99-.13-27-4.23-37.51-.41-1.08-.86-2.18-1.37-3.31-7.43-15.94-23.97-31.02-56.66-40.49-3.8-1.1-7.65-2.01-11.51-2.86-8.85-1.95-31.51-7.34-53.7-15.77-27.9-10.6-46.65-15.17-81.93-35.93-2.67-1.57-5.44-3.11-8.28-4.63-35.1-18.88-56.94-55.52-56.41-95.37.01-1.07.04-2.13.06-3.2,3.42-128.96,111.55-231.95,240.53-229.38,128.03,2.55,231.02,107.13,231.02,235.77,0,26.84-4.48,52.64-12.74,76.69l-123.56-162.8-45.64,62.3-7.23-10.22-31.23,45.05-31.61-42.85-95.39,137.45c13.13,14.63,54.22,26.82,133.29,33.64,34.97,3.04,60.16,14.05,78.35,27.58,10.92,8.08,20.2,20.15,27.45,31.57,5.29,8.31,9.52,16.28,12.52,22.09,3.34-2.12,6.59-4.31,9.81-6.56.34-.13.69-.34,1.04-.71,65.97-46.78,109.3-123.4,110.28-210.19,1.63-143.26-114.15-262.16-257.4-264.17-145.95-2.05-264.93,115.67-264.93,261.14s116.94,261.17,261.17,261.17Z" /><path class="cls-1" d="m832.45,527.12c145.56.88,264.28-116.4,265.16-261.96C1098.48,119.6,981.2.91,835.65,0c-145.56-.88-264.26,116.4-265.13,261.96-.88,145.56,116.4,264.26,261.94,265.16Zm-151.05-368.36c-.53,0-1.05-.03-1.57-.09-.16-.02-.31-.05-.46-.07-.36-.05-.72-.11-1.07-.19-.18-.04-.35-.09-.53-.14-.32-.09-.64-.18-.96-.29-.18-.06-.35-.12-.53-.19-.31-.12-.62-.25-.92-.4-.16-.08-.32-.15-.48-.23-.32-.16-.64-.35-.95-.53-.13-.08-.26-.15-.39-.23-.86-.56-1.68-1.2-2.44-1.92-.13-.12-.25-.25-.37-.38-.24-.25-.48-.5-.71-.76-.15-.17-.29-.34-.43-.51-.19-.24-.38-.48-.56-.72-.15-.2-.29-.4-.43-.61-.16-.23-.31-.47-.46-.71-.14-.23-.28-.46-.42-.7-.12-.22-.24-.45-.35-.68-.14-.27-.28-.54-.41-.82-.06-.13-.11-.27-.17-.4-.54-1.28-.97-2.63-1.26-4.04,0-.03-.01-.06-.02-.1-.12-.56-.2-1.14-.27-1.72-.02-.18-.05-.35-.07-.53-.05-.47-.06-.95-.07-1.43,0-.22-.03-.44-.03-.66,0-.36.03-.7.05-1.05.01-.32.02-.64.05-.96.03-.37.09-.73.14-1.09.04-.3.08-.61.13-.91.07-.36.15-.71.23-1.07.07-.29.14-.58.21-.86.1-.35.21-.69.32-1.03.09-.27.19-.54.29-.81.13-.33.26-.66.4-.98.11-.26.23-.51.36-.76.15-.31.31-.63.48-.93.14-.25.29-.48.43-.72.18-.28.35-.57.54-.84.18-.25.37-.49.55-.73.18-.24.36-.48.55-.7.38-.45.78-.88,1.2-1.28.38-.37.78-.71,1.19-1.04.12-.09.24-.17.35-.26.3-.22.6-.44.91-.64.16-.11.33-.2.49-.3.28-.17.56-.33.84-.47.18-.09.37-.18.55-.27.28-.13.57-.25.86-.37.19-.07.38-.15.57-.21.3-.1.61-.19.92-.28.19-.05.37-.1.56-.15.35-.08.7-.14,1.05-.19.16-.02.32-.06.48-.07.52-.06,1.04-.09,1.57-.09,3.11,0,6.05,1.04,8.53,2.84,0,0,0,0,0,0,0,0,0,0,0,0,4.66,3.33,7.77,9.37,7.77,16.23,0,10.51-7.27,19.03-16.23,19.07h-.07Zm-10.79,103.93c.42-.33.84-.66,1.28-.96.25-.18.51-.34.77-.51.43-.28.87-.55,1.32-.81.29-.16.59-.31.88-.46.44-.23.89-.45,1.34-.65.33-.14.67-.27,1.01-.4.44-.17.88-.35,1.34-.49.39-.12.79-.22,1.18-.33.42-.11.84-.24,1.27-.33.49-.1.99-.17,1.49-.24.36-.05.71-.13,1.07-.16.85-.09,1.71-.14,2.59-.14.02,0,.04,0,.05,0,.56,0,1.12.02,1.66.07,0,0,0,0,0,0,0,0,0,0,0,0,13.1.86,23.46,11.84,23.46,25.28,0,6.44-2.39,12.29-6.28,16.77,0,0,0,0,0,0,0,0,0,0,0,0-4.61,5.27-11.35,8.58-18.84,8.58-13.87,0-25.1-11.35-25.1-25.35,0-.87.04-1.73.13-2.57,0-.07.02-.14.03-.21.08-.75.19-1.49.34-2.22.04-.2.1-.4.14-.6.13-.59.27-1.18.45-1.76.07-.24.16-.47.24-.7.18-.53.36-1.06.57-1.58.09-.23.2-.45.3-.68.23-.51.46-1.02.72-1.52.1-.2.22-.39.32-.59.29-.52.59-1.03.91-1.52.1-.15.2-.31.31-.46.36-.53.74-1.05,1.14-1.55.08-.1.16-.2.25-.3.4-.48.82-.94,1.25-1.39.17-.18.34-.35.52-.52.4-.39.81-.77,1.24-1.14.22-.18.44-.36.66-.54Zm54.39,139.68c.25-1.73,2.66-1.89,3.17-.23,2.59,8.17,7.57,15.47,14.88,20.67,10.06,7.16,22.45,8.89,34.09,5.88,1.71-.43,2.86,1.76,1.49,2.86-12,9.57-28.48,10.96-40.64,2.32-10.06-7.14-14.59-19.34-12.99-31.5Zm-52.03-25.37c1.44.09,1.8,2.09.45,2.59-11.75,4.46-24.97,1.42-32.29-8.38-6.06-8.11-6.53-18.73-2.21-27.83.61-1.28,2.52-.81,2.52.61-.05,7.05,2.03,13.98,6.42,19.86,6.06,8.13,15.29,12.59,25.1,13.15Zm-45.53-197.14c1.26-.68,2.52.88,1.64,2-4.23,5.61-6.73,12.41-6.73,19.77,0,10.11,4.73,19.21,12.25,25.55,1.1.92.2,2.72-1.19,2.34-12.09-3.47-20.85-13.82-20.85-26.05,0-10.11,5.99-18.91,14.88-23.62Zm291.93,249.08c0,.34-.03.68-.05,1.02-.01.25-.01.51-.04.76-.03.33-.08.65-.13.97-.04.28-.07.56-.13.84-.06.3-.13.6-.2.9-.07.29-.14.57-.22.86-.08.28-.17.56-.27.83-.1.29-.2.57-.31.85-.1.26-.21.52-.33.78-.12.28-.26.55-.39.82-.13.25-.26.51-.4.76-.14.24-.28.48-.43.72-.17.27-.33.53-.51.79-.11.16-.24.32-.35.48-.23.31-.46.63-.71.92-.42.5-.87.98-1.34,1.44-.06.06-.12.11-.18.16-.41.39-.83.76-1.28,1.11-.11.09-.23.17-.34.26-.4.3-.81.59-1.24.86-.15.1-.3.19-.46.28-.4.24-.81.46-1.23.67-.18.09-.36.18-.54.26-.41.19-.83.36-1.25.52-.2.08-.4.16-.61.23-.42.14-.86.26-1.29.37-.21.05-.42.12-.64.17-.47.1-.94.18-1.42.24-.19.03-.38.07-.57.09-.67.07-1.36.12-2.05.12-.03,0-.06,0-.1,0-.65,0-1.29-.04-1.92-.11-.25-.03-.49-.08-.74-.11-.41-.06-.82-.12-1.22-.21-.28-.06-.56-.14-.84-.22-.35-.09-.7-.19-1.05-.3-.29-.09-.57-.21-.85-.31-.32-.12-.64-.25-.96-.39-.28-.13-.55-.26-.82-.4-.3-.15-.6-.31-.89-.48-.26-.15-.52-.31-.78-.48-.29-.18-.57-.38-.84-.58-.24-.17-.48-.35-.71-.53-.28-.22-.55-.46-.81-.7-.21-.18-.41-.37-.61-.56-.28-.28-.55-.57-.81-.86-.17-.19-.34-.37-.5-.56-.14-.16-.27-.34-.4-.51-.24-.31-.48-.62-.7-.95-.09-.14-.18-.28-.27-.42-.24-.37-.47-.75-.68-1.13-.07-.13-.14-.25-.2-.38-.22-.41-.42-.83-.6-1.26-.05-.12-.1-.24-.15-.36-.18-.45-.35-.9-.49-1.36-.04-.12-.08-.23-.11-.35-.15-.49-.27-.98-.38-1.48-.02-.1-.05-.2-.07-.3-.11-.57-.2-1.15-.26-1.74,0-.03,0-.06-.01-.09-.06-.64-.1-1.28-.1-1.94,0-4.05,1.24-7.79,3.38-10.87,3.42-4.95,9.1-8.2,15.51-8.2s12.43,3.42,15.81,8.62c0,0,0,0,0,0,1.94,2.99,3.08,6.57,3.08,10.45Zm-45.64,34.67c2.59,8.17,7.56,15.47,14.88,20.67,10.06,7.16,22.45,8.89,34.09,5.88,1.71-.43,2.86,1.76,1.49,2.86-12,9.57-28.48,10.96-40.64,2.32-10.06-7.14-14.59-19.34-12.99-31.5.25-1.73,2.66-1.89,3.17-.23Zm198.29-198.6c-.23,36.11-8.47,70.27-23.03,100.84-33.93,28.64-76.43,47.41-123.11,51.94-4.26-9.88-14.03-16.8-25.4-16.8s-20.65,6.57-25.08,16.05c0,0,0,0,0,0,0,0,0,0,0,0-42.8-5.4-81.86-22.81-113.68-48.77-20.06-16.34-37.24-36.09-50.68-58.33,0,0,0,0,0,0,7.36-6.8,11.96-16.57,11.96-27.4,0-20.53-16.48-37.15-36.81-37.15-.5,0-.99,0-1.46.05,0,0,0,0,0,0,0,0,0,0,0,0-3.9-16.62-5.97-33.93-5.97-51.74,0-8.83.52-17.54,1.51-26.12,0,0,0,0,0,0,0,0,0,0,0,0,.38.05.74.05,1.13.05,13.19,0,23.87-12.52,23.87-27.94,0-10.6-5.02-19.81-12.43-24.52,0,0,0,0,0,0,9.1-24.43,22.31-46.87,38.84-66.44,31.41-15.04,66.64-23.35,103.82-23.12,131.44.79,237.33,107.98,236.54,239.4Z" /><path class="cls-1" d="m761.54,124.52c8.38,0,15.16-6.85,15.16-15.31s-6.79-15.31-15.16-15.31-15.16,6.85-15.16,15.31,6.79,15.31,15.16,15.31Z" /><path class="cls-1" d="m785.86,60.97c4.65,0,8.41-3.8,8.41-8.49s-3.77-8.49-8.41-8.49-8.41,3.8-8.41,8.49,3.77,8.49,8.41,8.49Z" /><ellipse class="cls-1" cx="1044.66" cy="292.13" rx="16.75" ry="16.91" /><ellipse class="cls-1" cx="935.24" cy="155.69" rx="27.22" ry="27.48" /><ellipse class="cls-1" cx="861.61" cy="237.41" rx="15.06" ry="15.2" /><path class="cls-1" d="m1010.21,358.69c4.55,0,8.23-3.72,8.23-8.31s-3.69-8.31-8.23-8.31-8.23,3.72-8.23,8.31,3.69,8.31,8.23,8.31Z" /><ellipse class="cls-1" cx="790.35" cy="343.29" rx="11.68" ry="11.79" />
          </svg>
        </div>

        <div className={active}>
          <ul className="navLists flex">

            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Destinations</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Services</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Contact</a>
            </li>


            <li className="navItem">
              <a href="#" className="navLink">About</a>
            </li>

            <div ref={menuRef} className="headerBtns flex">
              <button className="btn loginBtn">
                <a href="#">Login</a>
              </button>
              <button className="btn signupBtn">
                <a href="#">Signup</a>
              </button>
            </div>

          </ul>

          <div onClick={removeNav} className="closeNavbar">
            <RiCloseCircleFill className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <CgMenuGridO className='icon' />
        </div>
      </div>
    </section>
  )
}

export default Navbar
