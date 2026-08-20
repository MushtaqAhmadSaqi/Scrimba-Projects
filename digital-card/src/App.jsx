function Image() {
  return (
    <div className="card-header">
      <img
        src="./images/avatar.svg"
        alt="Mushtaq Ahmad Saqi profile"
        className="profile-img"
      />
    </div>
  );
}

function MainContent() {
  return (
    <div className="main-content">
      <h1 className="name">Mushtaq Ahmad Saqi</h1>
      <h3 className="title">Frontend Developer</h3>
      <p className="website">openprep.com.pk</p>

      <div className="actions">
        <a href="mailto:contact@openprep.com.pk" className="btn email-btn">
          <img src="./images/email.svg" alt="Email icon" className="btn-icon" />
          Email
        </a>
      </div>

      <div className="info-section">
        <h2 className="section-heading">About</h2>
        <p className="section-text">
          Passionate frontend developer with a keen eye for design and a
          commitment to creating seamless user experiences.
        </p>

        <h2 className="section-heading">Interests</h2>
        <p className="section-text">
          Web Development, User Experience, Design Systems, Open Source
        </p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
        <img src="./images/twitter.svg" alt="Twitter" />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
        <img src="./images/facebook.svg" alt="Facebook" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
        <img src="./images/instagram.svg" alt="Instagram" />
      </a>
      <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
        <img src="./images/github.svg" alt="GitHub" />
      </a>
    </footer>
  );
}

export default function App() {
  return (
    <div className="card-container">
      <div className="card">
        <Image />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}
