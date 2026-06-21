import "./History.css";
import beginImg from "../../assets/Begin.jpeg";



function History() {
  return (
    <section className="history" id="about">
      <div className="history-header">
        <span className="history-chip">Our Story</span>
        <h2>How Spandhan Began</h2>
        <p>From a simple act of kindness to a community of hope.</p>
      </div>

      <div className="history-content">
        <div className="history-image">
          <img
            src={beginImg}
            alt="Volunteers working together"
          />
          <div className="history-stats">
            <div className="history-stat">
              <strong>2022</strong>
              <span>Founded</span>
            </div>
            <div className="history-stat">
              <strong>100+</strong>
              <span>Lives touched</span>
            </div>
            <div className="history-stat">
              <strong>Ratlam</strong>
              <span>Based in</span>
            </div>
          </div>
        </div>
        

        <div className="history-text">
          <div className="history-quote">
            "What if we could do more for people facing such challenges every day?"
          </div>

          <p>
            Spandhan was born from a simple moment of compassion.
          </p>

          <p>
            One day, Achal was at a railway station when he noticed
            two visually impaired individuals struggling to find
            their train. They appeared lost and had difficulty
            navigating the crowded platform.
          </p>

          <p>
            Seeing their situation, he stepped forward to help.
            After reaching home, he shared the experience with his friends.
          </p>

          <p>
            Together, they decided to take action. What started as
            a small group of friends united by compassion soon
            became <strong>Spandhan</strong> — a community dedicated to supporting
            visually impaired individuals through volunteer efforts,
            fundraising events, and public support.
          </p>

          
        </div>
      </div>
    </section>
  );
}

export default History;