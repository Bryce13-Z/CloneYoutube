import React, {useState} from 'react';

import { Paper, TextField } from "@mui/material";

const SearchBar = ({ onFormSubmit }) => {

    const [searchTerm, setSearchTerm] = useState('warriors');

    const onKeyPress = (event) => {
        if (event.key === "Enter") {
            onFormSubmit(searchTerm)
        }
    }


    return (
        <Paper elevation={6} style={{ padding: '25px'}}>
            <TextField
                value={searchTerm}
                fullWidth label="Search..." 
                onChange={(event) => {setSearchTerm(event.target.value)}}
                onKeyPress={onKeyPress}
            />
        </Paper>
    )

}

// class SearchBar extends react.Component {
//     state = {
//         searchTerm: '',
//     }

//     handleChange = (event) => {
//         this.setState({ searchTerm : event.target.value })
//     }

//     handleSubmit = (event) => {
//         const { searchTerm } = this.state;
//         const { onFormSubmit } = this.props;
        
//         onFormSubmit(searchTerm);

//         // 防止render 整个页面
//         event.preventDefault();
//     }

//     render() {
//         return (
//             <Paper elevation={6} style={{ padding: '25px'}}>
//                 <form onSubmit={this.handleSubmit}>
//                     <TextField fullWidth label="Search..." onChange={this.handleChange}/>
//                 </form>
//             </Paper>
//         )
//     }
// }


export default SearchBar