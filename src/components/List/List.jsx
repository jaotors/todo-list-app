import React from 'react'

const List = ({
  list,
  onUpdate,
  onEdit,
  onDelete,
  onEditTask,
  isEditingId,
  editTask
}) => {
  return (
    <div className='todo-list'>
      <ul>
        {list.map((todo) => {
          return (
            <li key={todo.id}>
              <span>
                {isEditingId === todo.id ? (
                  <input
                    type='text'
                    value={editTask}
                    onChange={(e) => {
                      const { value } = e.target
                      onEditTask(value)
                    }}
                    onBlur={() => {
                      onUpdate(todo.id)
                    }}
                  />
                ) : (
                  todo.task
                )}
              </span>
              {todo.id === isEditingId ? (
                <button onClick={() => onUpdate(todo.id)}>Update</button>
              ) : (
                <button onClick={() => onEdit(todo.id, todo.task)}>Edit</button>
              )}
              <button
                onClick={() => {
                  onDelete(todo.id)
                }}
              >
                Delete
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default List
