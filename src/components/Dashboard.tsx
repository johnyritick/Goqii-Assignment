import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddIcon, ArrowIcon } from "./assets/Icon";
import ViewUsers from "./ViewUsers";
import CreateUser from "./CreateUser";

// const activeClassStyle = "px-6 py-3 bg-white text-blue-500 rounded-lg transition-colors duration-300 focus:outline-none"
// const buttonClass = "px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 focus:outline-none"

const Dashboard = () => {

    const [showViewUsers, setShowViewUsers] = useState<boolean>(true);

    const enableCreateUser = useCallback(() => {
        setShowViewUsers(false)
    }, [])

    const enableViewUser = useCallback(() => {
        setShowViewUsers(true)
    }, [])

    return (
        <div className="w-full h-screen flex flex-col justify-start items-center bg-gradient-to-br from-blue-400 to-purple-500">
            <div className="w-7/12 p-8 bg-white bg-opacity-90 shadow-lg rounded-lg my-8">
                <h1 className="text-[44px] font-semibold text-gray-800 mb-12 text-center">Choose Actions</h1>
                <div className="flex justify-end">
                    {!showViewUsers ? <button onClick={enableViewUser} className="flex flex-row px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 focus:outline-none">
                        View Users
                        {<ArrowIcon />}
                    </button>
                        :
                        <button onClick={enableCreateUser} className="flex flex-row px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 focus:outline-none">
                            Create New User
                            {<AddIcon />}
                        </button>}
                </div>
            </div>

            {showViewUsers ? <ViewUsers /> : <CreateUser />}
        </div>
    );
}

export default React.memo(Dashboard);
