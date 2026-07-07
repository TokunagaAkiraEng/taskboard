import { useEffect, useState } from 'react'
import type { Task } from './types'

const storageKey = 'taskboard-app.tasks'

// 初回読み込み時にlocalStorageから保存済みタスクを復元する
function loadTasks(): Task[] {
  const raw = localStorage.getItem(storageKey)
  if (!raw) return []
  try {
    return JSON.parse(raw) as Task[]
  } catch {
    return []
  }
}

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(loadTasks)

  // タスクが変化するたびにlocalStorageへ保存する
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(tasks))
  }, [tasks])

  function addTask(text: string) {
    const trimmedText = text.trim()
    if (!trimmedText) return

    const newTask: Task = {
      id: crypto.randomUUID(),
      text: trimmedText,
      completed: false,
    }
    setTasks((prevTasks) => [...prevTasks, newTask])
  }

  function toggleTask(id: string) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  function deleteTask(id: string) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
  }

  return { tasks, addTask, toggleTask, deleteTask }
}
