import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name="All"/>
      <Button name="Music"/>
      <Button name="Live"/>
      <Button name="Trending"/>
      <Button name="News"/>
      <Button name="UPSC"/>
      <Button name="Public Speaking"/>
      <Button name="Mixes"/>
      <Button name="Recently Uploaded"/>
      <Button name="Trailers"/>
      <Button name="Comedy"/>
    </div>
  )
}

export default ButtonList