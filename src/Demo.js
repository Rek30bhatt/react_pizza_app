import './Demo.css';
import image from './Images/restaurant_project_harry.png';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
function Demo(){
    const [tooglebtn,settoggleBtn] = useState(false)
    const getToggle =()=>{
        settoggleBtn(!tooglebtn)
    }
    return(<div className="parent">
        <div className="leftside" id={tooglebtn ? 'open':"close"}>
            <img src={image}alt="img1" />
            <div className='hiddenlink'>
            <a href="#">Home</a>
            <a href="#">AboutUs</a>
            <a href="#">Services</a>
            </div> 
        </div>
        <div className='rightside'>
        <a href="#">Home</a>
            <a href="#">AboutUs</a>
            <a href="#">Services</a>
            <button onClick={getToggle}>
                <AddIcon />

            </button>
        </div>
    </div>)
}
export default Demo;