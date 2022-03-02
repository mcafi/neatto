export default function MessageItem({author, message}) {
    return (
        <li className="p-2">
            <p className="font-semibold">{author}</p>
            <span>{message}</span>
        </li>
    )
}