import { Button, Input, Typography } from 'antd'
import styled from 'styled-components'

export const TitleTypo = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  line-height: 120%;
  letter-spacing: -1px;
  margin-top: 40px;
`

export const LogoImgWrapper = styled.div`
  margin-top: 40px;
`

export const LogoImg = styled.img`
  width: 300px;
`

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  box-sizing: border-box;
  margin-top: 40px;
`

export const ContentElementContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  position: relative;
`

export const ContentElement01Img = styled.img`
  width: 100px;
  position: absolute;
  top: 100px;
  left: 60px;
`

export const ContentElement02Img = styled.img`
  width: 50px;
  position: absolute;
  top: 40px;
  left: 160px;
`

export const ContentElement03Img = styled.img`
  width: 80px;
  position: absolute;
  top: 100px;
  left: 230px;
`

export const ContentElementTypo = styled(Typography)`
  font-size: 20px;
  font-weight: 500;
  color: #6f6f6f;
  text-align: center;
  margin-top: 80px;
  z-index: 2;
`

export const ContentInput = styled(Input)``

export const SubmitButton = styled(Button)``
