// const express = require("express");
// const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));
// const cors = require("cors");

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(express.json()); // Support for parsing JSON request bodies

// // Proxy route to fetch data from the target API
// app.get("/api", async (req, res) => {
//   const googleAppsScriptURL =
//     "https://script.google.com/macros/s/AKfycbwWisiCFwY1vRXyf0go4nRQp7zdfVY5WNLwQBsT6yHyUw1Sd_PT4QES2s8JKXu4ra7r6g/exec";

//   try {
//     console.log("Fetching data from Google Apps Script...");
//     const response = await fetch(googleAppsScriptURL);

//     if (!response.ok) {
//       console.error(`Failed to fetch. Status: ${response.status}, Text: ${response.statusText}`);
//       return res.status(response.status).json({ error: "Failed to fetch data from Google Apps Script." });
//     }

//     const data = await response.json();
//     console.log("Data fetched successfully:", data);

//     res.json(data);
//   } catch (error) {
//     console.error("Error occurred while fetching data:", error);
//     res.status(500).json({ error: "Internal Server Error. Unable to fetch data." });
//   }
// });


// app.post("/api", async (req, res) => {
//     const googleAppsScriptURL =
//       "https://script.google.com/macros/s/AKfycbyIhVexHyAsJD8W_TOaR8QXXe4zN_ULSxuKc9FKSXAaibQbXYE8Dd9E1jjhkaslD-MnQQ/exec";
  
//     try {
//       const response = await fetch(googleAppsScriptURL + "?action=bookHomestay", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(req.body),
//       });
  
//       if (!response.ok) {
//         return res.status(response.status).json({ error: "Failed to book homestay." });
//       }
  
//       const data = await response.json();
//       res.json(data);
//     } catch (error) {
//       console.error("Error during booking:", error);
//       res.status(500).json({ error: "Internal Server Error." });
//     }
//   });

//   const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function (app) {
//   app.use(
//     '/send-email', // The route your frontend uses
//     createProxyMiddleware({
//       target: 'http://localhost:5000', // Backend server where the email logic is implemented
//       changeOrigin: true,
//     })
//   );
// };
  
// // Start the server
// app.listen(PORT, () => {
//   console.log(`Proxy server running at http://localhost:${PORT}`);
// });
const express = require("express");
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));
const cors = require("cors");
const nodemailer = require("nodemailer"); // For sending emails

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Support for parsing JSON request bodies

// Proxy route to fetch data from the target API
app.get("/api", async (req, res) => {
  const googleAppsScriptURL =
    "https://script.google.com/macros/s/AKfycbwWisiCFwY1vRXyf0go4nRQp7zdfVY5WNLwQBsT6yHyUw1Sd_PT4QES2s8JKXu4ra7r6g/exec";

  try {
    console.log("Fetching data from Google Apps Script...");
    const response = await fetch(googleAppsScriptURL);

    if (!response.ok) {
      console.error(`Failed to fetch. Status: ${response.status}, Text: ${response.statusText}`);
      return res.status(response.status).json({ error: "Failed to fetch data from Google Apps Script." });
    }

    const data = await response.json();
    console.log("Data fetched successfully:", data);

    res.json(data);
  } catch (error) {
    console.error("Error occurred while fetching data:", error);
    res.status(500).json({ error: "Internal Server Error. Unable to fetch data." });
  }
});

// Route for posting data to Google Apps Script
app.post("/api", async (req, res) => {
  const googleAppsScriptURL =
    "https://script.google.com/macros/s/AKfycbyIhVexHyAsJD8W_TOaR8QXXe4zN_ULSxuKc9FKSXAaibQbXYE8Dd9E1jjhkaslD-MnQQ/exec";

  try {
    const response = await fetch(googleAppsScriptURL + "?action=bookHomestay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to book homestay." });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error during booking:", error);
    res.status(500).json({ error: "Internal Server Error." });
  }
});

// Route to send email
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // Configure nodemailer transport
  const transporter = nodemailer.createTransport({
    service: "Gmail", // Use your email service
    auth: {
      user: "nikitaverma23@navgurukul.org", // Replace with your email
      pass: "cenw ouby jope zslj", // Replace with your email password
    },
  });

  const mailOptions = {
    from: "nikitaverma23@navgurukul.org", // Replace with your email
    to: email, // The recipient's email address
    subject: `Message from ${name}`,
    text: `You have received a message from ${name}:\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${email}`);
    res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});
