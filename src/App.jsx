import React from 'react'
import About from './About'
import store from './components/store'
import { Provider } from 'react-redux'
import ApiUse from './ApiUse'



const App = () => {
  return (
    <>
    <Provider store={store}>
       <About/>
       <ApiUse/>
    </Provider>
   
    </>
    )

}

export default App