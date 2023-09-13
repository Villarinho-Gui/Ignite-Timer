import { ActionTypesEnum } from '../../enums/actions-enum'
import { CycleProps } from '../../interfaces/cycles'

export function addNewCycleAction(newCycle: CycleProps) {
  return {
    type: ActionTypesEnum.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionTypesEnum.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionTypesEnum.INTERRUPT_CURRENT_CYCLE,
  }
}
