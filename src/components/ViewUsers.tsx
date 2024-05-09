import React, { useCallback, useEffect, useState } from "react";
import { DeleteIcon, EditIcon } from "./assets/Icon";
import { Skeleton, prepareHeaders } from "./Helper";
import CreateUser from "./CreateUser";

interface User {
    name: string;
    password: string;
    email: string;
    dob: string;
}

const FallbackComponent: React.FC = () => {
    return (
        <div className="w-full bg-white shadow-md flex flex-col p-8 items-center justify-center h-full min-h-[200px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-ban" viewBox="0 0 16 16">
                    <path d="M15 8a6.97 6.97 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 15 8M2.71 12.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0" />
                </svg>
                <p className="text-gray-500 text-center">No user details found.</p>
        </div>
    );
}

const ViewUsers: React.FC = () => {
    const [data, setData] = useState<User[]>([]);
    const [loader, setLoader] = useState<boolean>(false);
    const [modalIsOpen, setModalIsOpen] = useState<number>(-1);
    const [editItem, setEditItem] = useState<User>()
    const [error, setError] = useState<string>("");
    const [successToast, setSuccessToast] = useState<string>("");

    useEffect(() => {
        getUsersData();
    }, []);

    useEffect(() => {
        if (successToast !== "") {
            setTimeout(() => {
                setSuccessToast("")
            }, 5000)
        }
    }, [successToast])

    useEffect(() => {
        if (error !== "") {
            setTimeout(() => {
                setError("")
            }, 5000)
        }
    }, [error])

    const getUsersData = async () => {
        setLoader(true)
        await fetch("/api/user/all", { method: "GET" }).then((res) => res.json()).then((response: any) => {
            if (response.success) {
                if (response.users.length > 0) {
                    setData(response.users)
                }

            } else {
                setError("User Details could not be fetched");
            }
            setLoader(false)
        })
    }
    const handleEdit = async (item: any) => {
        setEditItem(() => { return item });
    }

    const deleteItem = async () => {
        let userDetail = data[modalIsOpen]
        let params = { email: userDetail.email }
        await fetch("/api/user/delete", prepareHeaders("POST", params)).then((res) => res.json()).then((response: any) => {
            if (response.success) {
                setSuccessToast("User Deleted Successfully");
            } else {
                setError("User could not be deleted");
            }
            setModalIsOpen(-1)
        })
    }

    const closeModal = useCallback(() => {
        setModalIsOpen(-1)
    }, [])

    return (
        (editItem && Object.keys(editItem).length > 0) ? <CreateUser data={editItem} /> :
            <div className="w-full md:w-7/12 p-8 bg-white bg-opacity-90 shadow-lg rounded-lg max-h-[60%] overflow-hidden">
                {error !== "" && <div className="w-full bg-red-200 py-2 mb-2">
                    <p className="text-xl text-center">{error}</p>
                </div>}

                {successToast !== "" && <div className="w-full bg-green-200 py-2 mb-2">
                    <p className="text-xl text-center">{successToast}</p>
                </div>}

                <div className="table-container">
                    <table className="w-full">
                        <thead className="bg-blue-500 text-white">
                            <tr className="text-left">
                                <th className="px-4 py-3 text-lg font-semibold text-black">S.No</th>
                                <th className="px-4 py-3 text-lg font-semibold text-black">Name</th>
                                <th className="px-4 py-3 text-lg font-semibold text-black">Email</th>
                                <th className="px-4 py-3 text-lg font-semibold text-black">Password</th>
                                <th className="px-4 py-3 text-lg font-semibold text-black">DOB</th>
                                <th className="px-4 py-3 text-lg font-semibold text-black">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loader ? <Skeleton /> : <>{data.length > 0 ? data.map((item, index) => (
                                <tr key={index} className={index % 2 === 0 ? "bg-gray-200" : "bg-white"}>
                                    <td className="px-4 py-3">{index + 1}</td>
                                    <td className="px-4 py-3">{item.name}</td>
                                    <td className="px-4 py-3">{item.email}</td>
                                    <td className="px-4 py-3">{item.password}</td>
                                    <td className="px-4 py-3">{item.dob}</td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center space-x-2">
                                            <button onClick={() => handleEdit(item)} className="text-blue-500 hover:text-blue-700 focus:outline-none">
                                                <EditIcon />
                                            </button>
                                            <button onClick={() => setModalIsOpen(index)} className="text-red-500 hover:text-red-700 focus:outline-none">
                                                <DeleteIcon />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )) : <tr>
                                <td colSpan={6}>

                                <FallbackComponent />
                                </td>
                            </tr>
                            }
                            </>}
                        </tbody>
                    </table>
                </div>
                {modalIsOpen !== -1 ? <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={closeModal}></div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-1/2 md:w-1/3 lg:w-1/4">
                            <div className="p-4">
                                <h1 className="text-lg font-semibold mb-2 text-gray-800">Delete Item</h1>
                                <p className="mt-2 mb-6 text-gray-700">Are you sure you want to delete this user?</p>
                            </div>
                            <div className="bg-gray-100 px-4 py-2 sm:flex sm:flex-row-reverse flex flex-row justify-start items-center">
                                <button onClick={deleteItem} className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded sm:ml-3 sm:w-auto w-full focus:outline-none">
                                    Delete
                                </button>
                                <button onClick={closeModal} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded sm:w-auto w-full focus:outline-none">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div> : null}
            </div>
    );
}

export default ViewUsers;
