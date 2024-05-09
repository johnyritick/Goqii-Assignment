import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate("../dashboard")
    }
    return (
        <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-blue-400 to-purple-500">
            <div className="w-6/12 p-8 bg-white bg-opacity-90 shadow-lg rounded-lg flex flex-col justify-center items-center">
                <h1 className="text-[44px] font-semibold text-gray-800 mb-12">Welcome to Explore</h1>
                <button onClick={handleOnClick} className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 focus:outline-none">
                    Go to Dashboard
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Home;
