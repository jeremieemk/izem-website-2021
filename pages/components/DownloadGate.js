import { useState } from "react";
import axios from "axios";

export default function DownloadGate() {
  const [formVisible, setFormVisible] = useState(false);
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: "",
        email: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/xknkjojq",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  function showForm() {
    setFormVisible(true);
  }
  return (
    <div className="mt-4">
      <div className="flex cursor-pointer" onClick={showForm}>
        <img className="h-4 mr-2" src="/img/download.png" alt="listen-icon" />
        <h1>Download the track</h1>
      </div>
      {formVisible && (
        <form onSubmit={handleOnSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            onChange={handleOnChange}
            required
            value={inputs.message}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="_replyto"
            onChange={handleOnChange}
            required
            value={inputs.email}
          />
          <button type="submit" disabled={status.submitting}>
            {!status.submitting
              ? !status.submitted
                ? "Send"
                : "Sent"
              : "Sending..."}
          </button>
        </form>
      )}

      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </div>
  );
}
