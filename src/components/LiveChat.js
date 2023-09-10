import React, {useState,useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessages } from '../utils/chatSlice';
import { generateRandomName, makeComment } from '../utils/helper';
const LiveChat = () => {
  
  const [liveMessage,setLiveMessage]=useState("");

  const chat=useSelector(store=>store.chat.messages);

  const dispatch=useDispatch();
  
  useEffect(()=>{
    //API Polling
    const i=setInterval(()=>{
      dispatch(addMessages({
        name:generateRandomName(),
        comment:makeComment(20)+"😍",
      }));
    },1000);
    return () => clearInterval(i);
  },[]);


  return (
    <>

   
    <div className='h-[550px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>

        {chat.map((c,index)=><ChatMessage key={index} name={c.name} message={c.comment}/>)}
        {/* <ChatMessage name="Rajeev" message="Youtube Live Chat"/>
        <ChatMessage name="Rajeev" message="Youtube Live Chat"/>
        <ChatMessage name="Rajeev" message="Youtube Live Chat"/>
        <ChatMessage name="Rajeev" message="Youtube Live Chat"/> */}
        
    </div>
    <form className='w-full rounded-lg p-2 ml-2 border border-black'
    onSubmit={e => {
      e.preventDefault();
      dispatch(addMessages({
        name:"Raj",
        comment:liveMessage,
      }));
      setLiveMessage("");
    }}>
      <input className='w-72 rounded-lg px-2 ' type="text" 
      value={liveMessage} 
      onChange={e => setLiveMessage(e.target.value)}/>
      <button className='px-2 mx-2 bg-green-200 rounded-md'>Send</button>
    </form>
    </>
  )
}

export default LiveChat