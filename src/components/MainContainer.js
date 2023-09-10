import React, { useEffect } from 'react'
import Buttonlist from './Buttonlist'
import VideoContainer from './VideoContainer'
import { useDispatch, useSelector } from 'react-redux'
import { toggle } from '../utils/appSlice'
const MainContainer = () => {
  // const toggle=useSelector(store=>store.app.isMenuOpen);
  // console.log(toggle);
  const dispatch=useDispatch();
    useEffect(() => { dispatch(toggle())},[]);
  return (
    <div className=''>
        <Buttonlist/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer