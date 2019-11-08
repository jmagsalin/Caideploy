import React, {Component} from "react"
import {Card, ListGroup, Container, Row, Col, Jumbotron} from "react-bootstrap"

class Appointment extends Component {
    render(){
        return (
        <React.Fragment>
        <Jumbotron fluid className = "appJumbotron">
             
             <Container>
             <h1></h1>
             <p className = "aboutText"></p><br></br>
             </Container>
         </Jumbotron>
         <Container>
         <h1 style = {{color: "#E19B24", textAlign: "left", fontWeight: "bold"}}>Schedule an Appointment</h1>
         <p style = {{textAlign: "left", fontSize: 25}}>Give us a call and ask for a free over the phone estimate!</p>
         <hr className = "schHr"></hr>
         <Row>
             <Col>
                <Card style={{ width: '30rem' }} className="schCard">
                    <Card.Header style = {{backgroundColor: "#E19B24", fontWeight: "bold"}}>CaiAmy Contacts</Card.Header>
                    <ListGroup className = "schCardItem">
                        <ListGroup.Item style = {{backgroundColor: "black"}}>(858) 692-6819</ListGroup.Item>
                        <ListGroup.Item style = {{backgroundColor: "black"}}>Travon@caiamyindustries.com</ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
            <Col style = {{textAlign: "left", fontSize: 20}} className = "appColList">
                <h2 style = {{color: "#E19B24"}}>About Our Services</h2>
                <li className = "appColList">Customized service, 7 days a week</li>
                <li>Fully insured and bonded</li>
                <li>Environmentally friendly products</li>
                <li>Quality trained, supervised, and uniformed employees</li>
            </Col>
        </Row><br></br><hr className = "schHr"></hr>
         </Container><br></br>
         </React.Fragment>
        )
    }
}

export default Appointment