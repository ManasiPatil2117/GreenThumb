import { plantList } from '../Data/plantList'
import PlantItem from './PlantItem'
import '../Styles/Collections.css'

function Collections() {
  return (
    <div className='collection-list'>

      <ul className='plant-list'>
        {plantList.map(({ id, cover, name}) =>
          (
            <div key={id}>
              <PlantItem
                cover={cover}
                name={name}
              />
              
            </div>
          ) 
        )}
      </ul>
    </div>
  )
}

export default Collections
