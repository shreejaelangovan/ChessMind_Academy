import Navbar from "../components/Navbar";
import "../assets/css/Home.css";

function Home() {
  return (
    
    <div className="home-container">
        <Navbar/>
      <div className="landing">
        <div className="inside-box">
          <section className="landing1">
            <div className="overlay">
              <h1><b>Welcome to Chess Mind Academy</b></h1>
              <p>Unlock the strategic world of chess with our expert guidance and personalized courses.</p>
              <div className="cta-whole">
              <a href="/contact" className="cta-button">ENQUIRE NOW</a>
              <a href="/about" className="cta-button">GET STARTED</a>
              </div>

            </div>
          </section>
        </div>
        </div>
      </div>
  );
}

export default Home;
