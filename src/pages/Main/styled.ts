import { Typography } from 'antd'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
`

export const TitleTypoWrapper = styled.div`
  width: 100%;
  padding: 0 20px;
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

export const LogoImg = styled.img`
  width: 160px;
`

export const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 20px;
  box-sizing: border-box;
  margin-top: 20px;
`

export const SectionTitleTypoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SectionTitleTypo = styled(Typography)`
  font-size: 20px;
  font-weight: 500;
  color: #333;
`

export const SectionTitleMoreTypo = styled(Typography)`
  font-size: 12px;
  color: #777;
`
export const SectionContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

export const SectionMapImg = styled.img`
  width: 100%;
  object-fit: contain;
  border-radius: 8px;
`
