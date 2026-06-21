import './Testimonial.css';

const testimonials = [
  {
    id: 1,
    videoId: "loQrokiyJjU", // Replaced with a real valid YouTube video ID for testing
    quote: "Spandhan has given us a new ray of hope. The volunteers are incredibly supportive.",
    name: "Durgesh Sharma",
    role: "Beneficiary"
  },
  {
    id: 2,
    videoId: "96x_KiEc9TM", 
    quote: "Volunteering here has been the most fulfilling experience of my life.",
    name: "Dr. Vishal Gautam",
    role: "Volunteer"
  },
  {
    id: 3,
    videoId: "0iwcCcZuDXU", 
    quote: "The dedication of the team towards the visually impaired is truly inspiring.",
    name: "Sanjay Kamal",
    role: "Community Partner"
  }
];

function Testimonial() {
  const getYouTubeID = (urlOrId: string) => {
    const match = urlOrId.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|shorts\/))([\w-]{11})/);
    return match ? match[1] : urlOrId;
  };

  return (
    <section className="testimonial" id="testimonial">
      <div className="testimonial-header">
        <span className="testimonial-chip">Voices of Hope</span>
        <h2>Our Testimonials</h2>
        <p>Hear from the people whose lives have been touched by Spandhan.</p>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((t) => (
          <div className="testimonial-card" key={t.id}>
            <div className="video-container">
               <iframe 
                src={`https://www.youtube.com/embed/${getYouTubeID(t.videoId)}?rel=0`} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="testimonial-content">
              <p className="quote">"{t.quote}"</p>
              <div className="author">
                <h4>{t.name}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="testimonial-action">
        <a href="https://www.youtube.com/@RatnapuriSpandanSocialWelfareS" target="_blank" rel="noopener noreferrer" className="btn primary outline">
          Watch More on YouTube
        </a>
      </div>
    </section>
  );
}

export default Testimonial;
