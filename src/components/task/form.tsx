import { useState, useEffect } from 'react'
import { Box, TextField, Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { addTask } from '../../redux/features/tasks/tasks-slice'
import { MAX_LENGTH } from '../../utils/constants'

export const TaskForm = (): JSX.Element => {
  const [newTask, setNewTask] = useState('')
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    setIsButtonDisabled(
      newTask.trim().length === 0 || newTask.length > MAX_LENGTH,
    )
  }, [newTask])

  const handleAddTask = (): void => {
    if (isButtonDisabled) return

    dispatch(addTask(newTask))
    setNewTask('')
  }

  return (
    <Box display="flex">
      <TextField
        type="text"
        label="New Task"
        fullWidth
        size="medium"
        value={newTask}
        onChange={(event): void => setNewTask(event.target.value)}
      />
      <Button
        sx={{ whiteSpace: 'nowrap', ml: 2 }}
        variant="contained"
        color="primary"
        onClick={handleAddTask}
        disabled={isButtonDisabled}
      >
          Add Task
      </Button>
    </Box>
  )
}
