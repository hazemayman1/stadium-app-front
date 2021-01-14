import React, { Component } from 'react';
import "./Match.css";
import { Row, Col, Container, ListGroup, ListGroupItem, UncontrolledCollapse, Button, ListGroupItemHeading, Card, CardBody, CardHeader, CardText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChair } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router';
import Navbar from '../Homepage/Navbar';

class Match extends Component {
    /** 
     @param {Object} props
    */
    constructor(props) {
        super(props);

        this.state = {
            match: null,
            selected: [],
        }
        //  this.toggleSelect = this.toggleSelect.bind(this);
    }
    reserveSeat(e) {
        if (localStorage.getItem("authToken") != null) {
            e.target.style.color = "green"
        }
        //    this.setState({
        //         selected.push(this)
        //   })
    }

    
    prepareSeats() {
        var rows = [];
        for (var i = 0; i < this.props.numCols; i++) {
            for (var j = 0; j < this.props.numRows; j++) {
                let selectedSeat = this.state.rows[i + j];
                //onClick={this.toggleSelect(i,j)}
                //selectedSeat == true ? 'green' :
                rows.push(<FontAwesomeIcon onClick={this.reserveSeat.bind(this)} className="seat" style={{ width: '50px', height: '50px', display: 'inline-block', margin: '5px', color: 'red' }} icon={faChair}></FontAwesomeIcon>);
            }
        }
        return rows;
    }

    componentDidMount() {
        if (this.props.data) {
            this.setState({
                match: this.props.data.filter(match => match._id === this.props.match.params._id)
            })
        }
    }

    render() {
        if (this.state.match == null) {
            return (<div></div>)
        }
        console.log(this.state.match[0].Date)
        return (
            <div>
                <Navbar />
                <div className="seats">
                    {this.prepareSeats()}
                </div>
                <div className="seatsw">
                    <Card>
                        <CardHeader>Match 1</CardHeader>
                        <CardBody>
                            <CardText>
                                Home Team: {this.state.match[0].homeTeam}
                            </CardText>
                            <CardText>
                                Away Team: {this.state.match[0].awayTeam}
                            </CardText>
                            <CardText>
                                Stadium: {this.state.match[0].matchVenue}
                            </CardText>
                            <CardText>
                                Referee: {this.state.match[0].mainReferee}
                            </CardText>
                            <CardText>
                                First Linesman: {this.state.match[0].twolinesmen[0]}
                            </CardText>
                            <CardText>
                                Second Linesman: {this.state.match[0].twolinesmen[1]}
                            </CardText>
                            <CardText>
                                Date: {this.state.match[0].Date.substr(0, 10)}
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                {localStorage.getItem("authToken") !== null && <button className="reserve-btn btn btn-success mr-2" type="submit">
                    <i class="fa fa-home" aria-hidden="true"></i>&nbsp; Reserve
                </button>}
            </div>
        );
    }
}

export default withRouter(Match);