import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';

export default function App() {
  return (
    <div>
      <Navbar />
      <Header />
    </div>
  );
}
