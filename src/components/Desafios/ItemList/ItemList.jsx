import { Item } from "../Item/Item"
import {Row, Col} from 'react-bootstrap';

export const ItemList = ({items})=>{

    return(
        <Row xs={1} md={4} xxl={6} className="g-2">
            {
                items.map(producto=>(
                    <Col>
                        <Item key={producto.id} item={producto}/>
                    </Col>
                ))
            }
        </Row>
    )

}