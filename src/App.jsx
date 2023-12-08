import { useState } from 'react';
import './App.css'

import PropTypes from 'prop-types';


const FollowButton = ({follow}) => {
  const [followState, setFollowState] = useState(follow)
  const [isFollowingText, setIsFollowingText] = useState('')

  function handleHover() {
    setFollowState(!followState);
    setIsFollowingText(followState ? 'following' : 'is following')
  }

  return (
    <button
      onMouseEnter={handleHover} 
      onMouseLeave={handleHover}
      style={followState ? { backgroundColor: 'green' } : { backgroundColor: 'red' }}
    >
      {isFollowingText}
    </button>
  )
}

FollowButton.propTypes =  {
  children: PropTypes.node,
  follow: PropTypes.bool
}


// Block.propTypes = {
//   nameBlock: PropTypes.string,
// };


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <FollowButton follow={true} />
      <FollowButton follow={false} />

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
