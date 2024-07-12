import React from "react";

//Modal for displaying a notice message
const AlertModal = ({ showModal, setShowModal, message }) => {
  return (
    <>
      {showModal ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-8 text-center mx-2">
            <h2 className="text-2xl font-bold mb-4 text-black">
              Important Notice
            </h2>
            <p className="mb-6 text-black">{message}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setShowModal(false)}
            >
              OK
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AlertModal;
