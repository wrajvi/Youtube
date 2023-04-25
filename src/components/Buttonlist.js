import React from 'react'
import Button from './Button'
const list=["All","Gaming","Songs","Live","News","Cooking"];
const Buttonlist = () => {
  return (
    <div className='flex'>
      {list.map((item,index)=><Button key={index} name={item}/>)}
      {/* <Button name="All"/>
      <Button name="Gaming"/>
      <Button name="Songs"/>
      <Button name="Live"/>
      <Button name="News"/>
      <Button name="Cooking"/> */}
      
    </div>
  )
}

export default Buttonlist