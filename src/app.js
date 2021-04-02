import React from 'react';
import axios from 'axios';
import Form from './components/add-item.js';
import Items from './components/items.js';

const API_SERVER = process.env.REACT_APP_API;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      newItem: '',
      description: ''
    }
  }

  updateItem = (newItem) => this.setState ({ newItem });
  updateDescription = (description) => this.setState({ description });

  async componentDidMount() {
    await this.getItems();
  }

  getItems = async () => {
    const response = await axios.get(`${API_SERVER}/items`);
    const items = response.data;
    this.setState({items});
    console.log(items);
  }

  addItem = async (item) => {
    const items = await axios.post(`${API_SERVER}/items`, { newItem: this.state.newItem, description: this.state.description });
    this.setState({ items: items.data });
    console.log('inside addItem', items.data);
    this.getItems();
  }

  deleteItem = async (id) => {
    await axios.delete(`${API_SERVER}/items/${id}`);
    const newItemArray = this.state.items.filter((item, idx) => {
      return id !== idx;
    });
    this.setState({ items: newItemArray });
    this.getItems();
  }

  updateItem = async (item) => {
    await axios.put(`${API_SERVER}/items/${item._id}`, item);
    this.getItems();
  }



  render() {
    return (
      <div>
        <br/>
        <center>
          <h1>Welcome!</h1>
        </center>
        <br/>
        <Form handleAddItem={this.addItem} />
        <hr />
        <Items handleDelete={this.deleteItem} itemsList={this.state.items} />
      </div>
    );
  }
}

export default App;
