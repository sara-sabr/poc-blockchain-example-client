import React, {Component} from 'react';
import { Button, ListGroup, Spinner } from 'react-bootstrap';
import styled from 'styled-components';

const myData = 
  [{"Key":"400784288", "Record":{"first":"John","last":"Smith","dod":"2014-02-10"}},
{"Key":"529875945", "Record":{"first":"Luke","last":"Skywalker","dod":"2016-07-19"}},
{"Key":"950255588", "Record":{"first":"Han","last":"Solo","dod":"2018-05-01"}},
{"Key":"815657212", "Record":{"first":"Tony","last":"Stark","dod":"2019-11-17"}},
{"Key":"251586744", "Record":{"first":"Steve","last":"Rogers","dod":"2019-01-30"}}];


const Styles = styled.div`

.listGroup {
      maxWidth: 400;
      margin: '0 auto 10px';
      padding-bottom: 0.5em;
      }
  .getData {
    padding-bottom: 1em;
  }
  .listItems {
    background: #fafafa;
  }
    `;

export class ItemList extends Component {
    
    constructor(){
        super();
        
        this.state = {
          'loading': false,
          'data': []
      }
        this.handleClick = this.handleClick.bind(this);
      }
      
      handleClick(){
        this.setState(state => ({
          'loading': true,
          'data': []
        }));
        setTimeout(()=>{
          this.setState({loading: false});
        }, 2000);
        setTimeout(()=>{
          this.setState({'data': myData});
        }, 2000);
      }
      
      render() {
        const {loading} = this.state;
      return (
        <Styles>
          {this.state.data.map((post, index) => {
              return <ListGroup className="listGroup">
                <ListGroup.Item className="listItems" header={post.Key}>
                  <p>Name: {post.Record.first}  {post.Record.last}</p> <p>Date of Death: {post.Record.dod}</p> 
                </ListGroup.Item>
              </ListGroup>
            })}
              <Button onClick={this.handleClick} className="getData" bsStyle="primary" bsSize="large" block disabled={loading}>
              {loading ? <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner> : "View Records"} 
              </Button>
                      
        </Styles>
      )
     }
}
