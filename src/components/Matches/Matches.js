import React, { Component } from 'react';
import "./Matches.css";
import { Link, Switch, Route, Redirect, withRouter, BrowserRouter as Router } from "react-router-dom";
import { Row, Col, Container, ListGroup, ListGroupItem, UncontrolledCollapse, Button, ListGroupItemHeading, Card, CardBody, CardHeader, CardText } from 'reactstrap';
import Navbar from '../Homepage/Navbar';
class Matches extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {

        // if (props){
        //     console.log(props);
        // }
        if (this.props.data === null) {
            return (<div></div>)
        }
        let matchesarr = [];
        return (
            <div>
                <Navbar />
                {matchesarr = this.props.data.map((match, index) => {
                    return (
                        <Link to={`/match/${match._id}`} params={{ numRows: "10", numCols: "20", data: { match } }} >
                            <Card className="card-obj">
                                <CardHeader>Match {index + 1}</CardHeader>
                                <CardBody>
                                    <CardText>
                                        Home Team: {match.homeTeam}
                                    </CardText>
                                    <CardText>
                                        Away Team: {match.awayTeam}
                                    </CardText>
                                    <CardText>
                                        Stadium: {match.matchVenue}
                                    </CardText>
                                    <CardText>
                                        Referee: {match.mainReferee}
                                    </CardText>
                                    <CardText>
                                        First Linesman: {match.twolinesmen[0]}
                                    </CardText>
                                    <CardText>
                                        Second Linesman: {match.twolinesmen[1]}
                                    </CardText>
                                    <CardText>
                                        Date: {match.Date}
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Link>
                    )
                })}

                {/* <Card>
                    <CardHeader>Match 2</CardHeader>
                    <CardBody>
                        <CardText>
                            Home Team: {this.props.data[1].homeTeam}
                        </CardText>
                        <CardText>
                            Away Team: {this.props.data[1].awayTeam}
                        </CardText>
                        <CardText>
                            Stadium: {this.props.data[1].matchVenue}
                        </CardText>
                        <CardText>
                            Referee: {this.props.data[1].mainReferee}
                        </CardText>
                        <CardText>
                            First Linesman: {this.props.data[1].twolinesmen[0]}
                        </CardText>
                        <CardText>
                            Second Linesman: {this.props.data[1].twolinesmen[1]}
                        </CardText>
                        <CardText>
                            Date: {this.props.data[1].Date}
                        </CardText>
                    </CardBody>
                </Card> */}
            </div>
            // <div>
            //     <h1 className="main-title">Current Matches</h1>
            //     <div className = "match-bar">
            //         <h2 className="venue">Cairo</h2>
            //         <h2 className="date">14/5/2020</h2>
            //         <h2 className = "team1">Ahly</h2>
            //         <h2 className="vs">vs</h2>
            //         <h2 className = "team2">Zamalek</h2>
            //         <h2 className="ref">Ahmed</h2>
            //         <h2 className="lineman1">Mohamed</h2>
            //         <h2 className="lineman2">Hussein</h2>

            //     </div>
            // </div>
        );
    }
}

export default Matches;