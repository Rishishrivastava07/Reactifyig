import  { useState, useEffect} from 'react'
import axios from 'axios'

const Feed = () => {

    const [posts, setposts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get('http://localhost:3000/posts')
            setposts(response.data) 
            console.log(response.data)
            
        }
        fetchPosts()
    }, [])


  return (
    <section className='feed-section'>
        {posts.length === 0 ? (
            <p>No posts yet</p>
        ) : (
            posts.map((post) => (
                <div className='post' key={post._id}>
                    <img src={post.image} alt="" />
                    <p>{post.caption}</p>
                </div>
            ))
        )}
    </section>
  )
}

export default Feed