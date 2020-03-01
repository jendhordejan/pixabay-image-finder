import React, { Component } from "react";
import TextField from "@material-ui/core/TextField"; //equivent to input tag
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";
import ImageResults from "../image-results/ImageResults";

class Search extends Component {
  state = {
    searchText: "",
    searchResults: 15, //the amount of pictures to be loaded
    apiUrl: "https://pixabay.com/api",
    apiKey: "15441363-37973e460f704d66535a8884a",
    images: [] //array container for the fetched pictures from Pixabay
  };

  handleSubmit = () => {
    axios
      .get(
        `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.searchResults}&safesearch=true`
      )
      .then(res => this.setState({ images: res.data.hits })) //loading the fetched data from api into our local state
      .catch(err => console.log(err));
  };

  checkSearchValue = searchValue => {
    if (searchValue === "") {
      this.setState({ images: [] });
    } else {
      this.handleSubmit();
    }
  };

  handleOnChange = event => {
    const val = event.target.value;
    this.setState({ [event.target.name]: event.target.value });
    this.checkSearchValue(val);
  };

  handleOnAmountChange = (event, index, value) => {
    console.log(`eventname: ${event}, value: ${value}`);

    console.log(event);

    this.setState({ searchResults: event.target.value });
  };

  render() {
    console.log(this.state.images);
    return (
      <div>
        <TextField
          name="searchText"
          floatingLabelText="Search For Images"
          value={this.state.searchText} //directly connecting the value from our state
          onChange={this.handleOnChange} //calls a function to handle changes in the TextField
          fullWidth={true}
        />

        <br />
        <Select //for selecting the amount of pictures to be displayed
          name="searchResults"
          floatingLabelText="Amount"
          value={this.state.searchResults}
          onChange={this.handleOnAmountChange}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
        <br />
        {this.state.images.length > 0 ? (
          <ImageResults images={this.state.images} />
        ) : null}
      </div>
    );
  }
}
export default Search;
