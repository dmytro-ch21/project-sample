function LikeButton({ isLiked, onToggle }) {
  return (
    <button onClick={onToggle} className="btn p-0 border-0">
      <span className={isLiked ? 'text-body-danger' : 'text-body-light'}>
        {isLiked ? '♥' : '♡'}
      </span>
    </button>
  );
}

export default LikeButton;