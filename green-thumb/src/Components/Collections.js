import { plantList } from '../Data/plantList'
import PlantItem from './PlantItem'
import '../Styles/Collections.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Collections() {
  return (
    <div className='collection-list'>

      <ul className='plant-list'>
        {plantList.map(({ id, cover, name}) =>
          (
            <div key={id}>
              <PlantItem
                cover={cover}
                name={<Card.Title>.<Card style={{ width: '15rem' }}><Button variant="outline-success" size='sm'><Card.Title>{name}</Card.Title></Button></Card>.</Card.Title>}
                
              />
              
            </div>
          ) 
        )}
      </ul>
    </div>
  )
}

export default Collections
