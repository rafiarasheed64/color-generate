import React, { useState } from 'react'
import Values from 'values.js'

const Color = () => {
  const[clr,setClr]= useState('')
  const [clrlist,setClrlist]= useState(new Values('blue').all(10))
  function submitclr(e){
    e.preventDefault()
    let color  = new Values(clr).all(10)
    setClrlist(color)
  }
  function copy(getcolor){
    setClr(getcolor)
    navigator.clipboard.writeText(getcolor)
}
  return (
    <>
    <form onSubmit={submitclr}>
      <input type="text" onChange={(e)=>setClr(e.target.value)} />
      <button type='submit'>Color Generate</button>
      <div style={{display: 'flex',flexWrap:'wrap',marginTop: '30px',width:'60%'}}>
        {clrlist.map((ele)=>{
          let getcolor = `#${ele.hex}`
          return(
            <div key={ele} onClick={()=>copy(getcolor)} style={{height: '150px', width: '150px',backgroundColor: getcolor,color:'steelblue', border: '2px solid'}}>
            <p>{getcolor}</p>
            <p>{clr===getcolor?'copied to clipboard':null}</p>
            </div>
          )
          
        })}
      </div>

    </form>
          </>
  )
}

export default Color