import React from 'react';
import Player from './Player';
import sassah from '../assets/sabrininhaFoto.png';
import '../style/container.css';
import Foto from './Foto';

const Container = () => {
  return (
    <section className="container">
      <h1>
        Para: <br /> Amor da minha vida <span>(Sabrina Chaussard Osmo)</span>
      </h1>
      <Foto />
      <Player />
    </section>
  );
};

export default Container;
