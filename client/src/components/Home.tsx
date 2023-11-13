import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './Home.css'
// import ListItemInput from './ListItemInput'
// import ListingListItems from './ListingListItems';


const Home = () => {
    
        const navigate = useNavigate();
    
        return (
            <div className='mainPage'>
                
                <div className='navbar'> 
    
                    <h1 className='navbar-header'> Todo &#10003;</h1>
                    <br></br>
                    <button className='logout-button' onClick={() => {navigate('/login')}}>Logout &rarr;</button>
    
                </div>
            
                {/* <todoInput userId = {_id}/> */}
                {/* <ListItemInput userId = {_id}/>
                <ListingListItems userId = {_id}/> */}
                {/* <todoList userId = {_id}/> */}
                
            </div>
        )
    }  

export default Home

