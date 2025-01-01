import React from 'react';
import '../styles/Home.css'

const Home = () => {
  return (
    <div className="home-container">
        <div className="text">
            <h1 style={{ color:'#3FFF' }}>Don't $BuyMe</h1>
            <h3>Beacuse you get Very Funcking Rich</h3>
            <p style={{ color:'rgb(166, 166, 166)' }}>Dont buy only $1 but buy up to $10 and can consistenly make your fucking much money, Fair enough ?</p>
            <button>$BuyMe</button>
        </div>
        <div>
            <img 
                src="https://coin-turk.com/wp-content/uploads/2023/06/memecoin-nedir-coin-turk-com.jpeg"
                alt="buyme"
                className="image"
            />
        </div>
    </div>
  );
}

export default Home;