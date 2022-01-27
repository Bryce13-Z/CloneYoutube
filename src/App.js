import React, {useState}from "react";

import Grid from "@mui/material/Grid";

import youtube from './api/youtube';

import { SearchBar, VideoDetail, VideoList } from "./components";


// class App extends React.Component {

//     state = {
//         videos: [],
//         selectedVideo: null,
//     }

//     componentDidMount() {
//         this.handleSubmit('小萝卜')
//     }



//     onVideoSelect = ( video ) => {
//         this.setState({ selectedVideo: video});
//     }


//     handleSubmit = async (searchTerm) => {
//         const response = await youtube.get("search", { 
//             params: {
//                 part: 'snippet',
//                 maxResults : 5,
//                 key : "AIzaSyAkWSOR29lrvELzE0wsPgzlkkFlAux39Lg",
//                 q: searchTerm,
            
//             }});
//         console.log(response.data.items);
//         this.setState({ videos: response.data.items, selectedVideo: response.data.items[0]})
//     }

//     render () {
//         const { selectedVideo, videos } = this.state;

//         return (
//         <Grid container xs={12} justifyContent="center">
//             <Grid item xs={12}>
//                 <Grid container spacing={16}>
//                     <Grid item xs={12}>
//                         <SearchBar onFormSubmit={this.handleSubmit}/>
//                     </Grid>
//                     <Grid item xs={8}>
//                         < VideoDetail video={selectedVideo}/>
//                     </Grid>
//                     <Grid item xs={4}>
//                         < VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
//                     </Grid>
//                 </Grid>
//             </Grid>
//         </Grid>
//         )
//     }
// }


const App = () => {

    const [videos, setvidoes] = useState([]);
    const [selectedVideo, setselectedVideo] = useState(null);

    const handleSubmit = async (searchTerm) => {
        const response = await youtube.get("search", { 
            params: {
                part: 'snippet',
                maxResults : 5,
                key : "AIzaSyAkWSOR29lrvELzE0wsPgzlkkFlAux39Lg",
                q: searchTerm,
            
            }});
 
        setvidoes(response.data.items);
        setselectedVideo(response.data.items[0]);
    }

    return(
        <Grid container xs={12} justifyContent="center">
             <Grid item xs={12}>
                 <Grid container spacing={16}>
                     <Grid item xs={12}>
                         <SearchBar onFormSubmit={handleSubmit}/>
                    </Grid>
                     <Grid item xs={8}>
                        < VideoDetail video={selectedVideo}/>
                    </Grid>
                     <Grid item xs={4}>
                         < VideoList videos={videos} onVideoSelect={setselectedVideo}/>
                     </Grid>
                 </Grid>
             </Grid>
        </Grid>
    )
}


export default App;