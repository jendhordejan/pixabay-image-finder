import React, { Component } from "react";
import TextField from "material-ui/TextField"; //equivent to input tag
import SelectField from "material-ui/SelectField";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";

class Search extends Component {
  state = {
    searchText: "",
    amount: 15, //the amount of pictures to be loaded
    apiUrl: "https://pixabay.com/api",
    apiKey: "15441363-37973e460f704d66535a8884a",
    images: [] //array container for the fetched pictures from Pixabay
  };

  handleSubmit = () => {
    axios
      .get(
        `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`
      )
      .then(res => this.setState({ images: res.data.hits })) //loading the fetched data from api into our local state
      .catch(err => console.log(err));
  };

  handleOnChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.handleSubmit();
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
        <SelectField //for selecting the amount of pictures to be displayed
          name="amount"
          floatingLabelText="Amount"
          value={this.state.amount}
          onChange={this.handleOnChange}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </SelectField>
        <br />
      </div>
    );
  }
}
export default Search;
