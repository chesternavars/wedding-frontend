import { useState } from "react";
import axios from "axios";
import Album from "./Album";

export default function App() {
  const [files, setFiles] = useState([]);
  const [msg, setMsg] = useState("");
  const [page, setPage] = useState("home");
  const [category, setCategory] = useState("");

  const categories = [
    "Bride laughing genuinely",
    "Groom fixing his suit/tie",
    "Parents getting emotional",
    "First dance spin",
    "A stolen kiss",
    "Group selfie with strangers",
    "A guest dancing like nobody’s watching"
  ];

  const uploadFiles = async () => {
    if (!files.length) {
      setMsg("Please select photos");
      return;
    }

    if (!category) {
      setMsg("Please select a category");
      return;
    }

    const formData = new FormData();

    Array.from(files).forEach((file) => {
      formData.append("files[]", file);
    });

    formData.append("category", category);

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );

      setMsg(res.data.message);
      setFiles([]);
      setCategory("");
    } catch (err) {
      console.log(err);
      setMsg("Upload failed ❌");
    }
  };

  if (page === "album") {
    return <Album onBack={() => setPage("home")} />;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/images/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px",
        position: "relative",
        color: "white"
      }}
    >
      {/* DARK OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(4px)"
        }}
      ></div>

      {/* CONTENT */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "420px" }}>

        {/* COUPLE IMAGE */}
        <img
          src="/images/sharahrolly.jpg"
          alt="couple"
          style={{
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid white",
            marginBottom: "15px"
          }}
        />

        {/* TITLE */}
        <h1
          style={{
            fontSize: "50px",
            fontFamily: "'Great Vibes', cursive",
            margin: "20px 0",
            lineHeight: "1.2",
            letterSpacing: "2px",
            textAlign: "center"
          }}
        >
          💍 Sharah & Rolly Wedding
        </h1>

        <p style={{ fontSize: "13px", color: "#ddd", marginBottom: "20px" }}>
          Share your memories with love ❤️
        </p>

        {/* UPLOAD CARD */}
        <div
          style={{
            background: "rgba(255,255,255,0.1)",
            padding: "20px",
            borderRadius: "15px",
            backdropFilter: "blur(10px)"
          }}
        >

          {/* CATEGORY SELECT */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{
              width: "100%",
    padding: "12px 15px",
    marginBottom: "15px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.3)",
    background: "rgba(255,255,255,0.1)",
    color: "white",
    fontSize: "14px",
    backdropFilter: "blur(8px)",
    outline: "none",
    cursor: "pointer"
            }}
          >
          <option value="" style={{ color: "black" }}>
    Select photo category
  </option>
            {categories.map((cat, i) => (
              <option key={i} value={cat} style={{ color: "black" }}>
                {cat}
              </option>
            ))}
          </select>

          {/* FILE INPUT */}
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => setFiles(e.target.files)}
            style={{ marginBottom: "15px", width: "100%" }}
          />

          {/* UPLOAD BUTTON */}
          <button
            onClick={uploadFiles}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "25px",
              border: "none",
              background: "#e11d48",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
              marginBottom: "10px"
            }}
          >
            📤 Upload Memories
          </button>

          {/* VIEW ALBUM */}
          <button
            onClick={() => setPage("album")}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "25px",
              border: "1px solid white",
              background: "transparent",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            🖼️ View Wedding Album
          </button>

          {/* MESSAGE */}
          {msg && (
            <p style={{ marginTop: "10px", fontSize: "12px", color: "#ccc" }}>
              {msg}
            </p>
          )}

        </div>

        <p style={{ marginTop: "20px", fontSize: "11px", color: "#aaa" }}>
          Made with ❤️ for forever love
        </p>

      </div>
    </div>
  );
}