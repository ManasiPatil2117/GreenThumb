import { plantList } from '../Data/plantList'
import PlantItem from './PlantItem'
import '../Styles/Collections.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React,{useState} from 'react';
import Modal from './Modal'

function Collections() {
const [model,setModel] = useState(false);
const [tempdata, setTempdata] = useState([]);

const viewDesc = (name,cover,desc) =>{
  let tempData = [name,cover,desc];
  setTempdata([1, ...tempData])
  return setModel(true);

  }
  return (
    <div className='collection-list'>

      <ul className='plant-list'>
        {plantList.map(({ id, cover, name, desc}) =>
          (
            <div key={id}>
              <PlantItem
                cover={cover}
                name={<Card.Title>.<Card style={{ width: '15rem' }}><Button variant="outline-success" size='sm' onClick={()=>viewDesc(name,cover,desc)}><Card.Title>{name}</Card.Title></Button></Card>.</Card.Title>}
                
              />
              
            </div>
          ) 
        )}
      </ul>

      {
        model === true ? <Modal name={tempdata[1]} cover={tempdata[2]} desc={tempdata[3]} hide={()=>setModel(false)}/>: ''
      }

      
    </div>
  )
}

export default Collections
