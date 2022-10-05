import React, { useState } from 'react'

import './App.css'
import SearchForm from './components/SearchForm'
import AddForm from './components/AddForm/AddForm'
import FilterableEditablelist from './components/FilterableEditableList/FilterableEditableList'

const MOCK_TODO_LIST = [
  {
    id: 1, // unique
    task: 'any thing',
    completed: false,
  },
  {
    id: 2,
    task: 'any thing2',
    completed: false,
  },
  {
    id: 3,
    task: 'any thing3',
    completed: false,
  },
]

function App() {
  const [todoList, setTodoList] = useState(MOCK_TODO_LIST)
  const [search, setSearch] = useState('')

  const handleAdd = (e, task) => {
    e.preventDefault()
    const taskObj = {
      id: new Date().getTime(),
      task: task,
      completed: false,
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

  const handleUpdate = (id, updatedTask) => {
    const updatedList = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          task: updatedTask,
        }
      }

      return todo
    })

    setTodoList(updatedList)
  }

  const handleSearch = (e) => {
    const { value } = e.target
    setSearch(value)
  }

  return (
    <div className='App'>
      <AddForm onAdd={handleAdd} />
      <SearchForm search={search} onSearch={handleSearch} />
      <FilterableEditablelist
        list={todoList}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        keyword={search}
      />
    </div>
  )
}

export default App
