import React, { useState } from "react";
import img from "../images/img2.jpg";
import axios from 'axios';


function Feed() {

  const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[subject,setSubject] = useState("");
  const[message,setMessage] = useState("");

  const CollectData = async (e) =>{
    e.preventDefault();
    try{
      alert("feedback submited !")
      const response = await axios.post('http://localhost:5000/feed',{
      name,
      email,
      subject,
      message
      });
      console.log(response.data);
  }
  catch(e){
      console.log(e);
  }
  }


  return (
    <>
      <div className="hello flex justify-center tracking-tighter">
        <h1 className="text-4xl">feedback page</h1>
      </div>
      <div className="flex justify-center items-center gap-10  mt-10 mb-10 ">
        <div className="img h-auto w-1/3 mt-10 ">
          <img src={img} alt="" className="h-full w-full object-cover" />
        </div>
        <div>
          <form onSubmit={CollectData} action="">
            <h2 className="text-4xl mt-10 text-orange-500">
              feedback form
            </h2>
            <div className="mt-3">
              <label className="text-lg">Name:</label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className="block h-14 w-[500px] mt-2 p-2 bg-gray-300 text-zinc-900  rounded outline-none"
              />

              <label className="text-lg">Email:</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="block h-14 w-[500px] mt-2 p-2 bg-gray-300 text-zinc-900  rounded outline-none"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              ></input>

              <label className="text-lg">subject:</label>
              <input
                type="text"
                placeholder="subject"
                name="subject"
                className="block h-14 w-[500px] mt-2 p-2 bg-gray-300 text-zinc-900  rounded outline-none"
                value={subject}
                onChange={(e)=>setSubject(e.target.value)}
              />
              <label className="text-lg">message:</label>
              <textarea
                className="block h-24 bg-gray-300 w-[500px] text-zinc-900 rounded outline-none mt-2 p-2"
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
                name="message"
                placeholder="message"
              ></textarea>
              <div className="flex justify-center gap-10"s>
              <input
                type="submit"
                className=" mt-6 w-1/3 py-2 h-14 bg-orange-500 text-black rounded "
              />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Feed;
      