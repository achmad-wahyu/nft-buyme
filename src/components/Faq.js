import React from 'react'
import '../styles/Faq.css'

const faq = () => {
    return (
        <div className="faq-container">
            <div className="faq-text">
                <h3>Why do you need to $Buyme</h3>
                <h4>Why do you need to $Buyme</h4>
                <p>Buy now before the price shoots up far from you imagined and before you regret it, lets fucking go! Don't delay and go all in with your money, then consistently your money will be 100x in a short time.</p>
                <div className="faq-button"> 
                    <button>Join Discord</button>
                    <button>Follow Twitter</button>
                    <button>Go DEX</button>
                </div>
            </div>
            <div>
                <img
                    src="https://th.bing.com/th/id/OIP.F0bPk51GKqCQREez3usdNgHaHa?w=640&h=640&rs=1&pid=ImgDetMain"
                    alt="buyme"
                    className="image"
                />
            </div>
        </div>
    )
}

export default faq