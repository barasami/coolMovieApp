import * as React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import DehazeIcon from '@mui/icons-material/Dehaze';
import ClearIcon from '@mui/icons-material/Clear';


export default function ButtonAppBar() {
  const[click,setClick]=React.useState(false)

  const handleClick=()=>{
    setClick(()=> !click)
  }
  return ( 
    <nav className='navbar'>
      <div className='my-title'>Movie Hub</div>
      <div className='Navbar-links'>
        <ul className={click ? 'mymenu' : 'closemenu'}> 
          <li><Link to='/' className='active'>Home</Link></li>
          <li><Link to='/movies'>Upcoming</Link></li>
          <li><Link to='/news'>News</Link></li>
        </ul>
      </div>
      <div className='bars' onClick={handleClick}>
        {click ? <DehazeIcon/>:<ClearIcon/>}
      </div>
    </nav>
  );
}