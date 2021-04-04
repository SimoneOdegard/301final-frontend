import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

class UpdateItemForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      item: {_id:this.props.item._id,
      name:this.props.item.name,
      description:this.props.item.description}
    };
  }

  handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const item = this.state.item;
    item[field] = value;
    this.setState(item);
  }

  handleSubmit = (e) => {
    console.log('this is a log', this.state);
    e.preventDefault();
    this.props.handleUpdate(this.state.item);
  }

  render() {

    return (
      <>
        <Form data-testid={`update-form-${this.props.item.name}`} onSubmit={(e)=> this.handleSubmit(e)}>
          <input data-testid={`update-field-${this.props.item.name}`} name="notes" placeholder="Add Notes" onChange={this.handleChange} />
          <Button type="submit">Update Item</Button>
        </Form>
      </>
    );
  }
}

export default UpdateItemForm;
