import React, { Component } from "react";
import DropdownButton from "./Dropdown/DropdownMenu";
import CarouselSlider from "./Carousel/CarouselSlider";

class App extends Component {
  render() {
    return (
      <div className="App">
        <DropdownButton />
        <CarouselSlider />
      </div>
    );
  }
}

export default App;
