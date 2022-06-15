const ProgressBar = ({ progressPercentage }) => {
  return (
    <div className="w-full h-1 bg-gray-300">
      <div
        style={{ width: `${progressPercentage}%` }}
        className={`h-full ${
          progressPercentage < 30
            ? "bg-red-500"
            : progressPercentage < 70
            ? "bg-yellow-300"
            : "bg-green-600"
        }`}
      ></div>
    </div>
  );
};

export default ProgressBar;
