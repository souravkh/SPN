import "./Projects.css";
import musicNight from "../../assets/music night.jpeg";

const projects = [
  {
    id: 1,
    title: "Project Big B",
    description: "Spandan program",
    type: "video",
    src: "https://www.youtube.com/watch?v=GzedXaftgis", // Placeholder image
  },
  {
    id: 2,
    title: "Fundraising music 2026",
    description: "A fundraising music night featuring performances by visually impaired artists.",
    type: "image",
    src: musicNight, // Placeholder YouTube ID
  },
  {
    id: 3,
    title: "Fundraising Music Night 2025",
    description: "Song by Ayub.",
    type: "video",
    src: "https://www.youtube.com/watch?v=ePRE0z3tMkA", // Placeholder image
  }
];

function Projects() {
  const getYouTubeID = (urlOrId: string) => {
    const match = urlOrId.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|shorts\/))([\w-]{11})/);
    return match ? match[1] : urlOrId;
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <span className="projects-chip">Our Work</span>
        <h2>Current Projects</h2>
        <p>Explore the initiatives we're running to make a tangible difference.</p>
      </div>

      <div className="projects-grid">
        {projects.map((proj) => (
          <div className="project-card" key={proj.id}>
            <div className="project-media">
              {proj.type === "image" ? (
                <img src={proj.src} alt={proj.title} />
              ) : (
                <div className="video-container-wide">
                  <iframe 
                    src={`https://www.youtube.com/embed/${getYouTubeID(proj.src)}?rel=0`} 
                    title={proj.title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
            <div className="project-content">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-action">
        <a href="https://www.youtube.com/@RatnapuriSpandanSocialWelfareS" target="_blank" rel="noopener noreferrer" className="btn primary outline">
          Discover More on YouTube
        </a>
      </div>
    </section>
  );
}

export default Projects;
