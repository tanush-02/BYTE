import React, { useEffect, useState, useRef } from "react";
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

export default function() {
  const initialCrops = [
    { name: "Wheat", price: 2200 },
    { name: "Rice", price: 3100 },
    { name: "Maize", price: 1800 },
    { name: "Cotton", price: 5500 },
    { name: "Sugarcane", price: 3000 },
    { name: "Tomato", price: 6000 },
    { name: "Potato", price: 4500 },
    { name: "Onion", price: 3000 },
    { name: "Chili", price: 12000 },
    { name: "Coriander", price: 8000 }
  ];

  const [crops, setCrops] = useState(initialCrops);
  const [selectedCrop, setSelectedCrop] = useState("Cotton");
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  // Simulate live price changes
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
  <br></br>

  // Update chart whenever prices or selected crop change
  useEffect(() => {
    const cropData = crops.find(c => c.name === selectedCrop);
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");

    // Destroy previous chart
    if (chartInstance.current) chartInstance.current.destroy();

    // Simple simulated 10-day history
    const history = Array.from({ length: 10 }, (_, i) => ({
      date: `Day ${i+1}`,
      price: cropData.price + (Math.random() * 100 - 50)
    }));

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: history.map(h => h.date),
        datasets: [{
          label: `${selectedCrop} Price`,
          data: history.map(h => h.price),
          borderColor: "green",
          fill: false,
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: true } },
        scales: { y: { beginAtZero: false } }
      }
    });
  }, [crops, selectedCrop]);

  return (
    <div style={{ width: "80%", margin: "40px auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2e7d32" }}>Live Crop Prices</h1>

      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px", boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}>
        <thead>
          <tr style={{ backgroundColor: "#2e7d32", color: "white" }}>
            <th style={{ padding: "12px", border: "1px solid #ddd" }}>Crop</th>
            <th style={{ padding: "12px", border: "1px solid #ddd" }}>Price (₹/quintal)</th>
          </tr>
        </thead>
        <tbody>
          {crops.map((crop, idx) => (
            <tr
              key={idx}
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedCrop(crop.name)}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = "#e8f5e9"}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = "white"}
            >
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>{crop.name}</td>
              <td style={{ padding: "12px", border: "1px solid #ddd", fontWeight: "bold", color: "#2e7d32" }}>
                ₹ {crop.price.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{ marginTop: "40px", color: "#2e7d32" }}>Price Trend for {selectedCrop}</h2>
      <canvas ref={chartRef} width="600" height="300"></canvas>
    </div>
  );
}
