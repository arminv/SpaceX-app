import React from 'react';
import './App.css';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import {
  Card,
  // CardHeader,
  CardTitle,
  // CardImg,
  CardBody,
  CardFooter,
  Button,
  Container,
  Row,
  Col,
} from 'shards-react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';

const GET_LAUNCHES = gql`
  {
    launches {
      details
      launch_success
      launch_year
    }
  }
`;

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Query query={GET_LAUNCHES}>
          {({ data, loading }) => {
            // const { launches } = data;

            if (loading || !data) {
              return <div>Loading data...</div>;
            }

            const detailCards = data.launches.map((launch) => {
              return (
                <Col sm='12' lg='4'>
                  <Card
                    style={{
                      maxWidth: '300px',
                      color: 'black',
                      backgroundColor: 'whitesmoke',
                    }}
                  >
                    {/* <CardHeader>Card header</CardHeader> */}
                    {/* <CardImg src='https://place-hold.it/300x200' /> */}
                    <CardBody>
                      <CardTitle>{launch.year}</CardTitle>
                      <p>{launch.details}</p>
                      <Button>Read more &rarr;</Button>
                    </CardBody>
                    <CardFooter>Card footer</CardFooter>
                  </Card>
                </Col>
              );
            });

            return (
              <Container>
                <Row>{detailCards}</Row>
              </Container>
            );
          }}
        </Query>
      </header>
    </div>
  );
}

export default App;
