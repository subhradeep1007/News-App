import "./App.css";

import React, { Component } from 'react'
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  APIKey = '1deeafb4537240ad886460fb6dc15596'
  render() {
    return (
      <>
        <Router>
        <Navbar />
        
        
          <Routes>
            
          <Route path="/" element={<News key='general' pageSize={5} country="in" category="general" />}/>
          <Route path="/buisness" element={<News key='buisness' pageSize={5} country="in" category="buisness" />}/>
          <Route path="/entertainment" element={<News key='entertainment' pageSize={5} country="in" category="entertainment" />}/>
          <Route path="/science" element={<News key='science' pageSize={5} country="in" category="science" />}/>
          <Route path="/sports" element={<News key='sports' pageSize={5} country="in" category="sports" />}/>
          <Route path="/technology" element={<News key='technology' pageSize={5} country="in" category="technology" />}/>

            {/* <Route path="/business">
              <News pageSize={5} country="in" category="business" />
            </Route>

            <Route path="/entertainment">
              <News pageSize={5} country="in" category="entertainment" />
            </Route>

            <Route path="/general">
              <News pageSize={5} country="in" category="general" />
            </Route>

            <Route path="/science">
              <News pageSize={5} country="in" category="science" />
            </Route>

            <Route path="/sports">
              <News pageSize={5} country="in" category="sports" />
            </Route>

            <Route path="/technology">
              <News pageSize={5} country="in" category="technology" />
            </Route> */}
          </Routes>
        </Router>
      </>
    )
  }
}

