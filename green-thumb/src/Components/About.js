import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
function About() {
    return (
        <>
            <h2 className='text-center mb-3 text-bg-dark p-3'>About Us </h2>
            <br/>
            <h4 className='mb-3 font-sansserif  px-4'>Find Your New Favorite Plant</h4>
            <p className='lh-base lead mb-2 text-dark text-center p-3'>
                Green Thumb is here to help strengthen your relationship with plants. We make buying plants easy by delivering healthy, ready-to-go plants to your door and setting you up with the tips and tricks you need to help your plants thrive. Plants make life better. We make plants easy.
            </p>
            <CardGroup >
                <Card border="light" style={{ width: '18rem' }}>
                    <Card.Body className='bg-primary text-light mb-2 text-center rounded'>
                        <Card.Title className='bg-primary text-light mb-2 text-center rounded'>Direct From the Greenhouse</Card.Title>
                        <Card.Text className='lead'>
                        When you buy a houseplant from a box store or nursery, it probably spends an average of four weeks traveling from a greenhouse to a drafty warehouse on a hot or cold truck. Then, it’s shipped to a store where it likely isn’t getting the water, light, or care it needs to thrive. With Green Thumb, our plants are cared for by plant experts and kept in optimal conditions at our greenhouse where they’re shipped directly to you. 
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="light" style={{ width: '18rem' }}>
                    <Card.Body className='bg-light mb-2 text-center rounded'>
                        <Card.Title >All the Guidance</Card.Title>
                        <Card.Text className='lead'>
                        Our expertise doesn’t stop once your plant leaves our greenhouse. We are here to help you with any and all of your plant care questions. From simple, customized care instructions included with your plant to real-time expert support, we want to make plant care easy. Feel free to email, chat, or tweet us any question you have — the Green Thumb Team is standing by and ready to help!
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="light" style={{ width: '18rem' }}>
                    <Card.Body className='bg-primary text-light mb-2 text-center rounded'>
                        <Card.Title >Shipped to Your Door</Card.Title>
                        <Card.Text className='lead'>
                        Our plants are shipped with care and experience. We’ve learned how to keep plants at the right temperature, protect their roots, and keep them healthy while they travel from our greenhouse to your home. Our innovative packaging holds plants securely in place, preventing damage and decreasing soil spillage. Most shipments will arrive in under a week and all plants will be healthy, undamaged, and ready for you to enjoy.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </>
    )
}
export default About
