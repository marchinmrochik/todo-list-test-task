export type TaskType = {
  id: number
  text: string
  completed: boolean
}

export type FilterType = 'all' | 'completed' | 'current'

export enum FiltersStatus {
  ALL = 'all',
  COMPLETED = 'completed',
  CURRENT = 'current'
}
