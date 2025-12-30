import { useState } from "react";

const useGptLimitPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 🔴 this is the ONLY function the component will call
  const triggerGptLimitPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  // 🧠 Popup UI lives INSIDE the hook
  const GptLimitPopup = () => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black/80 grid place-items-center z-50">
        <div className="bg-white p-6 rounded-lg w-[90%] max-w-105 text-center">
          <h2 className="text-xl font-bold mb-3 text-red-600">
            API Limit Reached
          </h2>

          <p className="text-gray-700 mb-6">
            GPT API limit has been reached.
            <br />
            Please try again after some time.
          </p>

          <button
            onClick={closePopup}
            className="px-6 py-2 bg-red-800 text-white rounded hover:bg-gray-800"
          >
            OK
          </button>
        </div>
      </div>
    );
  };

  return {
    triggerGptLimitPopup,
    GptLimitPopup,
  };
};

export default useGptLimitPopup;
