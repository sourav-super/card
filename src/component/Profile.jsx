import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Profile = () => {
    const [data, setData] = useState("");
    const [name, setName] = useState({})
    const [pic, setPic] = useState("")
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios(`https://randomuser.me/api/?page=1&results=1&seed=abc Display the result on Screen in a Card of this design (As attached):`);
            setName(response.data.results[0].name)
            setData(response.data.results[0]);
            setPic(response.data.results[0].picture)
        }
        fetchData()
    }, [])
    return (
        <>
            <div className=' md:w-2/5 w-3/4 h-60 rounded-2xl md:flex items-center  shadow-xl bg-gradient-to-l from-violet-950 to-fuchsia-950 md:p-7 pl-12 py-4 mx-auto'>
                <div className=' md:w-1/4 w-1/3 '>
                    <img className='md:m-5 rounded-full  drop-shadow-2xl border-2 border-indigo-950 shadow-indigo-950  ' src={pic.large} />
                </div>
                <ul className='md:p-14 pt-4  '>
                    <li className='text-3xl font-medium text-gray-200 md:my-2'>{name.first}<span> {name.last}</span></li>
                    <li className='text-lg text-gray-400 font-semibold md:'><span className='p-0 text-xl'>Gender :</span> {data.gender}</li>
                    <li className='text-lg font-medium'>☎️ {data.phone}</li>
                </ul>
            </div>
        </>
    )
}

export default Profile