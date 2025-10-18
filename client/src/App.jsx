import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setFormStatus(data.message);
      setFormData({ name: '', email: '', company: '', industry: '', message: '' });
    } catch (error) {
      setFormStatus('Error submitting form. Please try again.');
    }
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo-section">
            <div className="logo-placeholder">NP365</div>
            <h2 className="brand-name">Non-Profit-365</h2>
          </div>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#industries">Industries</a>
            <a href="#solutions">Solutions</a>
            <a href="#contact">Contact</a>
            <button className="cta-button">Request Demo</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Protect Your Sensitive Data in a Digital World</h1>
            <p className="hero-subtitle">
              Enterprise-grade Microsoft Purview security solutions tailored for regulated industries.
              Protect client data, ensure compliance, and prevent data breaches.
            </p>
            <div className="hero-buttons">
              <button className="primary-button">Get Started</button>
              <button className="secondary-button">Learn More</button>
            </div>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <h3>99.9%</h3>
              <p>Data Protection Rate</p>
            </div>
            <div className="stat">
              <h3>500+</h3>
              <p>Organizations Protected</p>
            </div>
            <div className="stat">
              <h3>24/7</h3>
              <p>Security Monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="industries">
        <div className="container">
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-subtitle">
            Specialized security solutions for organizations that handle sensitive data
          </p>
          <div className="industry-grid">
            <div className="industry-card">
              <div className="industry-icon">🏦</div>
              <h3>Financial Services</h3>
              <p>Banks, credit unions, and investment firms</p>
              <ul>
                <li>Protect financial records and transactions</li>
                <li>Ensure SOX & PCI-DSS compliance</li>
                <li>Prevent fraud and data breaches</li>
              </ul>
            </div>
            <div className="industry-card">
              <div className="industry-icon">🏥</div>
              <h3>Healthcare</h3>
              <p>Hospitals, clinics, and health service providers</p>
              <ul>
                <li>Secure patient health information (PHI)</li>
                <li>HIPAA compliance made simple</li>
                <li>Protect against ransomware attacks</li>
              </ul>
            </div>
            <div className="industry-card">
              <div className="industry-icon">⚖️</div>
              <h3>Legal Services</h3>
              <p>Law firms and legal professionals</p>
              <ul>
                <li>Protect attorney-client privilege</li>
                <li>Secure case files and documents</li>
                <li>Maintain ethical compliance standards</li>
              </ul>
            </div>
            <div className="industry-card">
              <div className="industry-icon">🤝</div>
              <h3>Non-Profit Organizations</h3>
              <p>NGOs and charitable organizations</p>
              <ul>
                <li>Protect donor information</li>
                <li>Secure grant applications</li>
                <li>Affordable compliance solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="solutions">
        <div className="container">
          <h2 className="section-title">Microsoft Purview Security Solutions</h2>
          <p className="section-subtitle">
            Comprehensive data protection powered by Microsoft Purview
          </p>
          <div className="solutions-grid">
            <div className="solution-card">
              <h3>🏷️ Data Classification & Labeling</h3>
              <p>
                Automatically identify and classify sensitive data across your organization.
                Apply labels to protect confidential information, client records, and proprietary data.
              </p>
              <ul>
                <li>AI-powered sensitive data discovery</li>
                <li>Customizable classification policies</li>
                <li>Automated protection based on sensitivity</li>
              </ul>
            </div>
            <div className="solution-card">
              <h3>🛡️ Data Loss Prevention (DLP)</h3>
              <p>
                Prevent unauthorized sharing of sensitive information via email, chat, or file sharing.
                Monitor and block data leaks before they happen.
              </p>
              <ul>
                <li>Real-time monitoring across endpoints</li>
                <li>Policy-based access controls</li>
                <li>Block unauthorized data transfers</li>
              </ul>
            </div>
            <div className="solution-card">
              <h3>🔐 Encryption & Access Control</h3>
              <p>
                Encrypt sensitive files and emails with industry-standard encryption.
                Control who can access, edit, or share protected documents.
              </p>
              <ul>
                <li>End-to-end encryption</li>
                <li>Granular permissions management</li>
                <li>Revoke access anytime, anywhere</li>
              </ul>
            </div>
            <div className="solution-card">
              <h3>👤 Insider Risk Management</h3>
              <p>
                Detect and mitigate potential insider threats from employees, contractors, or partners.
                Identify risky behaviors before they lead to data breaches.
              </p>
              <ul>
                <li>Behavioral analytics and anomaly detection</li>
                <li>Early warning alerts for suspicious activity</li>
                <li>Investigation tools for security teams</li>
              </ul>
            </div>
            <div className="solution-card">
              <h3>📊 Security Monitoring & Alerts</h3>
              <p>
                24/7 monitoring of data access and usage patterns.
                Real-time alerts for policy violations and security incidents.
              </p>
              <ul>
                <li>Centralized security dashboard</li>
                <li>Automated threat detection</li>
                <li>Compliance reporting and auditing</li>
              </ul>
            </div>
            <div className="solution-card">
              <h3>🤖 AI Data Protection</h3>
              <p>
                Protect AI-generated and AI-processed data. Ensure your AI tools
                don't inadvertently expose sensitive information.
              </p>
              <ul>
                <li>AI prompt monitoring and filtering</li>
                <li>Prevent data leaks through AI services</li>
                <li>Compliance with AI regulations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Zero Trust Section */}
      <section className="zero-trust">
        <div className="container">
          <h2>Built on Zero Trust Principles</h2>
          <p>
            In today's threat landscape, trust no one by default. Our solutions implement
            Zero Trust security architecture to verify every access request, regardless of source.
          </p>
          <div className="zero-trust-pillars">
            <div className="pillar">
              <h4>Verify Explicitly</h4>
              <p>Always authenticate and authorize based on all available data points</p>
            </div>
            <div className="pillar">
              <h4>Least Privilege Access</h4>
              <p>Limit user access with Just-In-Time and Just-Enough-Access principles</p>
            </div>
            <div className="pillar">
              <h4>Assume Breach</h4>
              <p>Minimize blast radius and segment access. Monitor continuously.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get Started Today</h2>
          <p className="section-subtitle">
            Schedule a demo or contact us to learn how we can protect your organization
          </p>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleInputChange}
                required
              />
              <select
                name="industry"
                value={formData.industry}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Industry</option>
                <option value="financial">Financial Services</option>
                <option value="healthcare">Healthcare</option>
                <option value="legal">Legal Services</option>
                <option value="nonprofit">Non-Profit</option>
                <option value="other">Other</option>
              </select>
            </div>
            <textarea
              name="message"
              placeholder="Tell us about your data security needs..."
              value={formData.message}
              onChange={handleInputChange}
              rows="5"
              required
            ></textarea>
            <button type="submit" className="submit-button">Send Message</button>
            {formStatus && <p className="form-status">{formStatus}</p>}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Non-Profit-365</h4>
              <p>Enterprise data security solutions powered by Microsoft Purview</p>
            </div>
            <div className="footer-section">
              <h4>Solutions</h4>
              <ul>
                <li><a href="#solutions">Data Classification</a></li>
                <li><a href="#solutions">Data Loss Prevention</a></li>
                <li><a href="#solutions">Insider Risk Management</a></li>
                <li><a href="#solutions">Security Monitoring</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Industries</h4>
              <ul>
                <li><a href="#industries">Financial Services</a></li>
                <li><a href="#industries">Healthcare</a></li>
                <li><a href="#industries">Legal Services</a></li>
                <li><a href="#industries">Non-Profit</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <ul>
                <li>Email: info@nonprofit365.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>24/7 Support Available</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Non-Profit-365. All rights reserved. | Microsoft Purview Partner</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
