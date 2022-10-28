import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import SwiperCore, { Pagination, Autoplay } from "swiper/core";
import { Navigation, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { useSelector } from 'react-redux';


SwiperCore.use([Pagination, Autoplay]);

const TitleStyle = {
  fontSize: "61px",
  borderBottom: "3px solid rgb(189, 33, 62)",
  width: "fit-content",
  marginBottom: "15px"
}

const MainBackground = styled.div`
  width: 100%;
  height: 800px;
  background: no-repeat url("./Image/pool.jpg");
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`
const ReserveHoverMenu = styled.div`
  width: 600px;
  height: 70px;
  background-color: rgba(0,0,0,0.5);
  filter: drop-shadow(0px 0px 3px black);
  border-radius: 50px;
  transform: translateY(-120%);
  display: flex;
  justify-content: space-around;
  h3 {
    display: flex;
    align-self: center;
    height: fit-content;
    color: red;
    transform: translateY(-10%);
  }
`
const ReserveHoverMenuSelectionUl = styled.ul`
  width: 65%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
const ReserveHoverMenuSelectionLi = styled.li`
  width: fit-content;
  color: white;
  margin-top: 5px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: white;
    top: 50px;
    left: 0;
  }
`
const ContentOne = styled.div`
  margin-top: 150px;
  width: 100%;
  height: 680px;
  display: flex;
  justify-content: center;
  @media (min-width: 641px) and (max-width: 1024px) {
    margin-top: 50px;
  }
`
const ContentOneWrap = styled.div`
  flex-basis: 1200px;
  height: 100%;
  display: grid;
  grid-template-columns: 40% 59%;
  grid-template-rows: repeat(2, 49%);
  gap: 1%;
  @media (min-width: 641px) and (max-width: 1024px) {
    flex-basis: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }
`
const ContentOneItemLobby = styled.div`
  grid-column: 1/2;
  grid-row: 1/3;
  background: no-repeat url("./Image/inside.jpg");
  background-size: cover;
  background-position: center;
`
const ContentOneItemTextWrap = styled.div`
  grid-column: 2/3;
  grid-row: 1/2;
  @media (min-width: 641px) and (max-width: 1024px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
const ContentOneItemOverview = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  background: no-repeat url("./Image/outlook.jpg");
  background-size: cover;
  background-position: center;
  @media (min-width: 641px) and (max-width: 1024px) {
    width: 100%;
    height: 400px;
  }
`
const ContentTwo = styled.div`
  margin-top: 150px;
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  @media (min-width: 641px) and (max-width: 1024px) {
    margin-top: 50px;
  }
`
const ContentTwoWrap = styled.div`
  flex-basis: 1200px;
  height: 100%;
  @media (min-width: 641px) and (max-width: 1024px) {
    flex-basis: 800px;
  }
`
const ContentTwoTextWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  height: 190px;
  @media (min-width: 641px) and (max-width: 1024px) {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`
const ContentTwoTitleWrap = styled.div``
const ContentTwoCurtainWrap = styled.div`
  width: 100%;
  height: 610px;
  display: table;
  table-layout: fixed;
  overflow: hidden;
`
const ContentTwoCurtainItem = styled.div`
  display: table-cell;
  width: 20%;
  height: 100px;
  background: ${(props) => props.background || "none"};
  background-size: cover;
  background-position: center;
  transition: all 1s ease-in-out;
  position: relative;
  &:hover {
    width: 130%;
    p {
      opacity: 0;
    }
  }
  p {
    color: white;
    height: auto;
    width: 180px;
    position: absolute;
    top: 5px;
    left: 25px;
    transform-origin: 0 0;
    transform: rotate(90deg);
    text-shadow: 1px 1px 7px #000;
    transition: all .3s;
  }
`
const ContentTwoCurtainDesc = styled.div`
  width: 100%;
  height: 150px;
`
const ContentTwoCurtainDescItem = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 5px;
  display: none;
  &.active {
    display: flex;
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    h3 {
      font-size: 22px !important;
    }
  }
`
const ContentTwoCurtainDescItemTitle = styled.div`
  width: 83%;
  h3 {
    color: #BD213E;
    font-size: 28px;
  }
`
const ContentThree = styled.div`
  margin-top: 150px;
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  @media (min-width: 641px) and (max-width: 1024px) {
    margin-top: 100px;
  }
`
const ContentThreeWrap = styled.div`
  flex-basis: 1200px;
  height: 100%;
  @media (min-width: 641px) and (max-width: 1024px) {
    flex-basis: 800px;
  }
`
const ContentThreeTextWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    @media (min-width: 641px) and (max-width: 1024px) {
      width: 100%;
      height: fit-content;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
  }
`
const ContentThreeItemWrap = styled.div`
  width: 100%;
  height: 700px;
  display: grid;
  grid-template-columns: repeat(3, 32.25%);
  grid-template-rows: repeat(2, 48.8%);
  gap: 20px;
`
const ContentThreeItem = styled.div`
  grid-column: ${(props) => props.colum || "1/3"};
  grid-row: ${(props) => props.row || "1/2"};
  background: ${(props) => props.background || "url('./Image/room1.jpg')"};
  background-size: cover;
  background-position: center;
  filter: drop-shadow(0px 0px 1px black);
  position: relative;
  &::before {
    opacity: 0;
    font-family: Score3;
    text-align: center;
    content: "VIEW MORE";
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background: rgba(0,0,0,0.3);
    cursor: pointer;
    top: 0;
    left: 0;
    transition: all .3s;
    font-size: 18px;
  }
  &:hover::before {
    opacity: 1;
  }
`
const ContentFour = styled.div`
  margin-top: 150px;
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  @media (min-width: 641px) and (max-width: 1024px) {
    margin-top: 100px;
  }
`
const ContentFourWrap = styled.div`
  flex-basis: 1200px;
  height: 100%;
  @media (min-width: 641px) and (max-width: 1024px) {
    flex-basis: 800px;
  }
`
const ContentFourTextWrap = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  @media (min-width: 641px) and (max-width: 1024px) {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`
const ContentSwiperWrap = styled.div`
  width: 100%;
  height: 700px;
  display: table;
  table-layout: fixed;
`
const ContentSwiperSlide = styled.div`
  display: table-cell;
  width: 60%;
  height: 100%;
  @media (min-width: 641px) and (max-width: 1024px) {
    width: 40%;
  }
`
const ContentSwiperSlidesItem = styled.div`
  width: 100%;
  height: 700px;
  background: ${(props) => props.background || "none"};
  background-size: cover;
  background-position: center;
`
const ContentSwiperTextWrap = styled.div`
  font-family: Score3;
  display: table-cell;
  width: 40%;
  height: 700px;
  z-index: 1;
  transition: all .5s ease-in-out;
  text-align: center;
  vertical-align: top;
  &.on {
    width: 3%;
    h2, h3, p {
      display: none;
    }
    h1 {
      writing-mode: vertical-lr;
    }
  }
  h1 {
    color: #BD213E;
    transition: all .5s;
    margin-top: 15px;
  }
  h2 {
    transition: all .5s;
    margin-top: 15px;
  }
  h3 {
    transition: all .5s;
    margin-top: 20px;
  }
  p {
    transition: all .5s;
    margin: 0 auto;
    margin-top: 5px;
    width: 70%;
    text-align: justify;
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    width: 42%;
    p {
      width: 80%;
    }
    h1, h2, h3 {
      margin-top: 8px;
    }
  }
`
const ContentSwiperTextWrapItem = styled.div`
  display: none;
  text-align: center;
  &.active {
    display: block;
  }
`
function Main() {
  const IsDesktop = useMediaQuery({ query: "(min-width: 1025px"})
  const IsTablet = useMediaQuery({ query: "(min-width: 641px) and (max-width: 1024px)" });
  
  const [curtainIndex, setCurtainIndex] = useState([]);
  function setCurtainIndexSetter(index) {
    setCurtainIndex(index)
  }
  const [sliderIndex, setSliderIndex] = useState([]);
  function setSliderIndexSetter(index) {
    setSliderIndex(index)
  }
  const [onFineToggle, setonFineToggle] = useState(false);
  function fineClassSetter(){
    setonFineToggle(!onFineToggle)
  }
  
  const languageChanger = useSelector((state) => state.languageChanger.data)
  const [contentCurtainList, setContentCurtainList] = useState([]);
  const [contentList, setContentList] = useState([]);
  const [fineDineList, setFineDineList] = useState([]);

  const fetchList = async() => {
    await axios
      .all([ axios.get('Nav.json'), axios.get('EnNav.json') ])
      .then( axios.spread((res1, res2) => {
        setContentCurtainList( languageChanger === false ? res1.data.contentCurtain : res2.data.contentCurtain);
        setContentList( languageChanger === false ? res1.data.contentItem : res2.data.contentItem);
        setFineDineList( languageChanger === false ? res1.data.fineDine : res2.data.fineDine);
      })
    ); 
  }
  useEffect(() => {
    fetchList();
  }, [languageChanger]);

  return (
    <>
      <MainBackground>
        <ReserveHoverMenu>
          <ReserveHoverMenuSelectionUl>
            <ReserveHoverMenuSelectionLi>People</ReserveHoverMenuSelectionLi>
            <ReserveHoverMenuSelectionLi>Check In</ReserveHoverMenuSelectionLi>
            <ReserveHoverMenuSelectionLi>Check Out</ReserveHoverMenuSelectionLi>
            <ReserveHoverMenuSelectionLi>Room</ReserveHoverMenuSelectionLi>
          </ReserveHoverMenuSelectionUl>
          <h3>RESERVE</h3>
        </ReserveHoverMenu>
      </MainBackground>

      <ContentOne>
        <ContentOneWrap>
          { IsDesktop && <ContentOneItemLobby></ContentOneItemLobby> }
          <ContentOneItemTextWrap>
            { IsDesktop && <p style={{fontSize: "61px", fontWeight: "bold"}}>{languageChanger ? "Jeju Hyatt" : "하얏트 제주만의"}</p> }
            { IsDesktop && <p style={TitleStyle}>{languageChanger ? "Iconic experience" : "특별한 경험"}</p>}
            { IsTablet && <p style={{fontSize: "32px", fontWeight: "bold"}}>{languageChanger ? "Iconic experience" : "이국적인 제주도를"}</p> }
            { IsTablet && <p style={{width: "fit-content", fontSize: "32px", fontWeight: "bold", borderBottom: "2px solid #BD213E", marginBottom: "10px"}}>{languageChanger ? "with Jeju Grand Hyatt" : "그랜드 하얏트 호텔과 함께"}</p>}
            <p>{ languageChanger ? "Formed by volcanic eruptions two million years ago and known as the Hawaii of South Korea, Jeju Island is popular among the local Koreans as a convenient holiday destination. The island has something for everyone during all four seasons. Its natural environment is pristine with heritage sites recognized by UNESCO." : "제주도의 푸른 빛 바다, 수 많은 오름과 한라산의 아름다운 경관, 이국적인 야자수와 동양적인 동백꽃은 새로운 영감을 불어넣습니다 최고의 경험, 로맨틱한 휴일을 그랜드 하얏트에서 보내시길 권해드립니다."}</p>
          </ContentOneItemTextWrap>
          <ContentOneItemOverview></ContentOneItemOverview>
        </ContentOneWrap>
      </ContentOne>

      <ContentTwo>
        <ContentTwoWrap>
          <ContentTwoTextWrap>
            <ContentTwoTitleWrap>
              { IsDesktop && <p style={{fontSize: "61px", fontWeight: "bold"}}>{languageChanger ? "Jeju Hyatt" : "하얏트 제주"}</p> }
              { IsDesktop && <p style={TitleStyle}>{languageChanger ? "Activities" : "편의 시설"}</p>}
              { IsTablet && <p style={{fontSize: "32px", fontWeight: "bold", borderBottom: "2px solid #BD213E", marginBottom: "10px"}}>{languageChanger ? "Hyatt Jeju Resort Activities" : "하얏트 제주 편의 시설"}</p> }
            </ContentTwoTitleWrap>
              <p style={{marginBottom: "15px", width: "60%"}}>{languageChanger ? "With world class premium resort activity facilities Hyatt jeju provides,we put best effort to serve you to have a wonderful holidays." : "제주 하얏트 호텔이 제공하는 세계적인 프리미엄 편의 시설과 함께 특별한 휴가를 보내실 수 있도록 최선을 다하고 있습니다."}</p>
          </ContentTwoTextWrap>
          <ContentTwoCurtainWrap>
          {
            contentCurtainList.map((e, index) => {
              return <ContentTwoCurtainItem onMouseOver={() => setCurtainIndexSetter(index)} key={e.id} background={e.src}><p>{e.title}</p></ContentTwoCurtainItem>
            })
          }
          </ContentTwoCurtainWrap>
          <ContentTwoCurtainDesc>
            {
              contentList.map((e, index) => {
                return <ContentTwoCurtainDescItem className={ (curtainIndex === index) ? "active" : null } key={e.id}><ContentTwoCurtainDescItemTitle><p>{e.subtitle}</p><h3>{e.title}</h3></ContentTwoCurtainDescItemTitle><p>{e.itemdesc}</p></ContentTwoCurtainDescItem>
              })
            }
          </ContentTwoCurtainDesc>
        </ContentTwoWrap>
      </ContentTwo>

      <ContentThree>
        <ContentThreeWrap>
          <ContentThreeTextWrap>
            { IsDesktop && <p style={TitleStyle}>{languageChanger ? "Rooms" : "객실 안내"}</p> }
            { IsTablet && <p style={{fontSize: "32px", fontWeight: "bold", borderBottom: "2px solid #BD213E", marginBottom: "10px"}}>{languageChanger ? "Rooms" : "객실 안내"}</p> }
            <p style={{marginLeft: "30px", marginBottom: "10px", width: "60%"}}>{languageChanger ? "Jeju's Pristine scene with Hyatt's unique pathos" : "제주의 아름다운 경관을 하얏트만의 특별한 감성과 함께."}</p>
          </ContentThreeTextWrap>
          <ContentThreeItemWrap>
            <ContentThreeItem></ContentThreeItem>
            <ContentThreeItem colum={"3/4"} row={"1/2"} background={"url('Image/room2.jpg')"}></ContentThreeItem>
            <ContentThreeItem colum={"1/2"} row={"2/3"} background={"url('Image/room3.jpg')"}></ContentThreeItem>
            <ContentThreeItem colum={"2/4"} row={"2/3"} background={"url('Image/room4.jpg')"}></ContentThreeItem>
          </ContentThreeItemWrap>
        </ContentThreeWrap>
      </ContentThree>

      <ContentFour>
        <ContentFourWrap>
          <ContentFourTextWrap>
            { IsDesktop && <p style={TitleStyle}>{languageChanger ? "Fine Dining" : "파인 다이닝"}</p> }
            { IsTablet && <p style={{fontSize: "32px", fontWeight: "bold", borderBottom: "2px solid #BD213E", marginBottom: "10px"}}>{languageChanger ? "Fine Dining" : "파인 다이닝"}</p> }
            <p style={{marginLeft: "30px", marginBottom: "10px", width: "60%"}}>{ languageChanger ? "Indulge in a plethora of international cuisines, featuring local and international favorites." : "그랜드 하얏트에서 제공하는 특별한 만찬"}</p>
          </ContentFourTextWrap>
          <ContentSwiperWrap>
            <ContentSwiperSlide>
              <Swiper
                onClick={fineClassSetter}
                onSlideChange={(e) => setSliderIndexSetter(e.realIndex)}
                style={{ width: "100%", height: "100%", display: "flex", justifyContent: "flex-end", marginLeft: "0px"}}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                loopedSlides={1}>
                <SwiperSlide><ContentSwiperSlidesItem background="url('Image/casino.jpg')" /></SwiperSlide>
                <SwiperSlide><ContentSwiperSlidesItem background="url('Image/china.jpg')" /></SwiperSlide>
                <SwiperSlide><ContentSwiperSlidesItem background="url('Image/grandkit.jpg')" /></SwiperSlide>
                <SwiperSlide><ContentSwiperSlidesItem background="url('Image/hotpot.jpg')" /></SwiperSlide>
                <SwiperSlide><ContentSwiperSlidesItem background="url('Image/noknamu.jpg')" /></SwiperSlide>
                <SwiperSlide><ContentSwiperSlidesItem background="url('Image/pocha.jpg')" /></SwiperSlide>
                <SwiperSlide><ContentSwiperSlidesItem background="url('Image/steakhouse.jpg')" /></SwiperSlide>
                <SwiperSlide><ContentSwiperSlidesItem background="url('Image/yume.jpg')" /></SwiperSlide>
              </Swiper>
            </ContentSwiperSlide>
            <ContentSwiperTextWrap className={(onFineToggle === true && 'on')}>
              { 
                fineDineList.map((e, index) => {
                  return <ContentSwiperTextWrapItem className={(sliderIndex === index) ? "active" : null} key={e.id}>
                    <h1>{e.title}</h1>
                    <p>{e.titleDesc}</p>
                    <h2>{languageChanger ? "Hours" : "운영 시간"}</h2>
                    <h3>{languageChanger ? "Breakfast" : "조식"}</h3>
                    <p style={{textAlign: "center"}}>{e.breakf}</p>
                    <h3>{languageChanger ? "Lunch" : "런치"}</h3>
                    <p style={{textAlign: "center"}}>{e.lunch}</p>
                    <h3>{languageChanger ? "Dinner" : "디너"}</h3>
                    <p style={{textAlign: "center"}}>{e.dinner}</p>
                    <h3>{e.loc}</h3>
                    </ContentSwiperTextWrapItem>
                })
              }
            </ContentSwiperTextWrap>
          </ContentSwiperWrap>
        </ContentFourWrap>
      </ContentFour>
    </>
  )
}

export default Main