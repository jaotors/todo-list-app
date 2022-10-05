import React, { useState, useEffect } from 'react'
import EditableList from '../EditableList/EditableList'

const FilterableEditablelist = ({
  list = [],
  keyword = '',
  onUpdate,
  onDelete,
}) => {
  const [filterableList, setFilterableList] = useState(list)

  useEffect(() => {
    if (keyword === '') {
      setFilterableList(list)
    } else {
      setFilterableList(list.filter((item) => item.task.includes(keyword)))
    }
  }, [keyword, list])

  return (
    <EditableList
      list={filterableList}
      onUpdate={onUpdate}
      onDelete={onDelete}
    />
  )
}

export default FilterableEditablelist
