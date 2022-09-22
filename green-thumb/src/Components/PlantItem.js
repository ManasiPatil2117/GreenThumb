import '../Styles/PlantItem.css'

function PlantItem({ cover, name}) {
	return (
		<li className='plant-item'>
			<img className='plant-item-cover' src={cover} alt='ok' />
			{name}
		</li>
	)
}

export default PlantItem
