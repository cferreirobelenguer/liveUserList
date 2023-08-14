import React, {useEffect, useState} from "react";
import '../Users/User.css';

const User = (props) => {
    const [data, setData] = useState ([]);
    const [users, setUsers] = useState ([]);
    useEffect(()=>{
        //print users on first render
        getUsers();
    },[])

    useEffect(()=>{
        //finds users based on the value entered in the input
        getUserInput();
    },[props.dataInput])

    const getUsers = () => {
        //user data fetch
        fetch('https://randomuser.me/api?results=50', {
            method: 'GET',
            })
        .then((response) => response.json())
        .then((responseJson) => {
            setData(responseJson.results)
        })
        .catch((error) => {
            console.error(error);
        });
    }

    const getUserInput = () => {
        //filter users
        const filteredResults = data.filter(item => item.name.first.toLowerCase().startsWith(props.dataInput.toLowerCase()))
        setUsers(filteredResults)
    }

    return (
        <section className="user-container">
            {users.length>0 ?(
                users.map((item, i) => 
                    <div key={i} className="user-container-item">
                        <img src={item.picture.medium} className="user-img"></img>
                        <div className="user-container-item-text">
                            <p className="user-text">{item.name.first}</p>
                            <p className="user-text">{item.location.city} , {item.location.state}</p>
                        </div>
                    </div>
                )
                ): (
                    data.map((item, i) => 
                    <div key={i} className="user-container-item">
                        <img src={item.picture.medium} className="user-img"></img>
                        <div className="user-container-item-text">
                            <p className="user-text">{item.name.first}</p>
                            <p className="user-text">{item.location.city} , {item.location.state}</p>
                        </div>
                    </div>
                    )
                )   
            }
        </section>
    )
}
export default User;