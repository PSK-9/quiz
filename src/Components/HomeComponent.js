import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Home extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container">
           <h1 className="text-center"> Welcome To Quiz Practice Zone</h1>
           <h2>Topics</h2>
            <button><Link to='/java'>Java</Link></button>
           <button><Link to='/test'>General</Link></button>
            </div>
        );
    }

}
export default Home;