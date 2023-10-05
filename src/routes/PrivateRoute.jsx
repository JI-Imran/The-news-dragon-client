import React, { Children, useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Button, Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
if(loading){
    return (
    <div className='mt-2 text-danger'>
      <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
      />
    Loading...
    </div>

    )
}

    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;

/**
 * -----------------
 *      STEPS
 * -----------------
 * 1. check user is logged in or not
 * 2. if user is logged in, then allow them to visit the route
 * 3. Else redirect the user to the login page
 * 4, setup the private router
 */