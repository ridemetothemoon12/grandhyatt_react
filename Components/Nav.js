import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components'

const Header = styled.div`
  width: 100%;
  height: 90px;
  background-color: white;
  position: fixed;
  z-index: 999;
`
const HeaderWrap = styled.div`
  max-width: 1200px;
  height: inherit;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const HeaderHamMenustyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 120px;
  cursor: pointer;
  &.on {
    div:nth-child(1) {
      transform: rotate(45deg) translate(5px, 1px);
    }
    div:nth-child(2) {
      display: none;
    }
    div:nth-child(3) {
      transform: rotate(-45deg) translate(6px, -2px);
    }
  }
`
const HeaderLines = styled.div`
  width: 30px;
  height: 4px;
  background-color: black;
  border-radius: 50px;
  margin: 3px 0;
  transition: all .3s;
`
const HeaderTopDownMenu = styled.div`
  width: 100%;
  height: 0px;
  transition: all .3s ease-in-out;
  overflow: hidden;
  background-color: white;
  &.on {
    height: 49px;
  }
  `
const HeaderTopDownMenuTextWrap = styled.div`
  max-width: 1200px;
  text-align: center;
  margin: 0 auto;
  ul {
    width: 100%;
    font-size: 24px;
    line-height: 49px;
    display: flex;
    justify-content: space-between;
  }
  li {
    position: relative;
    cursor: pointer;
    &::after {
      content: "";
      position: absolute;
      width: 0%;
      height: 2px;
      background-color: #BD213E;
      top: 85%;
      left: 0;
      transition: all .3s ease-in-out;
    }
    &:hover::after {
      width: 100%;
    }
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    ul {
      display: flex;
      width: 80%;
      justify-content: space-around;
      margin: 0 auto;
    }
    li {
      font-size: 18px;
      &::after {
        top: 75%;
      }
    }
  }
`
const HeaderLogo = styled.div``
const HeaderReserveLang = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`
class HeaderConstructor extends React.Component {
  constructor(props) {
    super(props);
    this.clickHam = this.clickHam.bind(this);
    this.state = {
      active: false
      };
  }
  clickHam = () => {
      const currentState = this.state.active;
      this.setState({active: !currentState})
    };
  render() {
    return (
      <Header>
        <HeaderWrap>
          <HeaderHamMenustyle className={this.state.active ? 'on' : null} onClick={() => this.clickHam()}>
            <HeaderLines></HeaderLines>
            <HeaderLines></HeaderLines>
            <HeaderLines></HeaderLines>
          </HeaderHamMenustyle>
          <HeaderLogo><img src='../Image/logo.png' alt='logo'/></HeaderLogo>
          <HeaderReserveLang>
            <p>예약하기</p>
            <p>한국어</p>
          </HeaderReserveLang>
        </HeaderWrap>
        <HeaderTopDownMenu className={this.state.active ? 'on' : null}>
          <HeaderTopDownMenuTextWrap>
            <ul>
              <li>Home</li>
              <li>Jeju Hyatt</li>
              <li>Amusement</li>
              <li>Accommodation</li>
              <li>Contact & Reserve</li>
            </ul>
          </HeaderTopDownMenuTextWrap>
        </HeaderTopDownMenu>
      </Header>
    )
  }
}

function Nav() {
  return (
    <>
      <HeaderConstructor></HeaderConstructor>
    </>
  )
}

export default Nav