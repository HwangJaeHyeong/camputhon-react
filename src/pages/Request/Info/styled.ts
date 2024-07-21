import { Button, Checkbox, Input, Select, TimePicker, Typography } from 'antd'
import TextArea from 'antd/es/input/TextArea'
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
  font-weight: bold;
  color: #333;
  line-height: 120%;
  letter-spacing: -1px;
  margin-top: 20px;
`

export const SubtitleTypo = styled(Typography)`
  font-size: 16px;
  color: #777;
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

export const ContentInputTitleTypoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ContentInputTitleTypo = styled(Typography)`
  font-size: 18px;
  padding-left: 5px;
`

export const ContentInputCheckbox = styled(Checkbox)``

export const ContentInputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
`

export const ContentInput = styled(Input)``

export const ContentSelect = styled(Select)`
  width: 100%;
`

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

export const ContentTimePicker = styled(TimePicker)``

export const ContentTextArea = styled(TextArea)``
