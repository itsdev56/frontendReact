import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <header style={headers}>
        <h1>TODOOOOOOOOOO</h1>
        <Link to ="/">HOME</Link> | <Link to ="/about">ABOUT</Link>
    </header>
  )
}
const headers=
{
    background:'white',
    color:'red',
    textAlign:'center',
    padding:'10px'
}
export default Header;