import { useState } from 'react'
import PropTypes from 'prop-types'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  }
]

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
// 1. Component
// Re-useable fragment of code that returns diferent results based on the props
const Room = ({ name, url }) => ( // 2. Props
   <li className="room">         {/* Data passed to the component that can be used. */}
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
  // 3. Hook
  // Functionalities provided by React for implementation
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
    <main>
      <section>
        <h1>Rooms</h1>
        <div>
          {mockData.map((item, index) => (
            <Card key={index} name={item.nameSection} rooms={item.roomsSection} />
          ))}
        </div>
      </section>
      <section className='App'>
        {
          users.map(({ userName, name, isFollowing }) => (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          ))
        }
      </section>
    </main>
  )
}
export default App
