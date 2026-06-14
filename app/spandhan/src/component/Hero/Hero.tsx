import './Hero.css'

function Hero(){
    return(
        <>
        <section className="hero">

  <div className="hero-text">

    <p className="tagline">Ratlam</p>

    <h1>
      Lighting lives beyond sight
    </h1>
     <h1>
      अंधेरे में भी उम्मीद की एक किरण।
    </h1>

    <p className="description">
      Supporting blind individuals with care and assistance.
      Through volunteer efforts and fundraising events like music nights,
      and cultural gatherings, we raise funds to support
      their growth and well-being.
    </p>

    <div className="buttons">
      <button className="btn primary">Become a Volunteer</button>
    </div>

  </div>

  <div className="hero-image">
    <img src="" 
    alt="Helping blind people and community support" />
  </div>

</section>
        </>
    )
}

export default Hero;
