import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreatePost = () => {

    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const response = await axios.post('http://localhost:3000/create-post', formData)
        console.log(response.data)
        navigate('/feed')
    }
  return (
    <section className="create-post-section">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name="image" accept="image/*" />
        <textarea
          name="caption"
          placeholder="Enter Caption"
          required
          rows="2"
        ></textarea>

        <button type="submit">Create Post</button>
      </form>
    </section>
  );
};

export default CreatePost;
