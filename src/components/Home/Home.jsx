import React, {useState} from "react";
import '../Home/Home.css';
import User from "../Users/User";


const Home = () => {
    const [dataInput, setDataInput] =useState("");

    const handleChange = (event) => {
        //get the input value
        setDataInput(event)
    }

    return (
        <section className="home-container">
            <div className="home-header">
                <div className="home-text">
                    <h4 className="home-text-title">Live User Filter</h4>
                    <p className="home-text-subtitle">Search by name and/or location</p>
                </div>
                <div>
                    <input type="text" id="filter" placeholder="Search" className="home-input"  onChange={(e) => handleChange(e.target.value)}></input>
                </div>
            </div>
            <User dataInput={dataInput}></User>
        </section>
    )
}
export default Home;