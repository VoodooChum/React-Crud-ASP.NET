import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import DataTable from './DataTable';
import RegistrationModal from './RegistrationModal';
import { USERS_API_URL } from '../Constants';
import axios from 'axios';

const API = axios;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount() {
    this.getItems();
  }
  getItems = () => {
    console.log('what is this');
    API.get(USERS_API_URL)
    .then(res => res.data)
    .then(res => console.log(res))
    .then(res => this.setState({ items: res }))
    .catch(err => console.log(err));
  }
  addUserToState = user => {
    this.setState(previous => ({
      items: [...previous.items, user]
    }));
  }
  updateState = (id) => {
    this.getItems();
  }
  deleteItemFromState = id => {
    const updated = this.state.items.filter(item => item.id !== id);
    this.setState({ items: updated })
  }
  render() {
    return <Container style={{ paddingTop: "10px" }}>
      <Row>
        <Col>
          <DataTable
            updateState={this.updateState}
            items={this.state.items}
            deleteItemFromState={this.deleteItemFromState}>
        </DataTable>
        </Col>
      </Row>
      <Row>
        <Col>
          <RegistrationModal isNew={true} addUserToState={this.addUserToState} />
        </Col>
      </Row>
    </Container>;
  }
}
export default Home;