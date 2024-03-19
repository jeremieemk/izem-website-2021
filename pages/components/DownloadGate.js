import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function DownloadGate(props) {
  console.log("uid", props.uid);
  const [formVisible, setFormVisible] = useState(false);
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    link: props.link,
    uid: props.uid,
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
    console.log("inputs", inputs);
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
          "🧸 I just sent the link to your email. Check the spam folder, just in case. If it didn't work, feel to email me at jeremie@elis-records.com. Thanks."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
    axios({
      method: "POST",
      url: "/api/download",
      data: inputs,
    }).then((res) => {
      console.log("details sent");
      if (res.status === 200) {
        console.log("succeeded!");
      }
    });
  };
  function showForm() {
    setFormVisible(true);
  }
  return (
    <div className="mt-4 ">
      <div className="flex cursor-pointer" onClick={showForm}>
        <img className="h-4 mr-2" src="/img/download.png" alt="listen-icon" />
        <h1>Download the track</h1>
      </div>

      {formVisible && (
        <motion.div
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0 }}
        >
          <form onSubmit={handleOnSubmit}>
            <label htmlFor="name">Name</label>
            <input
              className="rounded text-black"
              id="name"
              name="name"
              onChange={handleOnChange}
              required
              value={inputs.message}
            />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="rounded text-black"
              type="email"
              name="_replyto"
              onChange={handleOnChange}
              required
              value={inputs.email}
            />
            <button className="bg-white rounded text-black " type="submit" disabled={status.submitting}>
              {!status.submitting
                ? !status.submitted
                  ? "Send me the link"
                  : "Sent"
                : "Sending..."}
            </button>
          </form>
        </motion.div>
      )}

      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </div>
  );
}
