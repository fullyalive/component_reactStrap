import React, { Component } from "react";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import "./styles.css";

class DropdownButton extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle
          tag="span"
          onClick={this.toggle}
          data-toggle="dropdown"
          aria-expanded={this.state.dropdownOpen}
        >
          <span className="item">마이페이지</span>
        </DropdownToggle>
        <DropdownMenu>
          <div onClick={this.toggle}>수강 정보</div>
          <div onClick={this.toggle}>정보수정</div>
          <div onClick={this.toggle}>로그아웃</div>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default DropdownButton;
