import { Component } from "react";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Home from "./Homepage/HomeComponent";
import { Link,Switch, Route, Redirect, withRouter, BrowserRouter as Router } from "react-router-dom";
import Matches from "./Matches/Matches";
import Match from "./Match/Match";
import Admin from "./Admin/Admin";
import Manager from "./Manager/Manager";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";


const Main = () => {
   

        var dummy = {
            "status": "success",
            "data": [
                {
                    "twolinesmen": [
                        "shorouk",
                        "sondos"
                    ],
                    "seats": [],
                    "_id": "5ffe4679a62fb20584afffae",
                    "homeTeam": "zamalek",
                    "awayTeam": "ahly",
                    "matchVenue": "5ffe462ba62fb20584afffad",
                    "Date": "2021-01-12T00:00:00.000Z",
                    "mainReferee": "farah",
                    "__v": 0
                },
                {
                    "twolinesmen": [
                        "farah",
                        "shorouk"
                    ],
                    "seats": [],
                    "_id": "5fff060e52e2f41170ded4ca",
                    "homeTeam": "zamalek",
                    "awayTeam": "waadi degla",
                    "matchVenue": "5ffe462ba62fb20584afffad",
                    "Date": "2021-01-14T11:34:00.000Z",
                    "mainReferee": "sondos",
                    "__v": 0
                },
                {
                    "twolinesmen": [
                        "farah",
                        "shorouk"
                    ],
                    "seats": [],
                    "_id": "5fff063552e2f41170ded4cb",
                    "homeTeam": "esm3aili",
                    "awayTeam": "zamalek",
                    "matchVenue": "5ffe462ba62fb20584afffad",
                    "mainReferee": "sondos",
                    "Date": "2021-01-13T14:39:49.618Z",
                    "__v": 0
                }
            ]
        };

        useEffect(async () => {
            const fetchData = async () => {
                return(
                axios.get(`http://localhost:3000/user/viewMatch/?id=5ffe4d68db3dd732449bce46`)
                    .then(res => {
                        return (res.data.data);
                    })
                )
            }
            setData(await fetchData());
    
        }, []);
        const [data, setData] = useState(null);

        localStorage.setItem('state', JSON.stringify(dummy));
        var output = localStorage.getItem("state");
        var storageOutput = JSON.parse(output);

        return(
            <Router>
                <Route exact path="/match/:_id" component={() => <Match data={data} numRows = {10} numCols = {5} storageOutput={storageOutput}/>}/>
                <Route exact path="/matches" component={() => <Matches data = {data}/>}/>
                <Route exact path="/admin" component={() => <Admin storageOutput = {storageOutput}/>}/>
                <Route exact path="/manager" component={() => <Manager storageOutput = {storageOutput}/>}/>
                <Route exact path="/login" component={() => <Login/>}/>
                <Route exact path="/signup" component={() => <Signup/>}/>

                <Route exact path="/home" component={() => <Home/>}/>
                {/* <Redirect to="/home" /> */}
            </Router>

        );
}

export default Main;