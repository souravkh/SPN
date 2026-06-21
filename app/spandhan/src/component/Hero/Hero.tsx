import './Hero.css'
import profileImg from "../../assets/profile.jpeg";

function Hero(){
    return(
        <section className="hero" id="home">
          <div className="hero-text">
            <div className="hero-chip">
              Ratlam, Madhya Pradesh
            </div>
            <h1>
              Lighting lives <span className="hero-highlight">beyond sight</span>
            </h1>
            <h2 className="hero-hindi">
              अंधेरे में भी उम्मीद की एक किरण।
            </h2>
            <p className="description">
              Supporting blind individuals with care and assistance.
              Through volunteer efforts and fundraising events like music nights
              and cultural gatherings, we raise funds to support
              their growth and well-being.
            </p>
            <div className="buttons">
              <a href="mailto:contact@spandhan.org?subject=I%20want%20to%20volunteer" className="btn primary" style={{textDecoration: "none", display: "inline-flex", alignItems: "center"}}>Become a Volunteer</a>
              <a href="#about" className="btn secondary" style={{textDecoration: "none", display: "inline-flex", alignItems: "center"}}>Our Story</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-wrapper">
              <img src={profileImg} alt="Helping blind people and community support" />
            </div>
          </div>

          <div className="hero-wave">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#FFFFFF"></path>
              </svg>
          </div>
        </section>
    )
}

export default Hero;
