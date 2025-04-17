import React from "react";

const CommentCard = ({ comment }) => {
  const { user, time, text, likes, replies } = comment;

  return (
    <div className="flex space-x-3 mb-6">
      <img
        src={user.avatar}
        alt={user.name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="flex-1">
        <div className="text-sm font-semibold">{user.name}</div>
        <div className="text-xs text-gray-400 mb-1">{time}</div>
        <div className="text-sm text-gray-700">{text}</div>
        <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
          <span>❤️ {likes}</span>
          <button className="hover:underline">Reply</button>
        </div>
        {/* Nested Replies */}
        {replies && replies.length > 0 && (
          <div className="mt-4 pl-6 border-l border-gray-200">
            {replies.map((reply, index) => (
              <CommentCard key={index} comment={reply} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentCard;
