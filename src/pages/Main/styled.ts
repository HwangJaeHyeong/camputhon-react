import { Avatar, Button, Input, Typography } from 'antd'
import { MOBILE_MAX_WIDTH, PRIMARY_COLOR } from 'constants/system/default'
import styled from 'styled-components'

export const Root = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Container = styled.div`
  width: ${MOBILE_MAX_WIDTH}px;
  min-height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`

export const TitleTypo = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
`

export const LogoWrapper = styled(Avatar)`
  width: 150px;
  height: 150px;
  background: ${PRIMARY_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 40px;
  padding: 20px;
  box-sizing: border-box;
`

export const ContentInput = styled(Input)``

export const SubmitButton = styled(Button)``
