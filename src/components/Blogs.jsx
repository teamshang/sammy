import { useState, useEffect } from "react";
import Modal from "react-modal"; 

Modal.setAppElement("#root"); // To prevent accessibility-related warnings

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          // fetching the data from the API
          "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=30"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log("API Response:", data); 
        setPosts(data.blogs || []); 
        setLoading(false); 
      } catch (err) {
        console.error("Error fetching the blog posts:", err);
        setError(err.message); 
        setLoading(false); 
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  const openModal = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  const getExcerpt = (content, maxLength = 100) => {
    return content.length > maxLength
      ? content.substring(0, maxLength) + "..."
      : content;
  };

  return (
    <section className="container mx-auto py-4" id="blog">
      <h1 className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl">Blog</h1>
      {posts && posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <div
              key={`${post.id}-${index}`}
              className="rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row items-center p-4">
                <div className="w-full lg:w-1/3">
                  <img
                    src={post.photo_url}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>
                <div className="flex flex-col justify-between w-full lg:w-2/3 p-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold font-sans pt-2 pb-2">
                      {post.title}
                    </h2>
                    <span className="text-black bg-slate-400 rounded-full px-3 py-1 font-sans">
                      {post.category}
                    </span>
                  </div>
                  <p className="text-neutral-400 mt-2 text-justify font-sans">
                    {getExcerpt(post.content_text, 300)}{" "}
                    <button
                      onClick={() => openModal(post)}
                      className="text-blue-500 mt-2"
                    >
                      Read More
                    </button>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No posts available</p>
      )}

      {/* Modal for displaying full content */}
      {selectedPost && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Post Details"
          overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
          className="bg-cyan-950 p-6 w-full max-w-3xl h-auto max-h-[90vh] mx-auto rounded shadow-lg overflow-auto text-white"
        >
          <img
            src={selectedPost.photo_url}
            alt={selectedPost.title}
            className="w-full h-64 object-cover mb-4 rounded-md"
          />
          <h2 className="text-2xl font-bold uppercase text-center mb-4">
            {selectedPost.title}
          </h2>
          <h3 className="text-xl  font-bold text-center mb-4">
            {selectedPost.description}
          </h3>
          <p className="text-justify font-sans">
            {selectedPost.content_text}
          </p>
        </Modal>
      )}
    </section>
  );
};

export default Blogs;
