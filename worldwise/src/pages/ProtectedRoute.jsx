/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/FakeAuthContext';

function ProtectedRoute({ children }) {
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuth) navigate('/');
    },
    [isAuth, navigate]
  );

  return isAuth ? children : null;
}

export default ProtectedRoute;
