import React from 'react';
import './css/Bids.css'

function Bids() {

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center" }}>Add a Product</h2>
      <form>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="name" style={{ display: "block" }}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            style={{ width: "100%", padding: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="price" style={{ display: "block" }}>
            Price:
          </label>
          <input
            type="text"
            id="price"
            style={{ width: "100%", padding: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="description" style={{ display: "block" }}>
            Description:
          </label>
          <textarea
            id="description"
            style={{ width: "100%", padding: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="time-input" style={{ display: "block" }}>
            Bid Starts at:
          </label>
          <input type="time" id="time-input" name="time"></input>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="file" style={{ display: "block" }}>
            Choose a file:
          </label>
          <input
            type="file"
            id="file"
            accept=".jpg,.jpeg,.png"
            style={{ width: "100%", padding: "5px" }}
          />
        </div>
        <button
          type="submit"
          style={{ display: "block", width: "100%", padding: "10px" }}
        >
          Submit
        </button>
      </form>
    </div>
);
}

export default Bids;
