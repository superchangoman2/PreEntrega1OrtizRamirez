import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import './Item.css';

export const Item = ({item})=>{
    return(
        <Card>
        <Card.Img variant="top" src={item.pictureUrl} alt={item.title} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            ${item.price}
          </Card.Text>
          <Link to={`/item/${item.id}`}>
            <Button className='boton-ver' variant="primary">Ver detalle</Button>
          </Link>
        </Card.Body>
      </Card>
    )
}