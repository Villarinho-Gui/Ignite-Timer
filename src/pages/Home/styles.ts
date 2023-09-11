import { styled } from 'styled-components'

export const HomeComponent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const BaseStyleCountDownButton = styled.button`
  display: flex;
  width: 100%;
  height: 4rem;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};

  border-radius: 8px;
  opacity: 0.7;
  border: none;

  cursor: pointer;

  font-weight: bold;

  &:disabled {
    cursor: not-allowed;
  }
`

export const StartCountDownButton = styled(BaseStyleCountDownButton)`
  background: ${(props) => props.theme['green-500']};
  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }
`

export const StopCountDownButton = styled(BaseStyleCountDownButton)`
  background: ${(props) => props.theme['red-500']};
  &:not(:disabled):hover {
    background: ${(props) => props.theme['red-700']};
  }
`
