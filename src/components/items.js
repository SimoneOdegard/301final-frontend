import React from 'react';
import UpdateItemForm from './update-item';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

class Items extends React.Component {

  render() {
    return (
      <center>
      <Card style={{ width: '30rem' }}>
        <br/>
        <h3>New Items</h3>
        {this.props.itemsList.map( (item,idx) =>
            <div key={idx}>
              <Card.Title>{item.name}</Card.Title>
              <p>{item.description}</p>
              <blockquote>{item.notes}</blockquote>
              <UpdateItemForm item={item} handleUpdate={this.props.handleUpdate} />
              <br/>
              <Button
                data-testid={`delete-button-${item.name}`}
                onClick={ () => this.props.handleDelete(item._id) }
              >Delete Item</Button>
              <br/><br/>
              <p>----------</p>
            </div>
          )
        }
      </Card>
      </center>
    );
  }
}

export default Items;
