import React, { useState } from 'react'

  const items = [
    { title: "React", content: "React is a UI library." },
    { title: "Next.js", content: "Next.js is a React framework." },
    { title: "TypeScript", content: "TypeScript adds types to JavaScript." }
  ];

function Accordion() {
    const [openItems,setOpenItems]=useState(new Set())
    const handleOpenItems=(index)=>{
        
    }
  return (
        <div>
        <h1>Accordion</h1>
        {items.map((item,index)=>(
            <div>
                <h2>{item.title}</h2>
                {openItems.has(index) ? <p>{item.content}</p>:null}
            </div>
        ))}
        </div>
  )
}

export default Accordion