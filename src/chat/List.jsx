import { useSelector } from "react-redux"

export default function List() {
    const user = useSelector(state => state)

    return (
        <div className="ml-2 p-2 bg-white h-100 w-48">
            <ul>
                <li className="font-bold">
                    {user.name}
                </li>
            </ul>
        </div>
    )
}