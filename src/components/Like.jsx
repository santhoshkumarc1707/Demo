import  { useState } from 'react'

const Like = () => {
    const [liked, setLiked] = useState("");
    const handleChange = (e) => {
        setLiked(e.target.checked);
    }
    return (
        <div>
            <label >
                <input type="checkbox" checked={liked} onChange={handleChange} />
                I liked this

            </label>
            <p> you {liked ? "liked" : "not liked"} this</p>
        </div>
    )
}

export default Like