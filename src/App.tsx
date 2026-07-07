import { useState } from 'react'
import type { FormEvent } from 'react'
import { useTasks } from './useTasks'
import './App.css'

function App() {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks()
  const [inputText, setInputText] = useState('')

  // フォーム送信時にタスクを追加し、入力欄をクリアする
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    addTask(inputText)
    setInputText('')
  }

  return (
    <div className="taskboard">
      <h1>タスクボード</h1>

      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
          placeholder="新しいタスクを入力"
          aria-label="新しいタスク"
        />
        <button type="submit">追加</button>
      </form>

      <ul className="task-list">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={task.completed ? 'task-item completed' : 'task-item'}
          >
            <label className="task-label">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <span>{task.text}</span>
            </label>
            <button
              type="button"
              className="delete-button"
              onClick={() => deleteTask(task.id)}
              aria-label={`${task.text}を削除`}
            >
              削除
            </button>
          </li>
        ))}
      </ul>

      {tasks.length === 0 && <p className="empty-message">タスクはまだありません</p>}
    </div>
  )
}

export default App
