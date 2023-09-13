export interface CreateCycleData {
  task: string
  minutesAmount: number
}
export interface CycleProps {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

export interface CyclesState {
  cycles: CycleProps[]
  activeCycleId: string | null
}
