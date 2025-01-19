import LikeButton from './Like.jsx';

function Post({ post, onToggleLike }) {
  const { id, username, imageUrl, caption, isLiked, likeCount } = post;
  return (
    <div className="card mb-4">
      <div className="card-header d-flex align-items-center">
        <strong>@{username}</strong>
      </div>
      <img src={imageUrl} alt="Post" />
      <div className="card-body">
        <div className="d-flex align-items-center mb-2">
          <LikeButton isLiked={isLiked} onToggle={() => onToggleLike(id)} />
          <span className="ms-2">{likeCount} likes</span>
        </div>
        <p className="card-text">
          <strong>@{username}</strong> {caption}
        </p>
      </div>
    </div>
  );
}

export default Post;
