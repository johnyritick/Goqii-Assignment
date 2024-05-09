import React, { useEffect, useState } from "react";

interface user {
    name: string,
    password: string,
    email: string,
    dob: string
}

const styling = "w-full rounded-md text-base py-2 px-4 mb-4 focus:outline-none font-serif";
const CreateUser = (props: any) => {
    const [userData, setUserData] = useState<user>({ name: "", password: "", email: "", dob: "" })
    const [loader, setLoader] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const handleOnChange = (value: string, section: string) => {
        let tempData = { ...userData };
        tempData = {
            ...tempData,
            [section]: value
        }
        setUserData(tempData)
    }

    const validateDetails = () => {
        const { name, email, password, dob } = userData
        let flag: boolean = true;
        let error: string = ""
        if (name.trim().length === 0) {
            flag = false;
            error = "Name is Missing or Invalid"
        } else if (email.trim().length === 0) {
            flag = false;
            error = "Email is Missing or Invalid"
        } else if (password.trim().length === 0) {
            flag = false;
            error = "Password is Missing or Invalid"
        } else if (dob.trim().length === 0) {
            flag = false;
            error = "Date of Birth is Missing or Invalid"
        }
        return { "success": flag, "error": error }
    }

    const createUserAction = async () => {
        const { success, error } = validateDetails();
        if (success) {
            setLoader(true);
            await fetch("api/create").then(() => {
                setLoader(false)
            })
        } else {
            setError(error)
        }

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
        {error !== "" && <div className="w-full bg-red-200 py-2 mb-2">
            <p className="text-xl text-center">{error}</p>
        </div>}

        <p className="text-base mb-2">Name</p>
        <input
            value={userData.name}
            placeholder="Enter Name"
            className={styling}
            onChange={(event) => {
                handleOnChange(event.target.value, "name");
                if (error !== "") { setError("") }
            }} />

        <p className="text-base mb-2">Email</p>
        <input
            value={userData.email}
            placeholder="Enter Email"
            className={styling}
            onChange={(event) => {
                handleOnChange(event.target.value, "email");
            }} />

        <p className="text-base mb-2">Password</p>
        <input
            value={userData.password}
            placeholder="Enter Password"
            className={styling}
            onChange={(event) => {
                handleOnChange(event.target.value, "password");
            }} />

        <p className="text-base mb-2">Date of Birth</p>
        <input
            value={userData.dob}
            placeholder="Enter Dob"
            type="date"
            max="01.01.1970"
            max-length="8"
            className={styling}
            onChange={(event) => {
                handleOnChange(event.target.value, "dob");
            }} />

        <div className="">
            <button
                onClick={props && props.hasOwnProperty("data") ? updateUserAction : createUserAction}
                disabled={loader}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 focus:outline-none">
                {props && props.hasOwnProperty("data") ? "Update" : "Create"}
            </button>
        </div>
    </div>
}

export default React.memo(CreateUser)