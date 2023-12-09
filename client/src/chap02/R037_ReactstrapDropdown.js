import React, {useState} from 'react';
import {ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";

function R037_ReactstrapDropdown(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  let toggle = (e) => {
    setDropdownOpen(!dropdownOpen)
  }

  return (
    <div style={{padding: "0px"}}>
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>버튼 Dropdown</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>헤더</DropdownItem>
          <DropdownItem disabled>비활성화 버튼</DropdownItem>
          <a href={`http://example.com`}>
            <DropdownItem>example 웹 사이트로 이동</DropdownItem>
          </a>
          <DropdownItem onClick={e => alert('Alert 버튼')}>Alert 버튼</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    </div>
  );
}

export default R037_ReactstrapDropdown;