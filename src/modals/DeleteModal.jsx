const DeleteModal = ({handleDelete, closeDeleteModal}) => {

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white text-black p-4 rounded-md">
            <p>Are you sure you want to delete?</p>
            <div className="flex justify-end mt-4">
              <button onClick={handleDelete} className="bg-lightred px-4 py-2 mr-2 rounded-md">
                Yes
              </button>
              <button onClick={closeDeleteModal} className="bg-gray-300 px-4 py-2 rounded-md">
                No
              </button>
            </div>
          </div>
        </div>
    )
}

export default DeleteModal