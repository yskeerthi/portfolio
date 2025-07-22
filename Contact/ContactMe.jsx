import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const formRef = useRef();
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(formRef.current);
    const userEmail = formData.get("email");
    const userName = formData.get("name");
    const userMessage = formData.get("message");

    try {
      // First email: Send to YOU (Admin)
      await emailjs.sendForm(
        "service_2w7lgm7", // Your EmailJS Service ID
        "template_xrpgz6a", // Your Admin Email Template ID
        formRef.current,
        "HpuutNFFThXdAt8P5" // Your EmailJS Public Key
      );

      console.log("Admin email sent successfully");

      // Second email: Send Thank You Email to the User
      await emailjs.send(
        "service_2w7lgm7", // Your EmailJS Service ID
        "template_p2ayaet", // Thank You Email Template ID
        {
          to_email: userEmail,
          user_name: userName,
          user_message: userMessage,
        },
        "HpuutNFFThXdAt8P5"
      );

      console.log("Thank you email sent successfully");

      setIsSent(true);
      setError("");
      formRef.current.reset(); // Reset form after submission

      // Hide success message after 2 seconds
      setTimeout(() => setIsSent(false), 2000);
    } catch (err) {
      console.error("Email sending error:", err);
      setError("Failed to send email. Please try again.");

      // Hide error message after 2 seconds
      setTimeout(() => setError(""), 2000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-form-wrap">
      <form ref={formRef} onSubmit={sendEmail}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-grp">
              <input type="text" name="name" placeholder="Name" required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-grp">
              <input type="email" name="email" placeholder="Email" required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-grp">
              <input type="text" name="phone" placeholder="Your Number" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-grp">
              <input type="text" name="subject" placeholder="Subject" required />
            </div>
          </div>
        </div>
        <div className="form-grp">
          <textarea
            name="message"
            placeholder="Write your message here"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn" disabled={loading}>
          {loading ? "Sending..." : "Submit Now"}
        </button>

        {isSent && <p className="success-message">Message sent successfully! A thank-you email has been sent to your email.</p>}
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default ContactMe;
