import {Box} from "@mui/material";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Feed, Navbar, SearchFeed, VideoDetail, ChanelDetail} from './components'


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
