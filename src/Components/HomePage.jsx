import React from "react";
import DreamHomeImage from "/Users/sachithrakalani/Workspace/React/Dream-Home-Project/dreamHomeReactProject/src/accets/images/DreamHomeImage.jpeg";
import styles from "./homepage.module.css";
import bodystyles from "./homepagebody.module.css";

export default function HomePage() {
  return (
    <div>
      <header>
        <div className={styles.title}>
          <h1>Find Your Dream Home</h1>
        </div>
        <div className={bodystyles.header}>
          <h1>Real Estate</h1>
          <div>
            <button>Home</button>
            <button>Add Property</button>
          </div>
        </div>
        <div>
          <img
            src={DreamHomeImage}
            alt="Dream Home"
            width="100%"
            height="450"
          />
          <div>
            <h1>Looking to Buy or Rent a Property?</h1>
            <h1>Find Your Dream Home</h1>
            <select>
              <option value="">All Main Locations: </option>
              <option value="Colombo">Colombo</option>
              <option value="Kandy">Kandy</option>
              <option value="Galle">Galle</option>
            </select>
            <select>
              <option value="">All Status: </option>
              <option value="For Sale">For Sale</option>
              <option value="For Rent">For Rent</option>
            </select>
            <select>
              <option value="">All Types: </option>
              <option value="Single Family">Single Family</option>
              <option value="Villa">Villa</option>
            </select>
            <button>
              <i className="fas fa-search-plus"></i>
            </button>
            <button>
              <i className="fas fa-search"></i> Search
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
