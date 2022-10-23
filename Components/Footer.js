import React from 'react'
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
    width: 40%;
    height: 70%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    font-size: 12px;
`
const FooterInfosSmall = styled.div`
    width: 70%;
    height: 50px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`
function Footer() {
    return (
        <>
            <FooterFooter>
                <FooterLogoWrap>
                    <FooterLogo src='../Image/woh-horizontal_ol.svg' alt='flogo'></FooterLogo>
                </FooterLogoWrap>
                <FooterWrap>
                    <FooterInfos>
                        <FooterInfosItem>
                            <il>그랜드 하얏트 제주</il>
                            <il>제주시 노연로 12. 제주. 대한민국. 63082</il>
                            <il>전화: +82 64 907 1234 | 팩스: +82 64 907 1235 | jeju.grand@hyatt.com</il>
                            <il>영상정보처리기기 운영관리방침</il>
                        </FooterInfosItem>
                        <FooterInfosItem>
                            <li>사업자등록번호: 101-81-10173</li>
                            <li>통신판매업신고: 제 2020-제주노형-0197 호</li>
                            <li>대표자: 김기병, 백현, 김한준</li>
                        </FooterInfosItem>
                    </FooterInfos>
                </FooterWrap>
                <FooterInfosSmall>
                    <FooterInfosItem style={{width: "80%", height: "50px", flexDirection: "row", fontSize: "12px", justifyContent: "space-evenly"}}>
                        <li>개인정보 보호정책</li>
                        <li>이용 약관</li>
                        <li>쿠키 센터</li>
                        <li>보안 및 안전</li>
                        <li>현대판 노예제 및 인신매매</li>
                        <li>본인의 개인정보를 판매하지 마십시오</li>
                        <li>2022 Hyatt Corporation</li>
                    </FooterInfosItem>
                    <FooterLogo src='../Image/Grand_Hyatt_logo.svg.png' alt='ftlogo' style={{width: "270px", height: "50px", transform: "translateY(-60%)"}}></FooterLogo>
                </FooterInfosSmall>
            </FooterFooter>
        </>
    )
}

export default Footer