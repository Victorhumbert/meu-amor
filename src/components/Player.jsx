import React from 'react';
import audio from '../assets/audioSassah.mp3';
import '../style/player.css';

function toggleAudio({ target }) {
  const disco = document.getElementById('disco');
  target.classList.toggle('ativo');
  if (target.ativo) {
    disco.classList.remove('ativo');
    musica.pause();
    target.ativo = false;
  } else {
    disco.classList.add('ativo');
    musica.play();
    target.ativo = true;
  }
}

function update() {
  const progressBar = document.getElementById('progress');
  const progressBall = document.getElementById('progress-ball');
  const currentTime = musica.currentTime;
  const duration = musica.duration;
  const progress = (currentTime / duration) * 100;
  progressBar.style.width = `${progress}%`;
  progressBall.style.left = `${progress - 1}%`;
}

function avancar(event) {
  const rect = progressBar.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const progressBarWidth = progressBar.offsetWidth;
  const seekTime = (clickX / progressBarWidth) * musica.duration;
  musica.currentTime = seekTime;
}

const Player = () => {
  React.useEffect(() => {
    const musica = document.getElementById('musica');
  }, []);

  return (
    <section className="playerAudio">
      <div onClick={avancar} id="progress-bar">
        <div id="progress"></div>
        <div id="progress-ball"></div>
      </div>
      <audio id="musica" src={audio} onTimeUpdate={update} type="audio/mp3" />
      <ul className="btns">
        {/* <li>
          <button className="setas" id="prev"></button>
        </li> */}
        <li>
          <button onClick={toggleAudio} id="toggle"></button>
        </li>
        {/* <li>
          <button className="setas" id="next"></button>
        </li> */}
      </ul>
      <h2>Te amo muitoooo Minha princesa</h2>
    </section>
  );
};

export default Player;
