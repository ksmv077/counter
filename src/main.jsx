import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { Provider } from 'react-redux'
import { createStore } from 'redux'


const initialState = {
  number: 0
}

const reducer = (state = initialState, action) => {
   switch (action.type) {
    case 'plus':
      return {
        ...state,
        number: state.number + 1,
      };
    
      case 'minus':
        return {
          ...state,
          number: state.number - 1,
        }

        case 'nol':
          return {
            ...state, 
            number: state.number = 0,
          }
   
    default:
      return state
   }
}

const store = createStore(reducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
  </React.StrictMode>,
)
