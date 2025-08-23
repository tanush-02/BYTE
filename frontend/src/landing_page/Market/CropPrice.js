import React, { useEffect, useState } from "react";

export default function CropPrices() {
  // Initial crop data
  const initialCrops = [
    { name: "Wheat", price: 2200 },
    { name: "Rice", price: 3100 },
    { name: "Maize", price: 1800 },
    { name: "Cotton", price: 5500 },
    { name: "Sugarcane", price: 3000 },
    { name: "Tomato", price: 25 },
    { name: "Potato", price: 18 },
    { name: "Onion", price: 30 },
    { name: "Chili", price: 120 },
    { name: "Coriander", price: 80 }
  ];

  const [crops, setCrops] = useState(initialCrops);

  const tableStyle = {
    width: "80%",
    margin: "40px auto",
    borderCollapse: "collapse",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
  };

  const thStyle = {
    border: "1px solid #ddd",
    padding: "12px",
    backgroundColor: "#2e7d32",
    color: "white",
    textAlign: "left"
  };

  const tdStyle = {
    border: "1px solid #ddd",
    padding: "12px"
  };

  const headerStyle = {
    textAlign: "center",
    marginTop: "20px",
    fontSize: "32px",
    fontWeight: "bold",
    color: "#2e7d32"
  };

  const footerStyle = {
    textAlign: "center",
    marginTop: "10px",
    fontSize: "14px",
    color: "#555"
  };

  const rowHover = {
    transition: "background-color 0.2s",
    cursor: "default"
  };

  // Simulate live price changes every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCrops(prev =>
        prev.map(crop => ({
          ...crop,
          price: Math.max(1, crop.price + (Math.random() * 100 - 50))
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1 style={headerStyle}>Live Crop Prices</h1>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Crop</th>
            <th style={thStyle}>Price (₹/unit)</th>
          </tr>
        </thead>
        <tbody>
          {crops.map((crop, index) => (
            <tr
              key={index}
              style={{ ...rowHover }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = "#e8f5e9"}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = "white"}
            >
              <td style={tdStyle}>{crop.name}</td>
              <td style={{ ...tdStyle, fontWeight: "bold", color: "#2e7d32" }}>
                ₹ {crop.price.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={footerStyle}>Prices update automatically every few seconds</p>
    </div>
  );
}
