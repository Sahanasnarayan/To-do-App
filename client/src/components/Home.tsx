import {useNavigate, useParams} from 'react-router-dom';
// import axios from 'axios';
import './Home.css'
import TodoInput from './TodoInput';
import TodoList from './TodoList';
const Home = () => {
    
        const navigate = useNavigate();
        const {_id} = useParams();
        return (
            <div className='mainPage'>
                
                <div className='navbar'> 
    
                    <h1 className='navbar-header'> Todo &#10003;</h1>
                    <br></br>
                    <button className='logout-button' onClick={() => {navigate('/login')}}>Logout &rarr;</button>
    
                </div>
            
                <TodoInput userId   = {_id}/>
                <TodoList userId = {_id}/>
                
            </div>
        )
    }  

export default Home

