import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {

  const [searchParams]= useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(closeMenu());
  })
  return (
    <div>
      <iframe className='rounded-lg px-2 '
      width="800" 
      height="450" 
      src={"https://www.youtube.com/embed/"+ searchParams.get("v") }
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      allowFullScreen>

      </iframe>
    </div>
  )
}

export default WatchPage