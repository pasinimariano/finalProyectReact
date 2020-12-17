import React from 'react';
import { useHistory } from 'react-router';


function Home() {
  
    const history= useHistory();

    const handleHistory= () => {
      history.push ('/shop')
    };

    return (
      <div className="ContainerHome">
        <h1> E-COMMERCE </h1>
        <h2> LANDING PAGE </h2>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br>
          </br>sed do eiusmod tempor incididunt ut labore et dolore <br>
          </br>magna aliqua.<br>
          </br> Ut enim ad minim veniam, quis nostrud exercitation ullamco <br>
          </br>laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
        <button onClick= {handleHistory}> SHOP NOW </button>
      </div>
    );
}
  
export default Home;
  