import DreamHomeImage from "/Users/sachithrakalani/Workspace/React/Dream-Home-Project/dreamHomeReactProject/src/accets/images/DreamHomeImage.jpeg";

export default function HomePage(){
    return(
        <div>
            <h1>Find Your Dream Home</h1>
            <h1>Real Estate</h1>
            <button>Home</button>
            <button>Add Property</button>
            <img src={DreamHomeImage} alt="Dream Home" />
        </div>
    )
}
