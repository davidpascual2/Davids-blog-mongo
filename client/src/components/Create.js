const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    // const [author, setAuthor] = useState('david')
    // const history = useHistory()

    //================================//

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body } //author?
    }

    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} //FIX THIS MAKE SHORTER
                />

                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
        


            </form>
        </div>
      );
}
 
export default Create;