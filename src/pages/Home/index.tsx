import { Play } from 'phosphor-react'
import {
  CountDownContainer,
  FormContainer,
  HomeComponent,
  MinutesAmountInput,
  Separator,
  StartCountDownButton,
  TaskInput,
} from './styles'

export function Home() {
  return (
    <HomeComponent>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em: </label>
          <TaskInput
            id="task"
            type="text"
            placeholder="Dê um nome para o seu projeto"
            list="tasks-suggestions"
          />
          <datalist id="tasks-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
          </datalist>
          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            id="minutesAmount"
            type="number"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            maxLength={2}
          />

          <span>minutos.</span>
        </FormContainer>
        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartCountDownButton type="submit" disabled>
          <Play size={24} />
          Começar
        </StartCountDownButton>
      </form>
    </HomeComponent>
  )
}
