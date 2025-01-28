
import { useState } from 'react';
import './App.css'
import { HotelList } from './components/HotelList'
import data from './data';

function App() {

  const [hotelData, setHotelData] = useState(data);

  return (
    <div>
      <HotelList data={hotelData} />
    </div>
  )
}

export default App
