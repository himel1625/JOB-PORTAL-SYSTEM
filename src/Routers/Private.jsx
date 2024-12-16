import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Components/Loader/Loader';

const Private = () => {
  const { pathname } = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) return <Loader />;
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={pathname} to="/Login"></Navigate>;
};

export default Private;
