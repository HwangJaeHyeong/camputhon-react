import { Button, Input, Typography } from 'antd'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  padding-bottom: 40px;
`

export const TitleTypo = styled(Typography)`
  font-size: 24px;
  font-weight: 500;
`

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`

export const ContentInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const ContentInputTitleTypo = styled(Typography)`
  font-size: 18px;
  padding-left: 5px;
`

export const ContentInputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
`

export const ContentInput = styled(Input)``

export const ContentInputCheckDuplicate = styled(Button)``

export const ContentInputCaptionTypo = styled(Typography)`
  font-size: 10px;
  font-weight: 300;
  color: #ff0000aa;
  padding-left: 5px;
`

export const ScheduleSelectorTypo = styled(Typography)`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 12px;
  color: rgba(79, 79, 79, 0.87);
`

export const ContentButton = styled(Button)`
  margin-top: 20px;
`
