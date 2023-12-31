// import { useState, useRef, useEffect, useContext } from 'react'
// import { ThemeContext } from '../App'

// import useGetMovies from './services/useGetMovies';


// export default function SearchVar() {
//   const [searchValue, setSearchValue] = useState('')

// 	const firstTimeFocus = useRef(null)

// 	// focus on the input when the component is mounted for the first time
// 	useEffect(() => {
// 		if (firstTimeFocus.current) {
//       firstTimeFocus.current.focus()
//       return
//     }
// 	}, [])

//   const handleSearchInputChanges = (e) => {
//     setSearchValue(e.target.value)
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
// 		// usar el custom hook para pedir datos y luego actualizar el estado de la app
//     // useGetMovies("cat")
// 		setSearchValue('')
//   }

//   return (
//     <form className="flex justify-between p-2">
//       <input
//         ref={firstTimeFocus}
//         onChange={handleSearchInputChanges}
//         value={searchValue}
//         type="text"
//       />
//       <button
// 				type="submit"
// 				onClick={handleSubmit}
// 				className=''
// 			>
//         Search
//       </button>
//     </form>
//   );
// }
