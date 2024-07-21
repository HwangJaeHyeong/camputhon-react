import { MOBILE_MAX_WIDTH, MOBILE_MIN_WIDTH } from 'constants/system/default'
import styled from 'styled-components'

export const ContentRoot = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #aaa;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Container = styled.div`
  width: 100%;
  max-width: ${MOBILE_MAX_WIDTH}px;
  min-width: ${MOBILE_MIN_WIDTH}px;
  min-height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`
