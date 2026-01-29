import axios from "axios";
import { useEffect, useState } from "react";
import Admin from "./Admin";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [showAdmin, setShowAdmin] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/projects")
      .then(res => setProjects(res.data))
      .catch(err => console.log("Error fetching projects:", err));

    axios.get("http://localhost:5000/clients")
      .then(res => setClients(res.data))
      .catch(err => console.log("Error fetching clients:", err));
  }, []);

  const [contact, setContact] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: ""
  });

  const submitContact = () => {
    if (!contact.fullName || !contact.email || !contact.mobile || !contact.city) {
      alert("Please fill all fields");
      return;
    }
    axios.post("http://localhost:5000/contacts", contact)
      .then(() => {
        alert("Message Sent!");
        setContact({ fullName: "", email: "", mobile: "", city: "" });
      })
      .catch(err => console.log("Error:", err));
  };

  const [email, setEmail] = useState("");
  const subscribe = () => {
    if (!email) {
      alert("Please enter an email");
      return;
    }
    axios.post("http://localhost:5000/subs", { email })
      .then(() => {
        alert("Subscribed!");
        setEmail("");
      })
      .catch(err => console.log("Error:", err));
  };

  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="logo">DigitalPro</h2>
          <button className="admin-btn" onClick={() => setShowAdmin(!showAdmin)}>
            {showAdmin ? "View Website" : "Admin Panel"}
          </button>
        </div>
      </nav>

      {showAdmin ? (
        <Admin />
      ) : (
        <>
          {/* HERO */}
          <section className="hero">
            <div className="hero-content">
              <h1>We Build Digital Experiences</h1>
              <p>Creative solutions for modern businesses</p>
              <button className="cta-btn">Get Started</button>
            </div>
          </section>

          {/* ABOUT US */}
          <section className="about">
            <div className="container">
              <h2>Why Choose Us?</h2>
              <div className="features-grid">
                <div className="feature-card">
                  <h3>Innovation</h3>
                  <p>Cutting-edge solutions tailored to your needs</p>
                </div>
                <div className="feature-card">
                  <h3>Quality</h3>
                  <p>High-quality services and support</p>
                </div>
                <div className="feature-card">
                  <h3>Performance</h3>
                  <p>Optimized for speed and efficiency</p>
                </div>
              </div>
            </div>
          </section>

          {/* PROJECTS */}
          <section className="projects">
            <div className="container">
              <h2>Our Projects</h2>
              <div className="projects-grid">
                {projects.length > 0 ? (
                  projects.map(p => (
                    <div key={p._id} className="project-card">
                      <div className="project-image">
                        <img src={p.image} alt={p.name} />
                      </div>
                      <div className="project-info">
                        <h3>{p.name}</h3>
                        <p>{p.description}</p>
                        <button className="read-more-btn">Read More</button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="empty-state">No projects yet</p>
                )}
              </div>
            </div>
          </section>

          {/* CLIENTS */}
          <section className="clients">
            <div className="container">
              <h2>Happy Clients</h2>
              <div className="clients-grid">
                {clients.length > 0 ? (
                  clients.map(c => (
                    <div key={c._id} className="client-card">
                      <div className="client-image">
                        <img src={c.image} alt={c.name} />
                      </div>
                      <p className="client-description">"{c.description}"</p>
                      <h4>{c.name}</h4>
                      <p className="client-designation">{c.designation}</p>
                    </div>
                  ))
                ) : (
                  <p className="empty-state">No clients yet</p>
                )}
              </div>
            </div>
          </section>

          {/* CONTACT FORM */}
          <section className="contact">
            <div className="container">
              <h2>Get a Free Consultation</h2>
              <div className="contact-form-wrapper">
                <form className="contact-form">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={contact.fullName}
                    onChange={e => setContact({ ...contact, fullName: e.target.value })}
                    className="form-input"
                  />
                  <input
                    type="email"
                    placeholder="Enter Email Address"
                    value={contact.email}
                    onChange={e => setContact({ ...contact, email: e.target.value })}
                    className="form-input"
                  />
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    value={contact.mobile}
                    onChange={e => setContact({ ...contact, mobile: e.target.value })}
                    className="form-input"
                  />
                  <input
                    type="text"
                    placeholder="Area, City"
                    value={contact.city}
                    onChange={e => setContact({ ...contact, city: e.target.value })}
                    className="form-input"
                  />
                  <button type="button" onClick={submitContact} className="submit-btn">
                    Get Quick Quote
                  </button>
                </form>
              </div>
            </div>
          </section>

          {/* NEWSLETTER */}
          <section className="newsletter">
            <div className="container">
              <h2>Subscribe to our Newsletter</h2>
              <p>Get the latest updates and offers</p>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="newsletter-input"
                />
                <button onClick={subscribe} className="newsletter-btn">
                  Subscribe
                </button>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="footer">
            <div className="container">
              <p>&copy; 2026 DigitalPro. All rights reserved.</p>
              <div className="footer-links">
                <a href="#home">Home</a>
                <a href="#projects">Projects</a>
                <a href="#clients">Clients</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;