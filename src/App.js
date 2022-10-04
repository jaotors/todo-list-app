import React, { useState } from 'react'

import List from './components/List'

import './App.css'
import SearchForm from './components/SearchForm'
import AddForm from './components/AddForm/AddForm'

const MOCK_TODO_LIST = [
  {
    id: 1, // unique
    task: 'any thing',
    completed: false
  },
  {
    id: 2,
    task: 'any thing2',
    completed: false
  },
  {
    id: 3,
    task: 'any thing3',
    completed: false
  }
]

// US
function App() {
  const [todoList, setTodoList] = useState(MOCK_TODO_LIST)
  const [isEditingId, setIsEditingId] = useState(-1)
  const [editTask, setEditTask] = useState('')
  const [search, setSearch] = useState('')

  const handleAdd = (e, task) => {
    e.preventDefault()
    const taskObj = {
      id: new Date().getTime(),
      task: task,
      completed: false
    }
    setTodoList([...todoList, taskObj])
  }

  const handleDelete = (id) => {
    setTodoList(
      todoList.filter((todo) => {
        return todo.id !== id
      })
    )
  }

  const handleEdit = (id, toBeUpdatedTask) => {
    setIsEditingId(id)
    setEditTask(toBeUpdatedTask)
  }

  const handleUpdate = (id) => {
    const updatedList = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          task: editTask
        }
      }

      return todo
    })

    setTodoList(updatedList)
    setIsEditingId(-1)
  }

  const handleSearch = (e) => {
    const { value } = e.target
    setSearch(value)
  }

  return (
    <div className='App'>
      <AddForm onAdd={handleAdd} />
      <SearchForm search={search} onSearch={handleSearch} />
      <List
        list={todoList}
        onEdit={handleEdit}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        isEditingId={isEditingId}
        editTask={editTask}
        onEditTask={setEditTask}
      />
    </div>
  )
}

export default App
