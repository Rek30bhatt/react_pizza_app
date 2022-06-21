import "./Contact.css";
import pizzaLeft from "../../Images/pizzaLeft.jpg";
function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${pizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter Full Name...."
            required
          ></input>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter Email...."
            required
          ></input>
          <label htmlFor="message">message</label>
          <textarea
            rows="6"
            placeholder="Enter Message...."
            name="message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
export default Contact;
