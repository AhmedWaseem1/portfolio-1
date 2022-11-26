import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {MdOutlineConnectWithoutContact}  from 'react-icons/md'
import './Nav.css'

import { useState } from 'react'

const Nav = () => {
  const[activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active': ''} href='#'><AiOutlineHome/></a>
      <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><AiOutlineUser/></a>
      <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><BiBook/></a>
      <a href='#portfolio' onClick={()=>setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active': ''}><RiServiceLine/></a>
      <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><MdOutlineConnectWithoutContact/></a>
    </nav>
  )
}

export default Nav