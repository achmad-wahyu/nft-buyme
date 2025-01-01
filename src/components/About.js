import React from 'react';
import '../styles/About.css'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h3>Why do you need to $Buyme</h3>
        <p>Buy now before the price shoots up far from you imagined and before you regret it, lets fucking go! Don't delay and go all in with your money, then consistently your money will be 100x in a short time.</p>
      </div>
      <div>
        <img 
          src="https://i.seadn.io/gae/x7JRw8cVgcSSF9-P-cuprgjVSkviMOrySuQ2Idh4zsVsujSBQYxIGUFBXcSs1kpSjGfgZnDMDTDXuLrYht9xtD8IYIHxHADvx9-u-w?auto=format&w=1400"
          alt="buyme"
          className="image"
        />
      </div>
    </div>
  );
}

export default About;