import { Box } from "@mui/material";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Feed from './components/Feed'
import Navbar from './components/Navbar'
import VideoDetail from './components/VideoDetail'
import ChanelDetail from './components/ChanelDetail'
import SearchFeed from './components/SearchFeed'


function App() {
  return (
    <BrowserRouter>
    <Box sx={{background: '#000'}}>
<Navbar/>
<Routes>
  <Route path='/' exact element={<Feed/>}/>
  <Route path="/video/:id" element={<VideoDetail/>}/>
  <Route path="/chanel/:id" element={<ChanelDetail/>}/>
  <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
</Routes>
    </Box>
    </BrowserRouter>
  );
 }

export default App;
