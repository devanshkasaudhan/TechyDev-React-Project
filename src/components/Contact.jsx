import React from "react";

export default function Contact() {
  return (
    <div className="Contact">
      <main>
        <h1>Contact Us</h1>
        <form action="get">
          <div>
            <label htmlFor="name">name</label>
            <input type="text" required placeholder="ABC" />
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input type="email" required placeholder="ABC@gmail.com" />
          </div>
          <div>
            <label htmlFor="Message">Message</label>
            <input
              type="text"
              required
              placeholder="Tell us about your query..."
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
}
