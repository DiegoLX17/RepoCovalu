import React from 'react'
import { Button } from 'antd'

function Componente(props=("Hello")) {
    console.log(props)
    return (
        <>
        <br />
        
        <Button type="primary" danger={true} size='large' >Button</Button>
        </>
  )
}

export default Componente