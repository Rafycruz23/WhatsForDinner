import {Link} from "react-router-dom"; //this replaces the a tags with Link, to move around pages. 
import axios from 'axios';
export default function Navbar(){


    //AXIOS used to GET data from API. NEEDS WORK!!!!! Link works but function itself not. 

const getRecipes = () =>{
   
axios.get('https://api.spoonacular.com/recipes/random?apiKey=5a312119fa95425c8af9a9236717e2b5').then(function
    (response){
console.log(response);
    })
}

    return <nav className="nav">
        <Link to="/">Logo</Link>
        <ul>
            <li><Link to="/plan">Plan My Meals</Link></li>
            <li><Link to="/all">All Recipes</Link></li>
            <form class="d-flex" role="search">
            <input class="form-control me-3" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" onClick={getRecipes}>Search</button>
            </form>
        </ul> 
    </nav>
}