import { List } from '@mui/material'
import { useSelector } from 'react-redux'
import {
  selectTasks,
  selectFilter,
} from '../../redux/features/tasks/tasks-slice'
import TaskListItem from './list-item'
import { FiltersStatus } from '../../types/index'

export const TaskList = (): JSX.Element => {
  const tasks = useSelector(selectTasks)
  const filter = useSelector(selectFilter)

  return (
    <List>
      {tasks
        .filter((task) => {
          if (filter === FiltersStatus.COMPLETED) return task.completed
          if (filter === FiltersStatus.CURRENT) return !task.completed
          return true
        })
        .map((task, index) => {
          return <TaskListItem
            index={index}
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
          />
        })}
    </List>
  )
}
