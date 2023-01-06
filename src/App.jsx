import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import reactLogo from './assets/react.svg'
import { decrement, decrementBy, increment, incrementBy } from './store/slices/counter'

function App() {
  const {counter} = useSelector(state => state.value)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        {counter}
      </div>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          increment
        </button>
        <button onClick={() => dispatch(decrement())}>
          decrement
        </button>
        <button onClick={() => dispatch(incrementBy(2))}>
          increment in 2
        </button>
        <button onClick={() => dispatch(decrementBy(2))}>
          decrement in 2
        </button>
      </div>
    </div>
  )
}

export default App
