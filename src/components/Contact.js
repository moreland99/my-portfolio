import React from "react";

const Contact = () => {
  return (
    <div className="bg-primary text-secondary py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
        <form
          action="https://formspree.io/f/xvojveon" // Replace with your Formspree URL
          method="POST"
          className="max-w-lg mx-auto"
        >
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 rounded bg-secondary text-primary"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              name="_replyto"
              className="w-full p-2 rounded bg-secondary text-primary"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Message</label>
            <textarea
              name="message"
              className="w-full p-2 rounded bg-secondary text-primary"
              rows="5"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-accent text-white px-4 py-2 rounded hover:bg-white hover:text-accent transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
