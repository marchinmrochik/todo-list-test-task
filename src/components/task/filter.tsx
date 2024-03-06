import { Select, MenuItem } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter, selectFilter } from '../../redux/features/tasks/tasks-slice'
import { FilterType, FiltersStatus } from '../../types/index'

export const TaskFilter = (): JSX.Element => {
  const dispatch = useDispatch()
  const filter = useSelector(selectFilter)

  const handleFilterChange = (newFilter: FilterType):void => {
    dispatch(setFilter(newFilter))
  }

  return (
    <Select
      sx={{ minWidth: 130 }}
      value={filter}
      onChange={
        (event):void => handleFilterChange(event.target.value as FilterType)
      }>
      <MenuItem value={FiltersStatus.ALL}>All</MenuItem>
      <MenuItem value={FiltersStatus.COMPLETED}>Completed</MenuItem>
      <MenuItem value={FiltersStatus.CURRENT}>Current</MenuItem>
    </Select>
  )
}
