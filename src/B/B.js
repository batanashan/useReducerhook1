import React, { useContext, useState } from 'react'
import { appCtx } from '@/Context/appContext'
const B = () => {
    const [val,setVal] = useState("")
    const ctxData=useContext(appCtx)
    const fnChange = (eve)=>{
       setVal(eve.target.value)

    }
    const fnClick = ()=>{
    ctxData.dispatch({
        type:"LOC_UPDATE",
        payload:val
    })
    }

  return (
    <div>
      <p>LOC:<input onChange={fnChange}/></p>
      <button onClick = {fnClick}>click</button>
    </div>
  )
}

export default B;
