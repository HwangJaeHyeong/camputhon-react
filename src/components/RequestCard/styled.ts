import { Typography } from 'antd'
import styled from 'styled-components'

export const Root = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 15px 30px;
  border-radius: 16px;
  box-sizing: border-box;
  border: 1px #eee solid;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`

export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`

export const TitleTypo = styled(Typography)`
  font-size: 20px;
  font-weight: bold;
  margin-left: 5px;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const PriceTypo = styled(Typography)`
  font-size: 16px;
`

export const ContentTypo = styled(Typography)`
  font-size: 16px;
`

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const TagItem = styled.div<{ backgroundColor: string }>`
  padding: 3px 14px;
  background: ${(props) => props.backgroundColor};
  border-radius: 10px;
`

export const TagItemTypo = styled(Typography)<{ color: string }>`
  font-size: 16px;
  color: ${(props) => props.color};
`
