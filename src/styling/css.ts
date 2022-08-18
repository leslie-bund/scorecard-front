import styled from "styled-components"

export const Heading = styled.h3`
font-weight: 600;
font-size: 32px;
line-height: 39px;
color: #03435F;
text-align: center;
`

export const Paragraph = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #BDBDBD;
padding: 2rem 2.5rem 0.1rem 2.5rem;
`

export const HorizontalLine = styled.div`
border: 1px solid #D9D9D9
`

export const Label = styled.label`
 margin-bottom: 0.5rem;
 color: #03435F;
 display: block;
`
export const Input = styled.input`
 border: 0.15rem solid rgba(33, 51, 79, 0.15);
 color: #21334F;
 width: calc(100% - 1.5rem);
 padding: 0.4rem 0.5rem;
 display: inline-block;
 font-size: 0.9rem;
 line-height: 1.5rem;
 height: 1.3rem;
`

export const ButtonBody = styled.button`

&:hover{
background: #249800;
}
width: calc(100% - 0.21rem);
font-weight: 500;
font-size: 1rem;
line-height: 1.5rem;
border: unset;
padding: 0.8rem;
text-align: center;
color: #fff;
margin: 0.4rem 0;
background: #14A800;
cursor: pointer
`

export const CardBody = styled.div`
 background: #fff;
 width: 50%;
 height: 80vh;
 margin: 3rem auto 0;
`