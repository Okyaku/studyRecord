import { useState } from 'react'
import './App.css'

function App() {
  const [content, setContent] = useState('')
  const [time, setTime] = useState('')
  const [recordContent, setrecordContent] = useState([])

  const handleRegister = () =>  {
    if (content === '' || time === '') {
      alert('学習内容と学習時間を入力してください')
    return }
      alert(`学習内容: ${content}\n学習時間: ${time}分`)

  const newRecodeContent = {
    content: content,
    time: time
  }
  setrecordContent([...recordContent, newRecodeContent])
  setContent('')
  setTime('')
  }


  const rowstyle = {
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center', 
     gap: '10px', 
     marginBottom: '20px'
  }
  
  return (
    <>
      {/* display: 'flex' を追加して横並びに */}
      <div style={rowstyle}>
        {/* pタグだとデフォルトで上下に余白がつくので、spanタグに変更するとキレイに揃います */}
        <span>学習内容</span>
        <input 
          type="text" 
          placeholder="学習内容を入力してください" 
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      
      <div style={rowstyle}>
        <span>学習時間</span>
        <input 
          type="text" 
          placeholder="学習時間を入力してください" 
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <span>分</span>
      </div> 
      <div style={rowstyle}>
        <span>入力されている学習内容:</span>
        <span>{content}</span>
      </div>
      <div style={rowstyle}>
        <span>入力されている学習時間:</span>
        <span>{time}</span>
      </div>
      <div style={rowstyle}>
        <button onClick={handleRegister}>登録</button>
      </div>
      <div style={rowstyle}>
        <span>登録された学習内容:</span>
        <ul>
          {recordContent.map((record, index) => (
            <li key={index}>
              学習内容: {record.content}, 学習時間: {record.time}分
            </li>
          ))}
        </ul>
      </div>

    </>
  )
}

export default App