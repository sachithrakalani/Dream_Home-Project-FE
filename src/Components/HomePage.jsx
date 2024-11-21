import DreamHomeImage from "/Users/sachithrakalani/Workspace/React/Dream-Home-Project/dreamHomeReactProject/src/accets/images/DreamHomeImage.jpeg";

export default function HomePage(){
    return(
        <div>
            <h1>Find Your Dream Home</h1>
            <h1>Real Estate</h1>
            <button>Home</button>
            <button>Add Property</button>
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
            <button >
                <i className="fas fa-search-plus"></i> 
            </button>
            <button>
                <i className="fas fa-search"></i>  Search
            </button>
        </div>
    )
}
