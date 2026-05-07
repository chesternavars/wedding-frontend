import { useState } from "react";

export default function Album({ onBack }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Bride laughing genuinely",
    "Groom fixing his suit/tie",
    "Parents getting emotional",
    "First dance spin",
    "A stolen kiss",
    "Group selfie with strangers",
    "A guest dancing like nobody’s watching"
  ];

  const images = [
    { url: "/images/img1.jpg", category: "Bride laughing genuinely" },
    { url: "/images/img2.jpg", category: "First dance spin" },
    { url: "/images/img3.jpg", category: "Parents getting emotional" },
    { url: "/images/img4.jpg", category: "A stolen kiss" }
  ];

  // FILTER BY CATEGORY
  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  const openImage = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#111827",
        color: "white",
        padding: "30px",
        textAlign: "center"
      }}
    >

      <h1 style={{ fontSize: "50px", fontFamily: "'Great Vibes', cursive" }}>
        💍 Wedding Album
      </h1>

      {/* BACK */}
      <button
        onClick={onBack}
        style={{
          padding: "10px 20px",
          borderRadius: "25px",
          background: "#e11d48",
          color: "white",
          border: "none",
          marginBottom: "20px"
        }}
      >
        ← Back
      </button>

      {/* CATEGORY FILTER */}
      <div style={{ marginBottom: "20px" }}>
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => {
              setSelectedCategory(cat);
              setSelectedIndex(null);
            }}
            style={{
              margin: "5px",
              padding: "8px 12px",
              borderRadius: "20px",
              border: "1px solid white",
              background: selectedCategory === cat ? "#e11d48" : "transparent",
              color: "white",
              cursor: "pointer",
              fontSize: "12px"
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "10px",
          maxWidth: "900px",
          margin: "auto"
        }}
      >
        {filteredImages.map((img, index) => (
          <img
            key={index}
            src={img.url}
            onClick={() => openImage(index)}
            style={{
              width: "100%",
              height: "150px",
              objectFit: "cover",
              borderRadius: "10px",
              cursor: "pointer"
            }}
          />
        ))}
      </div>

      {/* MODAL */}
      {selectedIndex !== null && filteredImages[selectedIndex] && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
          }}
        >

          <img
            src={filteredImages[selectedIndex].url}
            style={{
              maxWidth: "90%",
              maxHeight: "80vh",
              borderRadius: "10px"
            }}
          />

          <p style={{ marginTop: "10px", color: "#ccc" }}>
            {filteredImages[selectedIndex].category}
          </p>

          {/* CONTROLS */}
          <div style={{ marginTop: "20px" }}>

            <button onClick={prevImage} style={btnStyle}>◀</button>

            <button onClick={closeModal} style={closeStyle}>
              Close
            </button>

            <button onClick={nextImage} style={btnStyle}>▶</button>

          </div>
        </div>
      )}

    </div>
  );
}

const btnStyle = {
  padding: "10px 15px",
  margin: "0 10px",
  borderRadius: "50%",
  border: "none",
  background: "#e11d48",
  color: "white",
  fontSize: "20px",
  cursor: "pointer"
};

const closeStyle = {
  padding: "10px 20px",
  margin: "0 10px",
  borderRadius: "20px",
  border: "none",
  background: "gray",
  color: "white"
};