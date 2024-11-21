import DreamHomeImage from "/Users/sachithrakalani/Workspace/React/Dream-Home-Project/dreamHomeReactProject/src/accets/images/DreamHomeImage.jpeg";
import styles from "./homepage.module.css";
import bodystyles from "./homepagebody.module.css";

export default function HomePage() {
  return (
    <div>
      <div className={styles.title}>
        <h1>Find Your Dream Home</h1>
      </div>
      <div className={bodystyles.header}>
        <h1>Real Estate</h1>
        <button>Home</button>
        <button>Add Property</button>
      </div>

      <img src={DreamHomeImage} alt="Dream Home" />
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
        <option value="Colombo">Colombo</option>
        <option value="Kandy">Kandy</option>
        <option value="Galle">Galle</option>
      </select>
      <select>
        <option value="">All Types: </option>
        <option value="Colombo">Colombo</option>
        <option value="Kandy">Kandy</option>
        <option value="Galle">Galle</option>
      </select>
      <button>
        <i className="fas fa-search-plus"></i>
      </button>
      <button>
        <i className="fas fa-search"></i> Search
      </button>
    </div>
  );
}
