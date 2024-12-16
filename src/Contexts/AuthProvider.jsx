import { createContext, useEffect, useState } from 'react';
import auth from '../auth/auth';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const GoogleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleGoogleBUtton = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider).then(res => setUser(res.user));
  };
  const handleLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const LogOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const Observer = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      Observer();
    };
  }, [user]);

  const AuthInfo = {
    user,
    setUser,
    handleLogin,
    handleGoogleBUtton,
    LogOut,
    loading,
    handleRegister,
  };
  return (
    <div>
      <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
