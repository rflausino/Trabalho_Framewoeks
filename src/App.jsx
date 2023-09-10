import React from "react"
import { Header } from './componentes/Header'
import banner from './imagens/banner.jpg'
import styles from './styles.module.css'
import './styles/global.css'
import card1 from './imagens/card1.jpg'
import card2 from './imagens/card2.jpg'
import card3 from './imagens/card3.jpg'
import card4 from './imagens/card4.jpg'
import { Card } from "./componentes/Card"
import { Footer } from "./componentes/Footer"

// https://github.com/profchines
function App() {
  return (
    <>
        <Header/>
        <img width="100%" src={banner} />
      <h1 className={styles.title}>Hello World</h1>
      <h1
        style={{
          color: 'blue',
          backgroundColor: 'red',
        }}

      >5 min pro intervalo</h1>
      <p>Primeira aula de react</p>
      <Card img={card1} titulo='Titulo impossivel'/>
      <Card img={card2} titulo='Titulo impossivel two'/>
      <Card img={card3} titulo='Titulo impossivel three'/>
      <Card img={card4} titulo='Titulo impossivel four'/>

      <Footer />
    </>

  );
}

export default App;

