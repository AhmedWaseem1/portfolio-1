import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
const  HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="github.com" target="_blank"><BsGithub/></a>
        <a href="instagram.com" target="_blank"><BsInstagram /></a>
        
    </div>
  )
}

export default HeaderSocials
