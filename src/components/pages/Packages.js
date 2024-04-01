import { Link } from "react-router-dom";
import "../../App.css"; // Make sure the path to your CSS file is correct
import Properties from "../../Properties.json";
import React, { useState, useEffect } from "react";
import './Packages.css'
import { Button } from "../Button";
import Footer from "../Footer";

function Packages() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(Properties);
  }, []);

  return (
    <div className="packages-container">
      <h2>Properties</h2>
      <div className="properties-grid">
      
        {items.map((item) => (
          
          <div key={item.id} className="card">
            
            <img src={process.env.PUBLIC_URL + item.src} alt={item.heading} />
            <div className="card-content">
              <h2>{item.heading}</h2>
              <p><b>{item.location}</b></p>
              <p>{item.label}</p>
              <span className="price">{item.price}</span>
              <p>{item.details}</p>
              <Button to={item.path}buttonStyle="btn--outline"
                  buttonSize="btn--medium">More details</Button>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
    
  );
}

export default Packages;
