import React, { useCallback, useEffect, useState } from "react";
import { DeleteIcon, EditIcon } from "./assets/Icon";
import { Skeleton, jsonData, prepareHeaders } from "./Helper";
import CreateUser from "./CreateUser";

interface User {
    name: string;
    password: string;
    email: string;
    dob: string;
}

const ViewUsers: React.FC = () => {
    const [data, setData] = useState<User[]>([]);
    const [loader, setLoader] = useState<boolean>(true);
    const [modalIsOpen, setModalIsOpen] = useState<number>(-1);
    const [editItem, setEditItem] = useState<User>()

    useEffect(() => {
        setData(jsonData);

        setTimeout(() => {
            setLoader(false)
        }, 200)
    }, []);

    const handleEdit = async (item: any) => {
        // await fetch("").then((items: any) => {

        // })
        setEditItem(() => { return item });

    }

    const deleteItem = async () => {
        let userDetail = data[modalIsOpen]
        let params = { ...userDetail }
        await fetch("", prepareHeaders("POST", params)).then((items: any) => {

        })
    }

    const closeModal = useCallback(() => {
        setModalIsOpen(-1)
    }, [])

    return (
        (editItem && Object.keys(editItem).length > 0) ? <CreateUser data={editItem} /> :
            <div className="w-7/12 p-8 bg-white bg-opacity-90 shadow-lg rounded-lg">

                <table className="w-full max-h-[400px] overflow-y-auto">
                    <thead>
                        <tr className="text-left">
                            <th className="px-4 py-2 text-xl">S.No</th>
                            <th className="px-4 py-2 text-xl">Name</th>
                            <th className="px-4 py-2 text-xl">Email</th>
                            <th className="px-4 py-2 text-xl">Password</th>
                            <th className="px-4 py-2 text-xl">DOB</th>
                            <th className="px-4 py-2 text-xl">Action</th>
                            {/* <th className="px-4 py-2">Delete</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {loader ? <Skeleton /> : data.map((item, index) => (
                            <tr key={index} className={index % 2 === 0 ? "bg-gray-300" : ""}>
                                <td className="px-4 py-2 text-base">{index + 1}</td>
                                <td className="px-4 py-2 text-base">{item.name}</td>
                                <td className="px-4 py-2 text-base">{item.email}</td>
                                <td className="px-4 py-2 text-base">{item.password}</td>
                                <td className="px-4 py-2 text-base">{item.dob}</td>
                                <td className="px-4 py-2 text-base">{
                                    <div className="flex flex-row justify-around">
                                        <span onClick={() => handleEdit(item)}><EditIcon /></span>
                                        <span onClick={() => setModalIsOpen(index)}><DeleteIcon /></span>
                                    </div>
                                }</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/**Modal component starts here */}
                {modalIsOpen !== -1 ? <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={closeModal}></div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-1/2 md:w-1/3 lg:w-1/4">
                            <div className="p-4">
                                <h1 className="text-lg font-semibold mb-2">Delete Item</h1>
                                <p className="mt-8 mb-6">Are you sure you want to delete this user ?</p>
                            </div>
                            <div className="bg-gray-100 px-4 py-2 sm:flex sm:flex-row-reverse flex flex-row justify-start items-center">
                                <button onClick={() => deleteItem} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded sm:ml-3 sm:w-auto w-full">
                                    Save
                                </button>
                                <button onClick={closeModal} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded sm:w-auto w-full">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div> : null}
            </div>
    );
}

export default ViewUsers;