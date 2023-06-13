import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="icons">
        <a href={`${process.env.REACT_APP_LINKEDIN_URL}`}>
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
        </a>
        <a href={`${process.env.REACT_APP_GITHUB_URL}`}>
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
        </a>
        <a href="./Facundo Boy.pdf" download>
          <button className="icon-btn">
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="50" fill="#007bff" />
              <text
                x="50"
                y="60"
                fill="#ffffff"
                fontSize="50"
                fontWeight="bold"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                CV
              </text>
            </svg>
          </button>
        </a>
      </div>
      <div className="contacts-btn">
        <a href={`${process.env.REACT_APP_LINKEDIN_URL}`}>
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
        </a>
        <a href={`${process.env.REACT_APP_GITHUB_URL}`}>
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
        </a>
        <a href="./Facundo Boy.pdf" download>
          <button className="download-button">
            <div className="docs">
              <svg
                className="css-i6dzq1"
                strokeLinejoin="round"
                strokeLinecap="round"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                height="20"
                width="20"
                viewBox="0 0 24 24"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line y2="13" x2="8" y1="13" x1="16"></line>
                <line y2="17" x2="8" y1="17" x1="16"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>{" "}
              CV
            </div>
            <div className="download" href="./cv.pdf" download>
              <svg
                className="css-i6dzq1"
                strokeLinejoin="round"
                strokeLinecap="round"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                height="24"
                width="24"
                viewBox="0 0 24 24"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line y2="3" x2="12" y1="15" x1="12"></line>
              </svg>
            </div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
