import React, { useEffect, useState } from "react";

interface user {
    name: string,
    password: string,
    email: string,
    dob: string
}

const styling = "w-full rounded-md text-xl py-2 px-4 mb-4 focus:outline-none font-serif";
const CreateUser = (props: any) => {
    const [userData, setUserData] = useState<user>({ name: "", password: "", email: "", dob: "" })
    const [loader, setLoader] = useState<boolean>(false);

    const handleOnChange = (value: string, section: string) => {
        let tempData = { ...userData };
        tempData = {
            ...tempData,
            [section]: value
        }
        setUserData(tempData)
    }

    const createUserAction = async () => {
        setLoader(true);
        await fetch("api/create").then(() => {
            setLoader(false)
        })
    }

    const updateUserAction = async () => {
        setLoader(true);
        await fetch("api/create").then(() => {
            setLoader(false)
        })
    }

    useEffect(() => {
        if (props && props.hasOwnProperty("data")) {
            setUserData({ ...props.data })
        }
    }, [])

    return <div className="w-7/12 p-8 bg-white bg-opacity-90 shadow-lg rounded-lg">
        <p className="text-base mb-2">Name</p>
        <input value={userData.name} placeholder="Enter Name" className={styling} onChange={(event) => {
            handleOnChange(event.target.value, "name");
        }} />
        <p className="text-base mb-2">Email</p>
        <input value={userData.email} placeholder="Enter Email" className={styling} onChange={(event) => {
            handleOnChange(event.target.value, "email");
        }} />
        <p className="text-base mb-2">Password</p>
        <input value={userData.password} placeholder="Enter Password" className={styling} onChange={(event) => {
            handleOnChange(event.target.value, "password");
        }} />
        <p className="text-base mb-2">Date of Birth</p>
        <input value={userData.dob} placeholder="Enter Dob" type="date" max="01.01.1970" max-length="8" className={styling} onChange={(event) => {
            console.log("er", event);

            handleOnChange(event.target.value, "dob");
        }} />

        <div className="">
            <button
                onClick={props && props.hasOwnProperty("data") ? updateUserAction : createUserAction}
                disabled={loader}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 focus:outline-none">
                {props && props.hasOwnProperty("data") ? "Update" : "Create"}
            </button>
        </div>
    </div>
}

export default React.memo(CreateUser)