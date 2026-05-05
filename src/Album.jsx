export default function Album({ onBack }) {
  const folderId = "YOUR_FOLDER_ID";

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #111827, #1f2937, #3f2a36)",
        color: "white",
        textAlign: "center",
        padding: "30px"
      }}


      
    >

      <h1
        style={{
          fontSize: "54px",
          fontFamily: "'Great Vibes', cursive",
          color: "#e11d48",
          marginBottom: "5px"
        }}
      >
        💍 Wedding Album
      </h1>

      <p style={{ color: "#ccc", marginBottom: "20px" }}>
        Our beautiful memories together
      </p>

      {/* BACK BUTTON */}
      <button
        onClick={onBack}
        style={{
          padding: "10px 25px",
          borderRadius: "25px",
          border: "none",
          background: "#e11d48",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
          marginBottom: "20px"
        }}
      >
        ← Back to Home
      </button>

      {/* GALLERY */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)"
        }}
      >
        <iframe
          src={`https://drive.google.com/embeddedfolderview?id=${folderId}#grid`}
          style={{
            width: "100%",
            height: "650px",
            border: "none"
          }}
        ></iframe>
      </div>

    </div>
  );
}