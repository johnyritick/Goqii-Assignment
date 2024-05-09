import React from "react";

const PageNotFound = () => {
    return <div className="flex flex-col items-center justify-center h-screen">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path
                fillRule="evenodd"
                d="M10 2C5.03 2 1 6.03 1 11s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm0-12a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-.707 4.293a1 1 0 0 0 1.414 1.414l2-2a1 1 0 1 0-1.414-1.414l-2 2zM11 9a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"
                clipRule="evenodd"
            />
        </svg>
        <p className="mt-4 text-lg text-gray-700">Sorry! Page not found.</p>
        <button
            onClick={() => window.location.replace('/')}
            className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
            Go back to Home
        </button>
    </div>
}

export default PageNotFound