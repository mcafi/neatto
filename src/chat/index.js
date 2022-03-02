import { useEffect, useState } from "react"
import List from "./List"
import Message from "./Message"
import Messages from "./Messges"
import Name from "./Name"

export default function Chat() {
    return (
        <div className="p-2 border-black border bg-cyan-300">
            <h1 className="font-bold">Neatto</h1>
            <div className="flex">
                <div>
                    <Messages />
                    <Name />
                    <Message />
                </div>
                <List />
            </div>
        </div>
    )
}