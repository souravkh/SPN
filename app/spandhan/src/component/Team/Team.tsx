import "./Team.css";
import teamImg1 from '../../assets/Team1.jpeg';
import teamImg2 from '../../assets/Team2.jpeg';
import teamImg3 from '../../assets/Team3.jpeg';

const teamImages = [
  teamImg1,
  teamImg2,
  teamImg3
];

function Team() {
  return (
    <section className="team" id="team">
      <div className="team-header">
        <span className="team-chip">Our People</span>
        <h2>Meet the Team</h2>
        <p>The dedicated volunteers and members behind Spandhan.</p>
      </div>

      <div className="team-marquee-container">
        <div className="team-marquee">
          {/* Duplicating the array to create a seamless infinite loop */}
          {[...teamImages, ...teamImages].map((src, index) => (
            <img key={index} src={src} alt={`Team member ${index}`} className="team-image" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
