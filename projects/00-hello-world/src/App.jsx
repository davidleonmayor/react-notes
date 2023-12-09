import { useState } from 'react'
import './App.css'

import PropTypes from 'prop-types'

const mockData = [
  { nameSection: "backend",
    roomsSection: [
      {name: "general", url: "https://api.dicebear.com/7.x/adventurer/svg?seed=Buster"},
      {name: "express", url: "https://th.bing.com/th/id/R.d5f66342991130a4c118dffb1f962717?rik=wP7TZ9Be8D1LJA&pid=ImgRaw&r=0"},
      {name: "mongodb", url: "https://picsum.photos/200/300"},
    ],
  },
  { nameSection: "frontend",
    roomsSection: [
      {name: "general", url: "https://picsum.photos/200/300"},
      {name: "react", url: "https://picsum.photos/200/300"},
      {name: "angular", url: "https://picsum.photos/200/300"},
    ],
  }
]

const Room = ({ name, url }) => (
  <li className="room">
    <img
      src={url}
      alt="avatar"
      onError={(e) => { e.target.onerror = null; e.target.src = "fallback-image-url"; }}
    />
    <p>{name}</p>
  </li>
)
Room.propTypes =  {
  url: PropTypes.string,
  name: PropTypes.string
}

const Card = ({ name, rooms }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <section className="card">
      <h2 onClick={toggleOpen}>
        {isOpen ? '▲' : '▼'} {name}
      </h2>
      {isOpen && (
        <ul className={isOpen ? 'open' : 'closed'}>
          {rooms.map((item, index) => (
            <Room key={index} name={item.name} url={item.url} />
          ))}
      </ul>
      )}
    </section>
  );
};
Card.propTypes =  {
  name: PropTypes.string,
  rooms: PropTypes.array
}


function App() {
  return (
    <>
      <h1>Rooms</h1>
      <div>
        {mockData.map((item, index) => (
          <Card key={index} name={item.nameSection} rooms={item.roomsSection} />
        ))}
      </div>
    </>
  )
}
export default App
