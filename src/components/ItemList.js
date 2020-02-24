import React, {Component} from 'react';
import { Button, ListGroup, Spinner } from 'react-bootstrap';
import styled from 'styled-components';

// const myData = 
//   [{"Key":"400784288", "Record":{"first":"John","last":"Smith","dod":"2014-02-10"}},
// {"Key":"529875945", "Record":{"first":"Luke","last":"Skywalker","dod":"2016-07-19"}},
// {"Key":"950255588", "Record":{"first":"Han","last":"Solo","dod":"2018-05-01"}},
// {"Key":"815657212", "Record":{"first":"Tony","last":"Stark","dod":"2019-11-17"}},
// {"Key":"251586744", "Record":{"first":"Steve","last":"Rogers","dod":"2019-01-30"}}];


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
    
    constructor(props){
        super(props);
        
        this.state = {
          error: null,
          'loading': false,
           data: []
      }
        // this.handleClick = this.handleClick.bind(this);
      }

      componentDidMount() {
        /**
             *  New URL dnapi.ericwu.ca/
             * 
             */
        const url = "http://dnapi.ericwu.ca/dn";
        //CORS Proxy for the server 
        const proxy = "https://cors-anywhere.herokuapp.com/";
        fetch(proxy + url)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              'loading': true,
               data: result
            });
            console.log(result);
          },
          (error) => {
            this.setState({
              loading: true,
              error,
            });
            console.log(error);
          }
        )
      }
      
      // handleClick(){
      //   this.setState(state => ({
      //     'loading': true,
      //     'data': []
      //   }));
      //   setTimeout(()=>{
      //     this.setState({loading: false});
      //   }, 2000);
      //   setTimeout(()=>{
      //     this.setState({'data': myData});
      //   }, 2000);
      // }
      
      render() {
        const {loading, error, data} = this.state;
        if (error) {
          return <Styles>
            <div>Error: {error.message}</div>
          </Styles>
        } else if (!loading) {
          return <Styles>
                  <Button className="getData" variant="primary" size="lg" block>
                  <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>
                  </Button>
                </Styles>
        } else {
          return (
                  <Styles>
          {data.map((item) => {
              return <ListGroup className="listGroup">
                <ListGroup.Item className="listItems" key={item.sin}>
                  <p>Name: {item.first}  {item.last}</p> <p>SIN: {item.sin}</p> 
                </ListGroup.Item>
              </ListGroup>
            })}         
        </Styles>
          );
        }
      }
    }