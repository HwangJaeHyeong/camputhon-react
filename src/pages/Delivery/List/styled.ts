import { Typography } from 'antd'
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
  margin-top: 20px;
  padding-left: 20px;
  align-self: start;
`
// export const DestinationBox = styled.div`
//   margin: 10px 0;
//   width: 100%;
//   overflow-x: auto;
//   white-space: nowrap;
// `

export const DestinationBox = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin: 10px 20px;
  gap: 10px;
  overflow-x: auto;
  white-space: nowrap;
`

export const DestinationButton = styled.button`
  border: 2px solid #ffbb89;
  background-color: #ffbb89;
  padding: 5px 10px;
  border-radius: 10px;
`

export const DestinationTypo = styled(Typography)`
  font-size: 17px;
  color: white;
  line-height: 120%;
`
