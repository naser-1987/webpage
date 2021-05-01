import styled from 'styled-components';
export const ProfileSkill= styled.div`
    padding: 50px 0;
    overflow: hidden;
`

export const ProfileSection= styled.div`
    width: 50%;
    float: left;
    @media (max-width:768px) {
        width: 100%;
        float: none; 
        margin-bottom: 20px
    }
`

export const ProfileTitleSpan= styled.span`
font-weight: normal;
`
export const ProfileSkillSpan= styled.span`
font-weight: normal;
`
export const ProfileList= styled.ul`
    list-style: none
`

export const ProfileListItem= styled.li`
    margin-bottom: 8px
`

export const ProfileItemSpan= styled.span`
    display: inline-block;
    width: 100px;
    font-weight: bold
`

export const ProfileItemWebSpan= styled.span`
    font-weight: normal;
    color: #eb5424
`

export const Skills = styled.div`
    width: 50%;
    float: left;
    @media (max-width:768px) {
        width: 100%;
        float: none
    }
`

export const SkillsDesc = styled.h2`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`
export const SkillsBar = styled.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`

export const SkillsBarTitle = styled.span`
    float: left;
`

export const SkillsBarPrec= styled.span `
    float: right;
`

export const SkillsBarParent= styled.div`
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px
`

export const SkillsBarParentSpan= styled.span` 
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width :${(props)=>props.id}%
`

export const ProfileTitle= styled.h2`
    font-size: 40px; 
    margin-bottom: 20px
`
export const SkillsTitle= styled.h2`
font-size: 40px; 
margin-bottom: 20px
`