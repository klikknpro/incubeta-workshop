import { useState } from 'react'
import './App.css'
import '../node_modules/react-vis/dist/style.css'
import { XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis } from 'react-vis'

function App() {
  const updateData = () => {
    setMeta([
      { x: 0, y: 8 },
      { x: 1, y: 5 },
      { x: 2, y: 4 },
      { x: 3, y: 9 },
    ])
  }
  const [meta, setMeta] = useState(() => [
    { x: 0, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 8, y: 2 },
    { x: 9, y: 0 },
  ])
  const [dv360, setDv360] = useState(() => [
    { x: 0, y: 20 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 7, y: 23 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 2, y: 6 },
    { x: 9, y: 0 },
  ])

  return (
    <div className='App'>
      <p>Lets put a chart here</p>
      <button onClick={updateData}>Update meta data</button>
      <XYPlot
        height={300}
        width={300}
      >
        <XAxis />
        <YAxis />
        <LineSeries data={meta} />
        {/* <LineSeries data={dv360} /> */}
      </XYPlot>
    </div>
  )
}

export default App
