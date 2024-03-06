import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { TaskType, FilterType, FiltersStatus } from '../../../types/index'

interface TasksState {
  tasks: TaskType[]
  filter: FilterType
}

const initialState: TasksState = {
  tasks: [],
  filter: FiltersStatus.ALL,
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask: TaskType = {
        id: state.tasks.length + 1,
        text: action.payload,
        completed: false,
      }
      state.tasks.push(newTask)
    },
    toggleTaskStatus: (state, action: PayloadAction<number>) => {
      const task = state.tasks.find((taskItem) => {
        return taskItem.id === action.payload
      })

      if (task) task.completed = !task.completed
    },
    editTask: (state, action: PayloadAction<TaskType>) => {
      const task = state.tasks.find((taskItem) => {
        return taskItem.id === action.payload.id
      })

      if (task) task.text = action.payload.text
    },
    removeTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload)
    },
    setFilter: (state, action: PayloadAction<FilterType>) => {
      state.filter = action.payload
    },
  },
})

export const {
  addTask,
  toggleTaskStatus,
  setFilter,
  editTask,
  removeTask,
} = tasksSlice.actions

export const selectTasks = (state: RootState): TaskType[] => state.tasks.tasks
export const selectFilter = (state: RootState): FilterType => state.tasks.filter
export const selectCompletedCount = (state: RootState): number => {
  return state.tasks.tasks.filter((task) => task.completed).length
}
export const selectUncompletedCount = (state: RootState): number => {
  return state.tasks.tasks.filter((task) => !task.completed).length
}

export default tasksSlice.reducer
