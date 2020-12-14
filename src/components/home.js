import React from 'react';
import {useHistory} from 'react-router-dom';

function Home(item){

    const history =useHistory();

    const routeToOrder=()=>{
        history.push("/pizza")
    }

    return(
        <div className="home">
            <h1 className="header1">Coding and Hungry?</h1>
            <img className="food-pic" src="https://cdn.pixabay.com/photo/2017/02/03/03/54/burger-2034433_960_720.jpg"/>
            <div className="routeToOrder">
                <button onClick={routeToOrder}>Pizza?</button>
            </div>
            <img className="pizza-pic" src="https://cdn.pixabay.com/photo/2016/04/09/09/22/pizza-1317699_960_720.jpg">

            <div className="wrapper">
            {DataTransferItemList.map(items=>{
                return(
                    <div className="info" key={item.name}>
                        <p className="details">{item.name} | Price:${item.price}</p>
                        <p className="details">{item.description}</p>
                    </div>
                )
            })
        };

            </div>
        </div>        
            

        
    );
};





export default Home;