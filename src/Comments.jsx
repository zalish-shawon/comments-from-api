import { useEffect, useState } from "react"
import Comment from "./Comment"

export default function Comments() {
    const [totalComments, SetComments] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => SetComments(data))
    },[])
    return (
        <div>
            <h3>Total Loaded Comments: {totalComments.length} </h3>

            {
                totalComments.map(comment => <Comment comment={comment}></Comment>)
            }
        </div>
    )
}

