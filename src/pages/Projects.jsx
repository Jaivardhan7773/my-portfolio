import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Projects = () => {
    return (
        <>
            <Container fluid="md">
                <Row className='py-5 px-2'>
                    <Col>
                        <Card style={{ width: '18rem' }} className='relative mx-auto my-3 p-3 bg-dark rounded-md'>
                            <Card.Img variant="top" src="https://i.ibb.co/Y7Ffvztk/Screenshot-2025-05-05-192142.png" />
                            <div class="absolute top-8 right-6 ">
                                <a href="https://github.com/Jaivardhan7773" target='_blank' className='p-2 mx-1 bg-dark rounded-full' ><i className="fa-brands fa-github fa-lg text-white "></i></a>
                                <a href="https://github.com/Jaivardhan7773" target='_blank' className='p-2  mx-1 bg-dark rounded-full'><i className="fa-solid fa-link fa-lg text-primary"></i></a>
                            </div>
                            <Card.Body>
                                <Card.Title className="text-white">AizenX Blogs</Card.Title>
                                <Card.Text className="text-white">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>

                                <span className='text-primary'>#MERN</span><span className='text-green-600'>#Zustand</span><span className='text-pink-600'>#Advance</span>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }} className='mx-auto my-3 p-3  rounded-md bg-dark'>
                            <Card.Img variant="top" src="https://i.ibb.co/Y7Ffvztk/Screenshot-2025-05-05-192142.png" />
                            <div class="absolute top-8 right-6 ">
                                <a href="https://github.com/Jaivardhan7773" target='_blank' className='p-2 mx-1 bg-dark rounded-full' ><i className="fa-brands fa-github fa-lg text-white "></i></a>
                                <a href="https://github.com/Jaivardhan7773" target='_blank' className='p-2  mx-1 bg-dark rounded-full'><i className="fa-solid fa-link fa-lg text-primary"></i></a>
                            </div>
                            <Card.Body>
                                <Card.Title className="text-white">Speed Talk chat</Card.Title>
                                <Card.Text className="text-white">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }} className='mx-auto my-3 p-3 rounded-md bg-dark'>
                            <Card.Img variant="top" src="https://i.ibb.co/Y7Ffvztk/Screenshot-2025-05-05-192142.png" />
                            <div class="absolute top-8 right-6 ">
                                <a href="https://github.com/Jaivardhan7773" target='_blank' className='p-2 mx-1 bg-dark rounded-full' ><i className="fa-brands fa-github fa-lg text-white "></i></a>
                                <a href="https://github.com/Jaivardhan7773" target='_blank' className='p-2  mx-1 bg-dark rounded-full'><i className="fa-solid fa-link fa-lg text-primary"></i></a>
                            </div>
                            <Card.Body>
                                <Card.Title className="text-white">Astra Jay</Card.Title>
                                <Card.Text className="text-white">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>


        </>
    )
}

export default Projects