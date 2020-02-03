import React, {Component} from 'react';
import { ListGroup, Form, Row, Col, Button, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
      .listGroup {
      maxWidth: 400;
      margin: '0 auto 10px';
      padding-bottom: 0.5em;
      }
  .findBtn {
    margin-bottom: 0.5em;
    padding-top: 0.5em;
  }
  .listItems {
    background: #fafafa;
  }

  .searchBar{
      margin-bottom: 0.5em; 
  }
    `;

    export class Search extends Component {

        constructor(props, context) {
            super(props, context);
        
            this.state = {
                error: null,
                loading: false,
                searchValue: "",
                data: []
              }
              this.handleOnChange = this.handleOnChange.bind(this);
              this.handleSearch = this.handleSearch.bind(this);
              this.performSearch = this.performSearch.bind(this);
            };
        

            performSearch(idx){
            console.log("Performing Search");
            const url = `https://dn-demo-api.azurewebsites.net/dn/${idx}`;
            //CORS Proxy for the server 
            const proxy = "https://cors-anywhere.herokuapp.com/";
            fetch(proxy + url)
                .then(res => res.json())
                .then(
                  (results) => {
                      //Convert new data into an array with concat
                      //Map function needs array
                      var newData = this.state.data.concat([results]);
                    this.setState({
                      'loading': true,
                       data: newData
                    });
                    console.log(results);
                  },
                  (error) => {
                    this.setState({
                      loading: true,
                      error,
                    });
                    console.log(error);
                  });
            }
        
        handleOnChange(event){
            this.setState({ searchValue: event.target.value });
        };

        handleSearch(){
            this.performSearch(this.state.searchValue);
        }

        render() {
            const {data} = this.state;
        return (
            <Styles>
                <Form>
                    <Row>
                        <Col>
                        <Form.Control className="searchBar" onChange={event => this.handleOnChange(event)} value={this.state.searchValue} placeholder="ID" />
                        </Col>
                    </Row>
                </Form>
                <Button className="findBtn" variant="primary" size="lg" onClick={this.handleSearch} block>
                  Find Record
                  </Button>
                  { data ? (
                        <Container>
                            {data.map((item) => {
                             return <ListGroup className="listGroup" key={item.sin}>
                                    <ListGroup.Item className="listItems">
                                    <p>Name: {item.first}  {item.last}</p> <p>SIN: {item.sin}</p> 
                                    </ListGroup.Item>
                                </ListGroup>
                            })}
                        </Container>

                      ) : (
                          <p>Try Searching for ID</p>
                      )}
            </Styles>
            );
        }
    }


