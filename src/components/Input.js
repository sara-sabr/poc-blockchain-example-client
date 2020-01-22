import React, {Component} from 'react';
import { Button, Form, FormControl, FormLabel } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
      .inputForm {
        padding: 40px;
        max-width: 500px;
        border: 1px solid #bcbcbc;
        background: #eeeeee;
      }
    `;

    const myData = [
        {
          Key: "400784288",
          Record: { first: "John", last: "Smith", dod: "2019-01-14" }
        },
        {
          Key: "529875945",
          Record: { first: "Luke", last: "Skywalker", dod: "2019-01-14" }
        },
        {
          Key: "950255588",
          Record: { first: "Han", last: "Solo", dod: "2019-01-14" }
        },
        {
          Key: "815657212",
          Record: { first: "Tony", last: "Stark", dod: "2019-01-14" }
        },
        {
          Key: "251586744",
          Record: { first: "Steve", last: "Rogers", dod: "2019-01-14" }
        }
      ];

    export class Input extends Component {

        constructor(props, context) {
            super(props, context);
        
            this.state = {
              value: "",
              citizen: myData,
              newPerson: {
                first: null,
                last: null,
                sin: null
              }
              
            };
        
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleInput = this.handleInput.bind(this);
        
          }
        
          handleChange(e) {
            this.setState({ value: e.target.value });
          }
          
           handleInput(e, element) {
            e.preventDefault();
            const { newPerson } = this.state;
            newPerson[element] = e.target.value;
            this.setState({ newPerson });
          }
        
          handleSubmit(e) {
            e.preventDefault();
            const data = this.state.citizen;
            const { citizen, newPerson } = this.state;
            this.setState(
              {
                citizen: [...citizen, newPerson]
              }
            );
            console.log(data);
          }
        

        render() {
            const { citizen, newPerson } = this.state;
            const { first, last, sin } = this.state.newPerson;
        return (
    <Styles>
        <Form className="inputForm" horizontal onSubmit={this.handleSubmit}>
            <Form.Group controlId="formHorizontalFirstName">
                <Form.Label componentClass={FormLabel}>First Name</Form.Label>
                    <Form.Control value={first} type="name" onChange={e => this.handleInput(e, "first")} placeholder="John" />
            </Form.Group>
            <Form.Group controlId="formHorizontalLastName">
          <Form.Label componentClass={FormLabel}>Last Name</Form.Label>
            <FormControl type="name" value={last} onChange={e => this.handleInput(e, "last")} placeholder="Smith"/>
        </Form.Group>
            <Form.Group controlId="formGridAddress1">
                    <Form.Label componentClass={FormLabel}>Deceased SIN</Form.Label>
                        <FormControl type="name" value={sin} onChange={e => this.handleInput(e, "sin") } placeholder="000-000-000"/>
            </Form.Group>
            <Form.Group>
                    <Form.Label componentClass={FormLabel} for="formControlsFile">Death Certificate</Form.Label>
            <FormControl
                    id="formControlsFile"
                    type="file"
                    label="File"
                    help="Example block-level help text here."
            />
            </Form.Group>
            <Button className="getData" bsStyle="primary" bsSize="large" type="submit" block>Submit</Button>
        </Form>
    </Styles>
)
        }
    }


