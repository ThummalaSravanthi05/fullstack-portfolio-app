import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function Admin() {
  const [activeTab, setActiveTab] = useState("projects");
  
  // Project States
  const [project, setProject] = useState({ name: "", description: "", image: "" });
  const [projects, setProjects] = useState([]);

  // Client States
  const [client, setClient] = useState({ name: "", description: "", designation: "", image: "" });
  const [clients, setClients] = useState([]);

  // Contact States
  const [contacts, setContacts] = useState([]);

  // Subscriber States
  const [subscribers, setSubscribers] = useState([]);

  // Fetch all data on component mount
  useEffect(() => {
    fetchProjects();
    fetchClients();
    fetchContacts();
    fetchSubscribers();
  }, []);

  const fetchProjects = () => {
    axios.get("https://fullstack-portfolio-backend-1agw.onrender.com/projects")
      .then(res => setProjects(res.data))
      .catch(err => console.log("Error fetching projects:", err));
  };

  const fetchClients = () => {
    axios.get("https://fullstack-portfolio-backend-1agw.onrender.com/clients")
      .then(res => setClients(res.data))
      .catch(err => console.log("Error fetching clients:", err));
  };

  const fetchContacts = () => {
    axios.get("https://fullstack-portfolio-backend-1agw.onrender.com/contacts")
      .then(res => setContacts(res.data))
      .catch(err => console.log("Error fetching contacts:", err));
  };

  const fetchSubscribers = () => {
    axios.get("https://fullstack-portfolio-backend-1agw.onrender.com/subs")
      .then(res => setSubscribers(res.data))
      .catch(err => console.log("Error fetching subscribers:", err));
  };

  const addProject = () => {
    if (!project.name || !project.description || !project.image) {
      alert("Please fill all fields");
      return;
    }
    axios.post("https://fullstack-portfolio-backend-1agw.onrender.com/projects", project)
      .then(() => {
        alert("Project Added!");
        setProject({ name: "", description: "", image: "" });
        fetchProjects();
      })
      .catch(err => console.log("Error:", err));
  };

  const addClient = () => {
    if (!client.name || !client.description || !client.designation || !client.image) {
      alert("Please fill all fields");
      return;
    }
    axios.post("https://fullstack-portfolio-backend-1agw.onrender.com/clients", client)
      .then(() => {
        alert("Client Added!");
        setClient({ name: "", description: "", designation: "", image: "" });
        fetchClients();
      })
      .catch(err => console.log("Error:", err));
  };

  const deleteProject = (id) => {
    if (window.confirm("Are you sure?")) {
      axios.delete(`https://fullstack-portfolio-backend-1agw.onrender.com/projects/${id}`)
        .then(() => {
          alert("Project Deleted!");
          fetchProjects();
        })
        .catch(err => console.log("Error:", err));
    }
  };

  const deleteClient = (id) => {
    if (window.confirm("Are you sure?")) {
      axios.delete(`https://fullstack-portfolio-backend-1agw.onrender.com/clients/${id}`)
        .then(() => {
          alert("Client Deleted!");
          fetchClients();
        })
        .catch(err => console.log("Error:", err));
    }
  };

  return (
    <div className="admin-panel">
      <div className="admin-container">
        <h1>Admin Dashboard</h1>

        {/* Admin Tabs */}
        <div className="admin-tabs">
          <button
            className={`tab-btn ${activeTab === "projects" ? "active" : ""}`}
            onClick={() => setActiveTab("projects")}
          >
            Projects
          </button>
          <button
            className={`tab-btn ${activeTab === "clients" ? "active" : ""}`}
            onClick={() => setActiveTab("clients")}
          >
            Clients
          </button>
          <button
            className={`tab-btn ${activeTab === "contacts" ? "active" : ""}`}
            onClick={() => setActiveTab("contacts")}
          >
            Contacts
          </button>
          <button
            className={`tab-btn ${activeTab === "subscribers" ? "active" : ""}`}
            onClick={() => setActiveTab("subscribers")}
          >
            Subscribers
          </button>
        </div>

        {/* Projects Tab */}
        {activeTab === "projects" && (
          <div className="tab-content">
            <h2>Project Management</h2>
            <div className="form-section">
              <h3>Add New Project</h3>
              <div className="admin-form">
                <input
                  type="text"
                  placeholder="Project Name"
                  value={project.name}
                  onChange={e => setProject({ ...project, name: e.target.value })}
                  className="admin-input"
                />
                <textarea
                  placeholder="Project Description"
                  value={project.description}
                  onChange={e => setProject({ ...project, description: e.target.value })}
                  className="admin-input admin-textarea"
                  rows="4"
                />
                <input
                  type="text"
                  placeholder="Image URL"
                  value={project.image}
                  onChange={e => setProject({ ...project, image: e.target.value })}
                  className="admin-input"
                />
                <button onClick={addProject} className="admin-add-btn">Add Project</button>
              </div>
            </div>

            {/* Display Projects */}
            <div className="list-section">
              <h3>All Projects ({projects.length})</h3>
              <div className="items-list">
                {projects.length > 0 ? (
                  projects.map(p => (
                    <div key={p._id} className="list-item">
                      <div className="item-image">
                        <img src={p.image} alt={p.name} />
                      </div>
                      <div className="item-content">
                        <h4>{p.name}</h4>
                        <p>{p.description}</p>
                      </div>
                      <button
                        className="delete-btn"
                        onClick={() => deleteProject(p._id)}
                      >
                        Delete
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="empty-message">No projects added yet</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Clients Tab */}
        {activeTab === "clients" && (
          <div className="tab-content">
            <h2>Client Management</h2>
            <div className="form-section">
              <h3>Add New Client</h3>
              <div className="admin-form">
                <input
                  type="text"
                  placeholder="Client Name"
                  value={client.name}
                  onChange={e => setClient({ ...client, name: e.target.value })}
                  className="admin-input"
                />
                <textarea
                  placeholder="Client Description / Testimonial"
                  value={client.description}
                  onChange={e => setClient({ ...client, description: e.target.value })}
                  className="admin-input admin-textarea"
                  rows="4"
                />
                <input
                  type="text"
                  placeholder="Designation (e.g., CEO, Web Developer)"
                  value={client.designation}
                  onChange={e => setClient({ ...client, designation: e.target.value })}
                  className="admin-input"
                />
                <input
                  type="text"
                  placeholder="Image URL"
                  value={client.image}
                  onChange={e => setClient({ ...client, image: e.target.value })}
                  className="admin-input"
                />
                <button onClick={addClient} className="admin-add-btn">Add Client</button>
              </div>
            </div>

            {/* Display Clients */}
            <div className="list-section">
              <h3>All Clients ({clients.length})</h3>
              <div className="items-list">
                {clients.length > 0 ? (
                  clients.map(c => (
                    <div key={c._id} className="list-item">
                      <div className="item-image">
                        <img src={c.image} alt={c.name} style={{ borderRadius: "50%" }} />
                      </div>
                      <div className="item-content">
                        <h4>{c.name}</h4>
                        <p className="designation">{c.designation}</p>
                        <p>{c.description}</p>
                      </div>
                      <button
                        className="delete-btn"
                        onClick={() => deleteClient(c._id)}
                      >
                        Delete
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="empty-message">No clients added yet</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Contacts Tab */}
        {activeTab === "contacts" && (
          <div className="tab-content">
            <h2>Contact Form Submissions</h2>
            <div className="list-section">
              <h3>Total Contacts: {contacts.length}</h3>
              <div className="table-responsive">
                {contacts.length > 0 ? (
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>City</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contacts.map(c => (
                        <tr key={c._id}>
                          <td>{c.fullName}</td>
                          <td>{c.email}</td>
                          <td>{c.mobile}</td>
                          <td>{c.city}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p className="empty-message">No contact submissions yet</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Subscribers Tab */}
        {activeTab === "subscribers" && (
          <div className="tab-content">
            <h2>Newsletter Subscribers</h2>
            <div className="list-section">
              <h3>Total Subscribers: {subscribers.length}</h3>
              <div className="table-responsive">
                {subscribers.length > 0 ? (
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Email Address</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subscribers.map((s, index) => (
                        <tr key={index}>
                          <td>{s.email}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p className="empty-message">No subscribers yet</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;