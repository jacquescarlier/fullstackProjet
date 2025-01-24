import Button from "../components/button/button"
import { useState } from "react";


const Home = () => {
    const [isToggle, setIsToggle] = useState(false);
    const toggleForm = () => {
        setIsToggle((current) => !current);
      };


    return (
        <>
            <div>
                <h1 className="m-4 p-2 text-gray-500 bg-pink-400 hover:bg-sky-700 hover:text-amber-400">THome page</h1>
                <p className="m-4 p-4 bg-red-500">essai de class</p>
                <p className="text-4xl text-black-500 px-4 sm:px-8 py-2 sm:py-3 "> oups le gars </p>
<Button 
classButton = "ml-10 mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full"
type= "button"
title="Load"
onClick={(e) => {
    e.preventDefault();
    toggleForm();
  }}
/>
                
            </div>
        </>
    )
};

export default Home;