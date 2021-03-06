import styled from 'styled-components';
export const AboutSection = styled.div`
    height: 500px;
    background: url("/images/creative/naser.jpg");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    @media (max-width:991px) {
        height: auto}
`

export const AboutInfo = styled.div`
    
    width: 50%;
    float: right;
    @media (max-width:991px) {
        width: 100%;
        padding-top: 10px;
        float: none;
    }
`

export const AboutInfoTitle = styled.h2`
    font-weight: bold;
    font-size: 50px
`
export const AboutInfoTitleSpan = styled.span`
    font-weight: normal
`

export const AboutInfoDir = styled.h4`
    font-size: 40px;
    color: #eb5424;
    margin-bottom: 20px
    @media (max-width:991px) {
        font-size: 30px
    }
`

export const AboutInfoDesc = styled.p`
    color: #000;
    margin-bottom: 15px;
    line-height: 1.8;
    overflow:hidden
`

export const AboutInfoDescAchnor = styled.a`
    text-decoration: none
`