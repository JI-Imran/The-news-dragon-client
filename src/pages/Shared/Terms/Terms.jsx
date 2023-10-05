import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repudiandae, a quaerat ex consequuntur eveniet! Delectus, voluptas adipisci. Reprehenderit, voluptates numquam in praesentium ex rerum at suscipit beatae ea unde?</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;