import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="icons">
        <button className="icon-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M21.6 0H2.4C1.1 0 0 1.1 0 2.4v19.2C0 22.9 1.1 24 2.4 24h19.2c1.3 0 2.4-1.1 2.4-2.4V2.4C24 1.1 22.9 0 21.6 0zM7.6 19.6H3.2V9.6h4.4v10zM5.4 8.8h-.1c-1 0-1.7-.7-1.7-1.5 0-.8.7-1.5 1.8-1.5 1 0 1.7.7 1.8 1.5.1.8-.5 1.5-1.8 1.5zM20.8 19.6h-4.4v-5.2c0-1.3-.5-2.2-1.8-2.2-1 0-1.6.7-1.9 1.4-.1.3-.1.7-.1 1.1v4.9h-4.4V9.6h4.2v1.2h.1c.6-.9 2-1.9 4.1-1.9 4.4 0 5.2 2.9 5.2 6.7v5.1z"
              fill="#0077B5"
            />
          </svg>
        </button>
        <button className="icon-btn">
          <svg
            viewBox="0 0 16 16"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#181717"
              d="M8 0C3.6 0 0 3.6 0 8c0 3.5 2.3 6.5 5.5 7.6.4.1.6-.2.6-.4v-1.4c-2.3.5-2.8-1.1-2.8-1.1-.4-1.1-1-1.4-1-1.4-.8-.6.1-.6.1-.6.9.1 1.4.9 1.4.9.8 1.4 2 1 2.5.8.1-.6.3-1 .5-1.2-1.8-.2-3.6-.9-3.6-3.9 0-.9.3-1.6.9-2.2-.1-.2-.4-1.1.1-2.3 0 0 .8-.2 2.4.9.7-.2 1.5-.3 2.3-.3s1.6.1 2.3.3c1.6-1.1 2.4-.9 2.4-.9.5 1.2.2 2.1.1 2.3.6 1.1.9 2.3.9 2.2 0 3-1.8 3.6-3.6 3.9.3.2.5.7.5 1.5v2.2c0 .2.2.5.6.4C13.8 14.5 16 11.5 16 8c0-4.4-3.6-8-8-8z"
            />
          </svg>
        </button>
      </div>
      <div className="contacts-btn">
        <button className="Linkedin">
          <p>Linkedin</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M21.6 0H2.4C1.1 0 0 1.1 0 2.4v19.2C0 22.9 1.1 24 2.4 24h19.2c1.3 0 2.4-1.1 2.4-2.4V2.4C24 1.1 22.9 0 21.6 0zM7.6 19.6H3.2V9.6h4.4v10zM5.4 8.8h-.1c-1 0-1.7-.7-1.7-1.5 0-.8.7-1.5 1.8-1.5 1 0 1.7.7 1.8 1.5.1.8-.5 1.5-1.8 1.5zM20.8 19.6h-4.4v-5.2c0-1.3-.5-2.2-1.8-2.2-1 0-1.6.7-1.9 1.4-.1.3-.1.7-.1 1.1v4.9h-4.4V9.6h4.2v1.2h.1c.6-.9 2-1.9 4.1-1.9 4.4 0 5.2 2.9 5.2 6.7v5.1z"
              fill="#0077B5"
            />
          </svg>
        </button>
        <button className="GitHub">
          <p>GitHub</p>
          <svg
            viewBox="0 0 16 16"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#181717"
              d="M8 0C3.6 0 0 3.6 0 8c0 3.5 2.3 6.5 5.5 7.6.4.1.6-.2.6-.4v-1.4c-2.3.5-2.8-1.1-2.8-1.1-.4-1.1-1-1.4-1-1.4-.8-.6.1-.6.1-.6.9.1 1.4.9 1.4.9.8 1.4 2 1 2.5.8.1-.6.3-1 .5-1.2-1.8-.2-3.6-.9-3.6-3.9 0-.9.3-1.6.9-2.2-.1-.2-.4-1.1.1-2.3 0 0 .8-.2 2.4.9.7-.2 1.5-.3 2.3-.3s1.6.1 2.3.3c1.6-1.1 2.4-.9 2.4-.9.5 1.2.2 2.1.1 2.3.6 1.1.9 2.3.9 2.2 0 3-1.8 3.6-3.6 3.9.3.2.5.7.5 1.5v2.2c0 .2.2.5.6.4C13.8 14.5 16 11.5 16 8c0-4.4-3.6-8-8-8z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Contact;
