import './Home.css';
import {Link} from 'react-router-dom';
import bannerimg from '../../Images/pizza.jpeg'

function Home(){
    return(<div className='home' style={{backgroundImage:`url(${bannerimg})`}}>
        
        <div className='headerContainer' >
          <h1>La Pizza</h1>
          <p>Pizza to fit anyone's taste</p> 
          <Link to ="/menu">
            <button>Order Now</button>
            </Link> 
            
            </div></div>)
}
export default Home;