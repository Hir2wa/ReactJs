import { useState, useEffect } from "react";
export default function Main() {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main className="px-6 py-10 flex flex-col items-center bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-xl mb-6">
        <label className="block text-sm font-semibold mb-1 text-gray-700">
          Top Text
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </label>

        <label className="block text-sm font-semibold mb-1 text-gray-700">
          Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </label>

        <button
          onClick={getMemeImage}
          className="bg-purple-600 text-white font-semibold px-6 py-2 mb-8 rounded hover:bg-purple-700 transition-colors"
        >
          Get a new meme image 🖼
        </button>
      </div>

      <div className="relative w-full max-w-xl">
        <img src={meme.randomImage} className="w-full object-cover rounded" />
        <span className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-2xl font-bold drop-shadow">
          {meme.topText}
        </span>
        <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-3xl font-bold drop-shadow">
          {meme.bottomText}
        </span>
      </div>
    </main>
  );
}
