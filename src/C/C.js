'use client'
import React, { useContext } from 'react'
import { appCtx } from '@/Context/appContext'
const C = () => {
   const ctxData =  useContext(appCtx)
   const {name,loc} = ctxData.state
  return (
    <div>
      <h3>name:......{name}</h3>
      <h3>loc:........{loc}</h3>

    </div>
  )
}

export default C
