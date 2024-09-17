import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

// const newElement = <a href="www.google.com">Google Me !</a>



const reactElement = React.createElement(
  'a',
  {href:"www.google.com",target:"_blank"},
  'Click me'
)

createRoot(document.getElementById('root')).render(
 <App/>
)
