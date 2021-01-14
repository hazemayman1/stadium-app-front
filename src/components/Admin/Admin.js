import React, { Component } from 'react';
import "./Admin.css";
import { Row, Col, Container, ListGroup, ListGroupItem, UncontrolledCollapse, Button, ListGroupItemHeading, Card, CardBody, CardHeader, CardText } from 'reactstrap';
import Navbar from '../Homepage/Navbar';
import { Redirect } from 'react-router';

class Admin extends Component {
    render() {
        if(localStorage.getItem("authToken") == null){
            return(<Redirect to = "/home"/>)
          }
        return (
            <div>
                <Navbar />
                <h1 className="manager-title">Review membership requests</h1>
                <Card id="member-request">
                    <CardHeader>Pending</CardHeader>
                    <CardBody>
                        <CardText>
                            Member email: {"test1@gmail.com"}
                        </CardText>
                        <CardText>
                            Member name: {"Ahmed Mohamed"}
                        </CardText>
                        <CardText>
                            Age: {"25"}
                        </CardText>
                    </CardBody>
                    <button className="btn btn-admin btn-success mr-2" type="submit">
                        <i class="fa fa-home" aria-hidden="true"></i>Accept
                    </button>
                    <button className="btn btn-admin btn-danger mr-2" type="submit">
                        <i class="fa fa-home" aria-hidden="true"></i>Reject
                    </button>
                </Card>
                <Card id="member-request">
                    <CardHeader>Pending</CardHeader>
                    <CardBody>
                        <CardText>
                            Member email: {"test2@gmail.com"}
                        </CardText>
                        <CardText>
                            Member name: {"Mohamed"}
                        </CardText>
                        <CardText>
                            Age: {"24"}
                        </CardText>
                    </CardBody>
                    <button className="btn btn-admin btn-success mr-2" type="submit">
                        <i class="fa fa-home" aria-hidden="true"></i>Accept
                    </button>
                    <button className="btn btn-admin btn-danger mr-2" type="submit">
                        <i class="fa fa-home" aria-hidden="true"></i>Reject
                    </button>
                </Card>
                <Card id="member-request">
                    <CardHeader>Pending</CardHeader>
                    <CardBody>
                        <CardText>
                            Member email: {"test8@gmail.com"}
                        </CardText>
                        <CardText>
                            Member name: {"Ashraf ahmed"}
                        </CardText>
                        <CardText>
                            Age: {"45"}
                        </CardText>
                    </CardBody>
                    <button className="btn btn-admin btn-success mr-2" type="submit">
                        <i class="fa fa-home" aria-hidden="true"></i>Accept
                    </button>
                    <button className="btn btn-admin btn-danger mr-2" type="submit">
                        <i class="fa fa-home" aria-hidden="true"></i>Reject
                    </button>
                </Card>
            </div>
        );
    }
}

export default Admin;