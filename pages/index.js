import styled from 'styled-components'
import {Bar, Doughnut, Pie, Line} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'
import React, {useEffect } from "react"


const Principal = styled.div`
position: absolute;
top: 10vh;
width: 100%;
height: 90%;
display: flex;
justify-content: space-around;
.Barra{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30vw;
  height: 30vh;
}
.Pizza{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20vw;
  height: 20vh;
}
.Linha{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30vw;
  height: 30vh;
}
`;

export default function Home() {
  const valores = [12, 19, 3, 5, 2, 3]
  var media = 0
  const [valoresVariancia, setValoresVariancia] = React.useState([])
  useEffect(() => (
    
    valores.map((x) => (media = media + x)),
    media = media/valores.length, console.log(media),
    setValoresVariancia(valores.map((x) => (Math.abs(x - media)))), 
    console.log(valoresVariancia)

  ),[])
  
  const nomes = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
  const backgroundColor = [
    'rgba(255, 99, 132, 0.3)',
    'rgba(54, 162, 235, 0.3)',
    'rgba(255, 206, 86, 0.3)',
    'rgba(75, 192, 192, 0.3)',
    'rgba(153, 102, 255, 0.3)',
    'rgba(255, 159, 64, 0.3)'
  ]
  const borderColor = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
  ]

  const data = {
    labels: nomes,
    datasets: [{
      label: '# of Votes',
      data: valores,
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      borderWidth: 1
    }]
  }

  const dataLinha = {
    labels: nomes,
    datasets: [{
      label: '# of Votes',
      data: valores,
      backgroundColor: backgroundColor,
      //borderColor: borderColor,
      borderWidth: 1,
      fill: true
    }]
  }
  var dataLinhaVariancia = {
    labels: nomes,
    datasets: [{
      label: 'Desvio de cada um da média',
      data: valoresVariancia,
      backgroundColor: backgroundColor,
      //borderColor: borderColor,
      borderWidth: 1,
      fill: true
    }]
  }
  return (
    <Principal>
      <div className='Barra'>
      
        <h2>Teste com Barras</h2>
        
    <Bar
      data={data}
      width={400}
      height={200}
      options={{
        maintainAspectRatio: false
      }}
    />
      </div>
      <div className='Pizza'>
      <h2>Teste com Doughnut</h2>
      <Doughnut
            data={data}
/>
      </div>

      <div className='Linha'>
      <h2>Teste com Linha</h2>

      <Line data={dataLinha}/>
      <Line
            data={dataLinhaVariancia}
            width={400}
            height={200}
/>
      </div>

  </Principal>
  )
}
