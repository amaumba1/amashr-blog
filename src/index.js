import React from 'react'
import { render } from 'react-dom'
// import { ApolloProvider } from '@apollo/react-hooks'
import App from './App'
// import client from './apollo/client'
import { ThemeProvider } from './context/ThemeContext'


const RootApp = () => {
 return (
   <div>
    <ThemeProvider>
      <App /> 
    </ThemeProvider>
  </div>
 )
}
render(<RootApp />, document.getElementById('root'))