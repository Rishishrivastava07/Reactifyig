import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(2);

  const getImages = async () => {
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=20`,
      );
      setImages(response.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    getImages();
  }, [page]);

  let printData = (
    <h3 className="text-4xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      Loading...
    </h3>
  );

  return (
    <div className="bg-gray-200 text-black min-h-screen">
      <div>
        <h1 className="text-center text-3xl font-bold underline">Piktures</h1>
      </div>
      <div>
        <div className="grid grid-cols-4 gap-4 p-5">
          {images.length === 0 ? printData : null}
          {images.map((image, idx) => {
            return (
              <div key={idx}>
                <a href={image.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={image.download_url}
                    alt={image.author}
                    className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-all duration-300 cursor-pointer"
                  />
                  <h1 className="font-bold  text-lg mt-2 text-center ">
                    {image.author}
                  </h1>
                </a>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center gap-6 mt-2">
          <button
            onClick={() => {
              if (page > 1) {
                setPage(page - 1);
                setImages([]);
              }
            }}
            className="bg-gray-700 text-2xl text-white px-4 py-2  hover:bg-gray-600 rounded cursor-pointer active:scale-95"
          >
            Previous
          </button>
          <h1 className="mt-2  text-xl font-medium">Page {page}</h1>
          <button
            onClick={() => {
              if (page < 10) {
                setPage(page + 1);
                setImages([]);
              }
            }}
            className="bg-gray-700 text-2xl text-white px-8 py-2  hover:bg-gray-600 rounded cursor-pointer active:scale-95"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
