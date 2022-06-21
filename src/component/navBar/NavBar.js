// import './NavBar.css';
import './navbar1.css'
import image from '../../Images/pizzaLogo.png'


import {Link} from 'react-router-dom'
import { useState } from 'react';
import ReorderIcon from '@mui/icons-material/Reorder';


// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
// import ReorderIcon from '@material-ui/core/Reorder';
function NavBar(){
    const[toggleBtn, setToggleBtn] = useState(false);

    const getToggle =()=>{
        setToggleBtn(!toggleBtn)
    }

    return(<div className="navbar">
<div className="leftSide" id={toggleBtn ? "open":"close"}>
    <img src={image} alt="logo" />
<div className='hiddenLinks'>
<Link to="/">Home</Link>
<Link to="/menu">Menu</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>

</div>
</div>
<div className="rightSide">

<Link to="/">Home</Link>
<Link to="/menu">Menu</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>
<button className="btn" onClick={getToggle}>
<ReorderIcon />
</button>

</div>
</div>)
}
export default NavBar;