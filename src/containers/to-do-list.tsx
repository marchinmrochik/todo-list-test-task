import { useSelector } from 'react-redux'
import {
  selectCompletedCount,
  selectUncompletedCount,
} from '../redux/features/tasks/tasks-slice'
import { Container, Typography, Box } from '@mui/material'
import { TaskForm } from '../components/task/form'
import { TaskFilter } from '../components/task/filter'
import { TaskList } from '../components/task/list'

const ToDoList = (): JSX.Element => {
  const completedCount = useSelector(selectCompletedCount)
  const uncompletedCount = useSelector(selectUncompletedCount)

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography
        variant="h5"
        align='center'
        sx={{ mb: 2 }}
      >
        ToDo List
      </Typography>
      <TaskForm/>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mt: 2 }}>
        <Box>
          <Typography color='#4caf50' variant='body1'>
            Completed: {completedCount}
          </Typography>
          <Typography color='red' variant='body1'>
            Uncompleted: {uncompletedCount}
          </Typography>
        </Box>
        <TaskFilter/>
      </Box>
      <TaskList />
    </Container>
  )
}

export default ToDoList
