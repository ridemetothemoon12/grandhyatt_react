import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

const FooterFooter = styled.div`
    font-family: Score3;
    margin-top: 150px;
    width: 100%;
    height: 250px;
`
const FooterWrap = styled.div`
    width: 100%;
    height: 160px;
    background-color: #A5BFF8;
`
const FooterLogoWrap = styled.div`
    width: 70%;
    height: 50px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const FooterLogo = styled.img``
const FooterInfos = styled.div`
    width: 70%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const FooterInfosItem = styled.ul`
    width: 80%;
    height: 70%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex-wrap: wrap;
    font-size: 12px;
    li {
        padding: 5px 0;
    }
`
const FooterInfosSmall = styled.div`
    width: 75%;
    height: 50px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`
function Footer() {
    const IsDesktop = useMediaQuery({ query: "(min-width: 1025px"})
    const languageChanger = useSelector((state) => state.languageChanger.data)

    const [footerInfosTop, setFooterInfosTop] = useState([]);
    const [footerInfosBottom, setFooterInfosBottom] = useState([]);

    const fetchList = async() => {
        await axios
        .all([ axios.get('Nav.json'), axios.get('EnNav.json')])
        .then( axios.spread((res1, res2) => {
            setFooterInfosTop( languageChanger === false ? res1.data.footerTop : res2.data.footerTop)
            setFooterInfosBottom( languageChanger === false ? res1.data.footerBottom : res2.data.footerBottom)
            })
        )
    }
    useEffect(() => {
        fetchList();
    }, [languageChanger]);
    return (
        <>
            <FooterFooter>
                <FooterLogoWrap>
                    <FooterLogo src='../Image/woh-horizontal_ol.svg' alt='flogo'></FooterLogo>
                </FooterLogoWrap>
                <FooterWrap>
                    <FooterInfos>
                        <FooterInfosItem>
                            {
                                footerInfosTop.map((e) => {
                                    return <li key={e.id}>{e.content}</li>
                                })
                            }
                        </FooterInfosItem>
                    </FooterInfos>
                </FooterWrap>
                { IsDesktop && <FooterInfosSmall>
                    <FooterInfosItem style={{width: "80%", height: "50px", flexDirection: "row", fontSize: "12px", justifyContent: "space-evenly"}}>
                        {
                            footerInfosBottom.map((e) => {
                                return <li key={e.id}>{e.content}</li>
                            })
                        }
                        <li>2022 Hyatt Corporation</li>
                    </FooterInfosItem>
                    <FooterLogo src='../Image/Grand_Hyatt_logo.svg.png' alt='ftlogo' style={{width: "270px", height: "50px", transform: "translateY(-60%)"}}></FooterLogo>
                </FooterInfosSmall>}
            </FooterFooter>
        </>
    )
}

export default Footer