
import React from "react";

function Team() {
  return (
    <div className="container py-4 py-md-5 px-3">

      {/* Heading */}
      <h2
        className="text-center mb-4 mb-md-5"
        style={{ fontSize: "clamp(24px, 5vw, 32px)" }}
      >
        About Me
      </h2>

      <div className="row align-items-center g-4">

        {/* Left Side - Profile */}
        <div className="col-12 col-md-5 text-center">

          <img
            src="/Media/Images/thoufic.jpeg"
            alt="Thoufic Ahamad Mohammad"
            className="rounded-circle img-fluid"
            style={{
              width: "295px",
              maxWidth: "70vw",
              height: "295px",
              maxHeight: "70vw",
              objectFit: "cover",
            }}
          />

          <h4 className="mt-4">
            Thoufic Ahamad Mohammad
          </h4>

          <p className="text-muted">
            Full Stack Developer
          </p>

        </div>

        {/* Right Side - About Content */}
        <div className="col-12 col-md-6 offset-md-1 text-center text-md-start">

          <p>
            Hello! I am Thoufic Ahamad Mohammad, an aspiring
            Full Stack Developer currently pursuing my Master
            of Computer Applications (MCA). I am passionate
            about developing web applications and solving
            real-world problems through technology.
          </p>

          <p>
            My technical interests include Java, JavaScript,
            React, Node.js, Express.js, MongoDB, SQL, HTML,
            and CSS. I enjoy learning new technologies and
            improving my development skills.
          </p>

          <p>
            I have worked on projects such as StayNest, a
            rental accommodation website, and a Zerodha-inspired
            stock trading platform. These projects helped me
            understand frontend development, backend APIs,
            authentication, and database integration.
          </p>

          <p>
            I believe in continuous learning, consistency,
            and building practical solutions. I am always
            looking forward to new opportunities to learn,
            grow, and contribute as a software developer.
          </p>

          {/* Social Links */}
          <p>
            Connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/thouficahamad"
              target="_blank"
              rel="noreferrer"
              className="text-primary"
            >
              LinkedIn
            </a>
          
          </p>

        </div>

      </div>

    </div>
  );
}

export default Team;
