import React, { useState } from 'react'
import List from '../List'

const EditableList = ({ list = [], onUpdate, onDelete }) => {
  const [isEditingId, setIsEditingId] = useState(-1)
  const [editTask, setEditTask] = useState('')

  const handleEdit = (id, toBeUpdatedTask) => {
    setIsEditingId(id)
    setEditTask(toBeUpdatedTask)
  }

  const handleEditTask = (value) => {
    setEditTask(value)
  }

  const handleUpdate = (id, task) => {
    onUpdate(id, task)
    setIsEditingId(-1)
  }

  return (
    <List
      list={list}
      isEditingId={isEditingId}
      editTask={editTask}
      onEdit={handleEdit}
      onUpdate={handleUpdate}
      onDelete={onDelete}
      onEditTask={handleEditTask}
    />
  )
}

export default EditableList
