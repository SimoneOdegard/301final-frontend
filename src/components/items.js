import React from 'react';
import UpdateForm from './update-item';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

class Items extends React.Component {

  // render() {
  //   return (
  //     <section>
  //       <h2>Items...</h2>
  //       {this.props.itemsList.forEach( (item,idx) =>
  //           <div key={idx}>
  //             <h3>{item.name}</h3>
  //             <p>{item.description}</p>
              // <blockquote>{item.notes}</blockquote>
              // <UpdateForm item={item} handleUpdate={this.props.handleUpdate} />
              // <button
              //   data-testid={`delete-button-${item.name}`}
              //   onClick={ () => this.props.handleDelete(item._id) }
              // >Delete Item</button>
  //           </div>
  //         )
  //       }
  //     </section>
  //   );
  // }

  render() {
    return (
      <>
        <h2>Your Items</h2>
          {this.props.itemsList.length > 0 &&
          <Carousel style={{ minHeight: "8rem" }}>
            {this.props.itemsList.map((item, idx) => ( 
              <Carousel.Item key={idx}>
                <img
                  className="d-block w-100"
                  src="https://placekitten.com/800/400"
                  alt="Items"
                />
                <Carousel.Caption>
                  <h3>{item.name}</h3>
                  <p>{`Description: ${item.description}`}</p>
                  <blockquote>{item.notes}</blockquote>
                  <UpdateForm item={item} handleUpdate={this.props.handleUpdate} />
                  <Button
                    data-testid={`delete-button-${item.name}`}
                    onClick={ () => this.props.handleDelete(item._id) }
                  >Delete Item</Button>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
          }
      </>
    );
  }
}

export default Items;
