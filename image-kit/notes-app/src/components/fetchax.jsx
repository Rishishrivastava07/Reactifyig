import axios from "axios";
import { useState } from "react";

const Fetchax = () => {

    const [data, setData] = useState([]);

    const getData = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        setData(response.data);
    }

    return (
        <div className="p-4">
            <button
                onClick={getData}
                className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600"
            >
                Get Data
            </button>

            {data.map((data) => {
                return (
                    <div key={data.id} className="bg-gray-100 p-4 rounded shadow mb-2">
                        <h1 className="text-xl font-bold mb-2">Name: {data.name}</h1>
                        <p>Email: {data.email}</p>
                        <p className="text-sm text-gray-500">ID: {data.id}</p>
                    </div>
                )
            })}
        </div>

    )
}

export default Fetchax  