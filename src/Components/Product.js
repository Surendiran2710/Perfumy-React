import one from '../assets/image/Perfume1.jpg'
import two from '../assets/image/Perfume2.jpg'
import three from '../assets/image/Perfume3.jpg'

//Product Component
function Product() {
    return (
        <div className="products">

            <div className="box">

                <img src={one} alt="wildstrong"></img>
                <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
            </div>


            <div className="box">
                <img src={two} alt="secret"></img>
                <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
            </div>
            <div className="box">
                <img src={three} alt="villain"></img>
                <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
            </div>

        </div>
    )
}

export default Product