import React from 'react';
import { Button, ButtonToolbar, Card, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
      <Button className='mb-2' variant="outline-primary"><FaGoogle/> Login with Google</Button>{' '}
      <Button variant="outline-secondary"><FaGithub/> Login with Github</Button>{' '}
      <div>
        <h4>Find Us On</h4>
    <ListGroup>
      <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
      <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
    </ListGroup>
      </div>
      <QZone />

      <Card className="bg-dark text-white text-center">
      <Card.Img src={bg} alt="Card image" />
      <Card.ImgOverlay>
        <h1>Create an Amazing Newspaper</h1>
        <p className='mt-4'>
          Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
        </p>
        <Button variant='danger' className='mt-5'>Learn More</Button>
      </Card.ImgOverlay>
    </Card>


        </div>
    );
};

export default RightNav;
