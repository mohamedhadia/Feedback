const Feedback = ({ author, text, createdAt }) => {
  return (
    <div className="bg-gray-100 mb-4 p-4 rounded">
      <h3 className="text-xl font-bold">{author}</h3>
      <time className="font-light text-sm text-gray-500 ">{createdAt}</time>
      <p className="tracking-wider text-lg">{text}</p>
    </div>
  );
};

export default Feedback;
