import React from "react";
import { useState, useEffect} from "react";
import JsonData from "./data.json"
import {motion} from "framer-motion"

import Iconimg from "./assets/images/icon-reaction.svg"
import { Body, BoxNumber, BoxResults, BoxSummmary, ContainerBox, Number, Text, Titulo, BoxTextSumarry, InfoSumarry, TituloSummary, ConteudoBox, Categoria, Score, Botao} from "./styled/Container.js";

const Container = () => {

const [number, setNumber] = useState('')
const [ DadosJson, setDadosJson] = useState([])

// setNumber(data[0].score) -> o setNumber nao pode ficar aqui setNumber(data[0].score)
useEffect(()=>{
    setDadosJson(JsonData)
    // setNumber(Data[0].score)  //toda vez que a pagina processar ele atualizara, Evitando a atualização direta, somente quando a página atulizar 
    // setCategoriaata[0].category)
    setNumber(JsonData[3].score)
})

console.log(DadosJson)

    return(
    <Body>
        <motion.div initial={{x:100}} animate={{x:0}} transition={{duration:0.8}} className="Container-box">
            <BoxResults>
                <Text>Your Results</Text>
                <BoxNumber>
                    <Number>{number}</Number>
                </BoxNumber>
                <Titulo>Great</Titulo>
                <Text>You scored higher than 65% of the people who have taken these tests.</Text>
            </BoxResults>
            <BoxSummmary>
                <InfoSumarry>
                    <TituloSummary>Summary</TituloSummary>
                    <BoxTextSumarry> {DadosJson.map((dados) => (
                        
                        <ConteudoBox>
                            <motion.img animate={{x:10}} src={Iconimg} alt=""/>
                        <Categoria>{dados.category}</Categoria>
                        <Score><strong>{dados.score}</strong>/100</Score>
                        </ConteudoBox>
            ))}
                    </BoxTextSumarry>

<Botao>Continue</Botao>
                </InfoSumarry>
            </BoxSummmary>
        </motion.div>
    </Body>
    )
}

export default Container;