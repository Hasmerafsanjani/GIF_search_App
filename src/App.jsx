import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [gifs, setGifs] = useState([]);

  const handleSearch = async () => {
    try {
      const apiKey = 'LIVDSRZULELA';
      const apiUrl = `https://g.tenor.com/v1/search?q=${searchTerm}&key=${apiKey}&limit=20`;
      const response = await axios.get(apiUrl);
      setGifs(response.data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='bg-slate-600' >
      <div className='flex flex-col text-center'>
      <h1 className='text-5xl font-bold text-white '>GIF Search App</h1>
      <div>
        <input
        className='text-2xl items-center bg-blue-500 text-white p-2 rounded-l-2xl mt-4'
          type="text"
          placeholder='Search Your GIF'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className='text-2xl font-bold p-2 rounded-r-2xl text-white bg-green-500' onClick={handleSearch}>Search</button>
      </div>
      </div>
      <div className='flex flex-wrap  mx-auto my-5 '>
        {gifs.map((gif) => (
          <img className='p-1 rounded-xl' key={gif.id} src={gif.media[0].tinygif.url} alt={gif.title} />
        ))}
      </div>
    </div>
  );
}

export default App;

