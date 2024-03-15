'use client'
import { appCtx } from '@/Context/appContext'
import React, { useContext, useState } from 'react'

const A = () => {
    const [val,setVal] = useState("")
  const ctxData =   useContext(appCtx)

    const fnChange = (eve)=>{
       setVal(eve.target.value)

    }
    const fnClick = ()=>{
 
ctxData.dispatch({
    type:"NAME_UPDATE",
    payload:val
})
    }

  return (
    <div>
      <p>Name:<input onChange={fnChange}/></p>
      <button onClick = {fnClick}>click</button>
    </div>
  )
}

export default A
