import React, { useState } from 'react'

const AddForm = ({ onAdd }) => {
  const [task, setTask] = useState('')
  return (
    <div className='add-form'>
      <form onSubmit={(e) => onAdd(e, task)}>
        <input
          type='text'
          value={task}
          onChange={(e) => {
            const { value } = e.target
            setTask(value)
          }}
        />
        <button>Add</button>
      </form>
    </div>
  )
}

export default AddForm
