import React, { useState } from 'react';

export default function Name() {
    const [name, setName] = useState("Nome")
    return (
        <div className="py-2">
            Nickname: 
            <input className='p-1 mx-2' type="text" value={name} onChange={e => setName(e.target.value)}></input>
            <button className='rounded-lg p-2 bg-zinc-300'>Change</button>
        </div>
    )
}