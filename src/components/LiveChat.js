import React from 'react'
import ChatMessage from './ChatMessage'
const LiveChat = () => {
  return (
    <div className='h-[550px] ml-2 p-2 border border-black bg-slate-100 rounded-lg'>
        <ChatMessage name="Rajeev" message="Youtube Live Chat"/>
        <ChatMessage name="Rajeev" message="Youtube Live Chat"/>
        <ChatMessage name="Rajeev" message="Youtube Live Chat"/>
        <ChatMessage name="Rajeev" message="Youtube Live Chat"/>
    
    </div>
  )
}

export default LiveChat