import { Button, Typography } from 'antd'
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
  margin: 20px 0;
`

export const RiderBox = styled.div`
  display: flex;
  //justify-content: center;
  align-items: center;
  gap: 20px;
  border: 2px solid #eee;
  margin: 10px 0;
  padding: 20px;
  border-radius: 10px;
`

export const RiderInfo = styled.div``

export const RiderTypo = styled(Typography)`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  line-height: 120%;
`

export const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
`

export const ApproveButton = styled(Button)`
  background-color: #ec221f;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  color: white;
`

export const CancelButton = styled(Button)`
  background-color: #2260ff;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  color: white;
`
