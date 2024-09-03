import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function HomePage() {
  const [room, setRoom] = useState("");
  const navigate = useNavigate();

function submitHandler(){
navigate(`/User/${room}`)
}
  return (
    <div>
      <input
        value={room}
        placeholder="Create Room"
        onChange={(e) => setRoom(e.target.value)}
        type="text"
        className='rounded-md bg-gray-400 mx-2 text-gray-700 px-1'
      />
      <button
      onClick={submitHandler}
      className='bg-teal-500 px-2 py-1 rounded-lg'>Join</button>
    </div>
  );
}

export default HomePage;
