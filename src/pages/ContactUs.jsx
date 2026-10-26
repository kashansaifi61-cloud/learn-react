
function ContactUs() {
  return (
    <section className="page container">
      <h1>Contact Us</h1>

      <p>
        Have a question? Get in touch with our team.
      </p>

      <form className="contact-form">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            rows="5"
            required
          />
        </div>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default ContactUs;