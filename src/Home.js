import { Link } from 'react-router-dom';
import './Home.css';
import { ArrowRight,FacebookLogo,TwitterLogo,InstagramLogo } from "phosphor-react";
import './footer.css';


const Home =()=>{
    return(
        <div className="home">
<div>
 
</div>
<img src="https://media.istockphoto.com/id/1459390845/photo/online-grocery-shopping-and-delivery-banner.jpg?s=170667a&w=0&k=20&c=_r4iF2akM1DtMHu88yqh2O1-yCdWGU0m1hlqD0HzLts=" height="500px" width="100%" style={{borderRadius:0}} />
<button className='ho1'><Link to="/shop"><ArrowRight size={25} /></Link></button>
<h2 style={{textAlign:'left'}}>Featured Products</h2>
<div className="cards-wrapper">
    <div className="card"><img src="https://i.pinimg.com/originals/bb/b2/26/bbb226401ef104c0abc1ab0b9209b370.png" height="250" width="300" style={{borderRadius:0}} /> </div>
    <div className="card"><img src="https://t3.ftcdn.net/jpg/02/46/02/78/360_F_246027822_NwEoRdOEJZ9K62jkO0Stk39yDAt919hE.jpg" height="250" width="300" style={{borderRadius:0}} /></div>
    <div className="card"><img src="https://img.freepik.com/premium-photo/paper-bag-with-healthy-food-healthy-food-background-supermarket-food-concept-shopping-supermarket-home-delivery_167368-269.jpg?w=2000" height="250" width="300" style={{borderRadius:0}} /></div>
    <div className="card"><img src="https://img.lovepik.com/desgin_photo/45003/8037_list.jpg!/fw/431" height="250" width="300"style={{borderRadius:0}} /></div>
</div>

<footer className="footer">
        <div className="background">
          <div className="row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li><a href="/about">ABOUT US</a></li>
                <li><a href="/privacy">PRIVACY POLICY</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li><a href="/faq">FAQ</a></li>
                <li><a href="#">PAYMENT OPTIONS</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="https://www.facebook.com/"><i className="fab fa-facebook-f" /><FacebookLogo size={30} weight="fill" /></a>
                <a href="https://www.twitter.com/"><i className="fab fa-twitter" /><TwitterLogo size={30} weight="fill" /></a>
                <a href="https://www.instagram.com/"><i className="fab fa-linkedin-in"/><InstagramLogo size={30} weight="fill" /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
</div>
)
};
export default Home;