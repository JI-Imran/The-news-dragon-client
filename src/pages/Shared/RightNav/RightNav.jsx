import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
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
      <div className='text-danger'>
        <img src={bg} alt="" />
        <div className="card-img-overlay">
    <h5 className="card-title">Card title</h5>
  </div>
      </div>
        </div>
    );
};

export default RightNav;
