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

export const BackButton = styled.button`
  width: fit-content;
  border: none;
  background-color: transparent;
`

export const TitleTypo = styled(Typography)`
  font-size: 40px;
  font-weight: bold;
  color: #333;
  line-height: 120%;
  letter-spacing: -1px;
  margin-top: 20px;
`

export const MarketImg = styled.img`
  margin: 10px 0;
  width: 180px;
  align-self: center;
`
export const MarketTypo = styled(Typography)`
  font-size: 40px;
  font-weight: bold;
  color: #333;
  line-height: 120%;
  align-self: center;
`

export const PinImg = styled.img`
  margin: 10px;
  margin-top: 20px;
`

export const LocationBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LocationRedName = styled(Typography)`
  font-size: 20px;
  font-weight: bold;
  line-height: 120%;
  align-self: center;
  color: #27924e;
`
export const LocationGreenName = styled(Typography)`
  font-size: 20px;
  font-weight: bold;
  line-height: 120%;
  align-self: center;
  color: #ec221f;
`

export const MenuBox = styled.div`
  margin-top: 20px;
  padding: 15px;
  border: 2px solid #d9d9d9;
  border-radius: 20px;
`

export const MenuTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #aaaaaa;
`

export const MenuTitleTypo = styled(Typography)`
  font-size: 20px;
  font-weight: bold;
  line-height: 120%;
  align-self: center;
  color: #333;
`

export const MenuToggleImg = styled.img`
  width: 20px;
`
export const MenuContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px dotted #aaaaaa;
`

export const MenuContentTypo = styled(Typography)`
  padding: 8px 0;
  font-size: 14px;
  font-weight: bold;
  line-height: 120%;
  align-self: center;
  color: #aaa;
`

export const MenuResultTypo = styled(Typography)`
  padding: 8px 0;
  font-size: 14px;
  font-weight: bold;
  line-height: 120%;
  align-self: center;
  color: #aaa;
  text-align: end;
`

export const MoneyBox = styled.div`
  margin-top: 20px;
  padding: 15px;
  border: 2px solid #d9d9d9;
  border-radius: 20px;
`

export const MoneyContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #aaaaaa;
  padding-top: 12px;
`

export const MoneyContentTypo = styled(Typography)`
  font-size: 20px;
  font-weight: bold;
  line-height: 120%;
  align-self: center;
  color: #aaa;
`

export const MoneyResultBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
`

export const MoneyResultTitleTypo = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
  line-height: 120%;
  align-self: center;
  color: #333;
`

export const MoneyResultTypo = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
  line-height: 100%;
  align-self: center;
  color: #32a15f;
  border-bottom: 2px solid #32a15f;
`
export const ContentButton = styled(Button)`
  margin-top: 20px;
`
