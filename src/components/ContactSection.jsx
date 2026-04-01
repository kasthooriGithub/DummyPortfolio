import React, { useState } from 'react';

const contactInfo = [
  { icon: 'bi-envelope', label: 'Email', value: 'kasthoorikaneshalingam@gmail.com', href: 'kasthoorikaneshalingam@gmail.com' },
  // { icon: 'bi-linkedin', label: 'LinkedIn', value: 'linkedin.com/in/developer', href: 'https://linkedin.com' },
  { icon: 'bi-github', label: 'GitHub', value: 'github.com/kasthooriGithub', href: 'https://github.com/kasthooriGithub' },
  
];

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setShowToast(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-5">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold">
            Get In <span className="hero-gradient-text">Touch</span>
          </h2>
          <p className="opacity-50 mt-2">
            Have a project in mind? Let's discuss how we can work together.
          </p>
        </div>

        
        <div className="row g-5 align-items-stretch">
          
          <div className="col-lg-5 d-flex flex-column">
            <h3 className="h4 fw-bold mb-4">Contact Information</h3>

            <div className="row g-3">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="col-12">
                  {/* same padding feel as right side */}
                  <div className="card-glass p-4 border-0">
                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="icon-box bg-dark text-primary rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: '48px', height: '48px', minWidth: '48px' }}
                      >
                        <i className={`bi ${info.icon} fs-5`}></i>
                      </div>

                      <div className="info-text overflow-hidden">
                        <small className="d-block opacity-50">{info.label}</small>

                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-light text-decoration-none text-truncate d-block"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-light d-block text-truncate">{info.value}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/*  Right side: make card full height to match left side */}
          <div className="col-lg-7">
            <div className="card-glass p-4 border-0 h-100">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label small opacity-100">First Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control form-control-dark"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label small opacity-100">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-dark"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label small opacity-100">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control form-control-dark"
                      placeholder="How can I help?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label small opacity-100">Message</label>
                    <textarea
                      name="message"
                      className="form-control form-control-dark"
                      style={{ minHeight: '150px' }}
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <div className="col-12 text-end">
                    <button type="submit" className="btn btn-primary px-5 py-3" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="spinner-border spinner-border-sm me-2"></span>
                      ) : (
                        <i className="bi bi-send me-2"></i>
                      )}
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification Simulation */}
      {showToast && (
        <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1100 }}>
          <div className="bg-glass border border-primary p-3 rounded shadow-lg animate-fade-in">
            <div className="d-flex align-items-center gap-2">
              <i className="bi bi-check-circle-fill text-primary"></i>
              <div className="text-light">Message sent successfully!</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;
