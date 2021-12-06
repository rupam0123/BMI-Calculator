import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Form from './App/Form'
import App from './App/App'

export default function Home() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Form} />
        <Route path="/app" component={App} />
      </Router>
    </>
  )
}