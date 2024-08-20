const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

// Initialize Stripe with a key (split into multiple lines for readability)
const stripeKey = "sk_test_51PhpQTAFD8IBeyVhNjqpEomPLmPuc5CbSaSOLNe4b42JmP33z4XZiseWmw18dmc" +
                  "XBpAUlguy6Dl7DvXu9L1m4qws00JpWTtMEY";
const stripe = require("stripe")(stripeKey);

const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// Test route
app.get("/", (request, response) => response.status(200).send("hello world"));

// Payment route
app.post("/payments/create", async (request, response) => {
  const total = parseInt(request.query.total, 10); // Convert to integer

  console.log("Payment request received for this amount >>> ", total);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // Subunits of the currency (e.g., cents)
      currency: "usd",
    });

    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    response.status(500).send({
      error: error.message,
    });
  }
});

// Expose Express API as a single Cloud Function
exports.api = functions.https.onRequest(app);
