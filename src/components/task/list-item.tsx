import React, { useState, useRef, useEffect } from 'react'
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  TextField,
  Checkbox,
  Box,
} from '@mui/material'
import { useDispatch } from 'react-redux'
import {
  toggleTaskStatus,
  editTask,
  removeTask,
} from '../../redux/features/tasks/tasks-slice'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import SaveIcon from '@mui/icons-material/Save'
import CancelIcon from '@mui/icons-material/Cancel'
import { TaskType } from '../../types/index'

interface TaskListItemProps extends TaskType {
  index: number
}

const TaskListItem: React.FC<TaskListItemProps> = ({ id, text, completed, index }) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = text
    }
  }, [isEditing])

  const handleToggleTaskStatus = (): void => {
    dispatch(toggleTaskStatus(id))
  }

  const handleRemoveTask = (): void => {
    dispatch(removeTask(id))
  }

  const handleEditClick = (): void => {
    setIsEditing(true)
  }

  const handleSaveEdit = (): void => {
    dispatch(editTask({ id, text: inputRef.current?.value || text, completed }))
    setIsEditing(false)
  }

  const handleCancelEdit = (): void => {
    setIsEditing(false)
  }

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (inputRef.current) {
      inputRef.current.value = event.target.value
    }
  }

  return (
    <ListItem>
      <ListItemIcon>{index + 1}</ListItemIcon>
      {isEditing ? <>
        <TextField
          type="text"
          fullWidth
          size="small"
          value={inputRef.current?.value}
          inputRef={inputRef}
          onChange={handleTextChange}
        />
        <Box display="flex">
          <ListItemIcon>
            <IconButton
              onClick={handleSaveEdit}
              edge="end"
              aria-label="save"
            >
              <SaveIcon />
            </IconButton>
          </ListItemIcon>
          <ListItemIcon>
            <IconButton onClick={handleCancelEdit} edge="end" aria-label="cancel">
              <CancelIcon />
            </IconButton>
          </ListItemIcon>
        </Box>
      </> : <>
        <ListItemText
          style={{ textDecoration: completed ? 'line-through' : 'none' }}
          primary={text}
        />
        <Box display="flex">
          <ListItemIcon>
            <IconButton onClick={handleRemoveTask} edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItemIcon>
          <ListItemIcon>
            <IconButton onClick={handleEditClick} edge="end" aria-label="edit">
              <EditIcon />
            </IconButton>
          </ListItemIcon>
        </Box>
      </>}
      <Checkbox
        checked={completed}
        tabIndex={-1}
        disableRipple
        inputProps={{ 'aria-labelledby': id.toString() }}
        onClick={handleToggleTaskStatus}
        disabled={isEditing}
      />
    </ListItem>
  )
}

export default TaskListItem
