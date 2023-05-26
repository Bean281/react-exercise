import React, { createContext, useContext, useState } from 'react'


const MyContext = createContext()


export default function ContextExample() {
    const [name, setName] = useState('React')

  return (
    <MyContext.Provider value={name}>
        <Com3/>
    </MyContext.Provider>
  )
}


function Com1() {
    return(<> 
    {/* thẻ bao đóng "<> </>" */}
    <Com2/>
    </>)
}
function Com2() {
    return(<>
    
    <Com3/>
    </>)
}
function Com3() {
    const valueFromContext = useContext(MyContext)
    return(<>
    This is Com3 - {valueFromContext}
    </>)
}
