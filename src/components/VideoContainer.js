import React, { useEffect,useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
const VideoContainer = () => {
  const [videos,setVideos]=useState(null);
  useEffect(()=>{getvideos()},[]);

  

  const getvideos=async () => {
    const data=await fetch(YOUTUBE_VIDEO_API);
    const json=await data.json();
    // console.log(json);
    setVideos(json.items); 
  }
  if(!videos)
     return null;
  return (
    <div className='flex flex-wrap'>
      {videos.map((item)=><Link to={"/watch?v="+item.id} key={item.id}><VideoCard  info={item}/></Link>)}
      {/* <VideoCard info={videos[0]}/> */}
    </div>
  )
}

export default VideoContainer