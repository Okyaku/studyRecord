import { useState } from 'react'
import './App.css'

function App() {
  const [count,setcount] = useState('')
  const [time,settime] = useState('')
  const [error,seterror] = useState('')

  const handleClick = () => {
    if (count ==='',time === '') {
      seterror('Please enter a valid number')
      return
    }
    seterror('')
    alert(`:学習内容 ${count}, 時間: ${time}`)
  }
  const rowStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10px'
  }
  
  return (
    <>
    <div style={{textAlign: 'center'}}>
      {error}
    </div>
    <div style={rowStyle}>
      <span>学習内容</span>
      <input
      placeholder="学習内容を入力してください"
      value={count}
      onChange={(e) => setcount(e.target.value)}
      />
    </div>
    <div style={rowStyle}>
      <span>学習時間</span>
      <input
      placeholder="学習時間を入力してください"
      value={time}
      onChange={(e) => settime(e.target.value)}
      />
    </div>
    <div style={rowStyle}>
    <button onClick={handleClick}>登録</button>
    </div>
    </>
  )
}

export default App