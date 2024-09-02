import './App.css';
import Homes from './Routes/Homes';
import Nav from './Components/Nav';
import Header from './Components/Header';
import { videodet } from './Components/videodet';
import { useState, useEffect } from 'react';

function App() {
  const [search, setsearch] = useState('');
  const [searchedList, setsearchedList] = useState(videodet);

  useEffect(() => {
    if (search.trim() !== "") {
      const filtered = videodet.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setsearchedList(filtered);
    } else {
      setsearchedList(videodet);
    }
  }, [search]);

  return (
    <div className='App'>
      <div className='navbar'>
        <Nav />
      </div>
      <div className="main-content">
        <Header search={search} setsearch={setsearch} />
        <Homes videodet={searchedList} />
      </div>
    </div>
  );
}

export default App;
