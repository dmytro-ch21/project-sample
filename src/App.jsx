import Post from './components/Post';
import { useState } from 'react';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: 'john_doe',
      imageUrl: 'https://picsum.photos/200?random=1',
      caption: 'Having a great day at the beach!',
      isLiked: false,
      likeCount: 27,
    },
    {
      id: 2,
      username: 'jane_smith',
      imageUrl: 'https://picsum.photos/200?random=2',
      caption: 'Loving my new phone camera 😍',
      isLiked: false,
      likeCount: 102,
    },
    {
      id: 3,
      username: 'bart_smith',
      imageUrl: 'https://picsum.photos/200?random=3',
      caption: 'Loving my new phone camera 😍',
      isLiked: false,
      likeCount: 48,
    },
  ]);

  const handleToggleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          const liked = !post.isLiked;
          const newCount = liked ? post.likeCount + 1 : post.likeCount - 1;
          return { ...post, isLiked: liked, likeCount: newCount };
        }
        return post;
      })
    );
  };

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Instagram Post Layout</h1>
      <div className="d-flex flex-column align-items-center">
        {posts.map((post) => (
          <Post key={post.id} post={post} onToggleLike={handleToggleLike} />
        ))}
      </div>
    </div>
  );
}

export default App;
