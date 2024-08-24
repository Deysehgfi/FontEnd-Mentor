import styled from "styled-components"


const Cores = {
   LightSlateBlue: "hsl(252, 100%, 67%)",
   LightRoyalBlue: "hsl(241, 81%, 54%)",
   VioletCircule: "rgb(78, 33, 202)",
   PersianBlueCircule:  "rgb(36, 33, 202)",
   White:"hsl(0, 0%, 100%)",
   PaleBlue: "hsl(221, 100%, 96%)",
   LightLavender: "hsl(241, 100%, 89%)",
   DarkGrayBlue: "hsl(224, 30%, 27%)",
   LightRed: "hsl(0, 100%, 67%)",
   Red: "#fff0ed"
}
// ### Primary

// - Light red: hsl(0, 100%, 67%)
// - Orangey yellow: hsl(39, 100%, 56%)
// - Green teal: hsl(166, 100%, 37%)
// - Cobalt blue: hsl(234, 85%, 45%)


export const Body = styled.body`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
`

export const BoxResults = styled.div`
width: 50%;
background:linear-gradient(to top, ${Cores.LightRoyalBlue}, ${Cores.LightSlateBlue});
display: flex;
flex-direction: column;
align-items: center;
border-radius: 30px;
padding: 30px;
gap: 25px;
`

export const ContainerBox = styled.div`
width: 700px;
height: 500px;
   display:flex;
   border-radius: 30px;
   overflow: hidden;
   box-shadow: 5px 10px 10px ${Cores.LightLavender};
`


export const BoxNumber = styled.div`
background: linear-gradient(to bottom, ${Cores.VioletCircule}, ${Cores.LightRoyalBlue});
border-radius: 50%;
padding:20px;
width: 150px;
height: 150px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const BoxSummmary = styled.div`
width: 50%;
display: flex;
flex-direction: column;
`

export const Number = styled.h1`
color: ${Cores.White};
font-size: 80px;
`

export const Text = styled.p`
color: ${Cores.LightLavender};
font-family: "Hanken Grotesk", sans-serif;
font-size: 20px;
font-weight: 400;
text-align: center;
width: 250px;
`

export const Titulo = styled.h1`
color: ${Cores.White};
font-family: "Hanken Grotesk", sans-serif;
font-weight: 500px;
`

export const BoxTextSumarry = styled.div`
display: flex;
flex-direction: column;
gap: 20px;

`

export const InfoSumarry = styled.div`
display: flex;
flex-direction: column;
gap: 25px;
padding: 30px;
`

export const ConteudoBox = styled.h3`
display: flex;
justify-content: space-between;
padding: 15px;
border-radius: 10px;
background-color:${Cores.Red} ;
`

export const Categoria = styled.h4`
color: ${Cores.LightRed};
font-family: "Hanken Grotesk", sans-serif;
`
export const Score = styled.p`
color: ${Cores.DarkGrayBlue};
font-family: "Hanken Grotesk", sans-serif;
`

export const TituloSummary = styled.h1`
color: ${Cores.DarkGrayBlue};
font-size: 25px;


`

export const Botao = styled.button`
color: ${Cores.White};
padding: 15px;
border-radius: 30px;
border: none;
font-size: 18px;
cursor: pointer;

background-color: ${Cores.DarkGrayBlue};
transition: .3s;

&:hover{
   background-color: ${Cores.LightLavender};
   color: ${Cores.DarkGrayBlue};
}
`