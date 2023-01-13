import React from 'react'
import libraryBanner from '../assets/images/my-library-banner.jpg'
import './MyLibrary.css'
import NavBar from '../NavBar/NavBar'

const MyLibrary = ({ myLibrary }) => {
  return (
    <div>
      <img src={libraryBanner} alt='My Library Banner' className='my-library-banner'/>
      <h1 className='my-library-header'>My Library</h1>
      {myLibrary}
      <NavBar />
    </div>
  )
}

export default MyLibrary