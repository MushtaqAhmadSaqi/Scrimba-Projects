import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

function Image() {
  return (
    <>
      <img
        src="./images/IMG_20230619_120059.jpg"
        alt="profile"
        className="profile"
      />
    </>
  );
}

function MainContent() {
  return (
    <>
      <h2 className="name">Mushtaq Ahmad Saqi</h2>
      <h4 className="title">Frontend Developer</h4>
      <p className="website">openprep.com.pk</p>

      <button className="email">
        <img src="./images/email.png" alt="email" />
        Email
      </button>

      <h2 className="same">About</h2>
      <p className="bio">
        Passionate frontend developer with a keen eye for design and a
        commitment to creating seamless user experiences.
      </p>

      <h2 className="same">Interests</h2>
      <p className="interests">
        Web Development, User Experience, Design Systems
      </p>
    </>
  );
}

function Footer() {
  return (
    <>
      <footer className="footer">
        <img src="./images/twitter.png" alt="twitter" />
        <img src="./images/facebook.png" alt="facebook" />
        <img src="./images/instagram.png" alt="instagram" />
        <img src="./images/github.png" alt="github" />
      </footer>
    </>
  );
}

root.render(
  <>
    <Image />
    <MainContent />
  </>,
);
