import { FC } from 'react'
import { Root } from 'components/Root'
import {
  Container,
  TitleTypo,
  BackButton,
  MarketImg,
  MarketTypo,
  PinImg,
  LocationBox,
  LocationRedName,
  LocationGreenName,
  MenuTitleBox,
  MenuTitleTypo,
  MenuToggleImg,
  MenuBox,
  MenuContentBox,
  MenuContentTypo,
  MenuResultTypo,
  MoneyBox,
  MoneyContentBox,
  MoneyContentTypo,
  MoneyResultBox,
  MoneyResultTitleTypo,
  MoneyResultTypo,
  ContentButton,
} from './styled'
import megaCoffeeImg from 'constants/images/mega_coffee-logo.png'
import pinLineImg from 'constants/images/pin_line.png'
import upButtonImg from 'constants/images/up_button.png'

type RequestInfoPageProps = {
  className?: string
}

export const DeliveryDetailPage: FC<RequestInfoPageProps> = ({ className }) => {
  return (
    <Root className={className}>
      <Container>
        <BackButton>
          <TitleTypo>{`<`}</TitleTypo>
        </BackButton>
        <MarketImg src={megaCoffeeImg} />
        <MarketTypo>메가커피</MarketTypo>
        <PinImg src={pinLineImg} />
        <LocationBox>
          <LocationRedName>메가커피</LocationRedName>
          <LocationGreenName>신공학관</LocationGreenName>
        </LocationBox>
        <MenuBox>
          <MenuTitleBox>
            <MenuTitleTypo>메뉴 확인하기</MenuTitleTypo>
            <MenuToggleImg src={upButtonImg} />
          </MenuTitleBox>
          <MenuContentBox>
            <MenuContentTypo>메뉴명</MenuContentTypo>
            <MenuContentTypo>수량</MenuContentTypo>
            <MenuContentTypo>금액</MenuContentTypo>
          </MenuContentBox>
          <MenuContentBox>
            <MenuContentTypo>딸기 라떼</MenuContentTypo>
            <MenuContentTypo>1</MenuContentTypo>
            <MenuContentTypo>5,000</MenuContentTypo>
          </MenuContentBox>
          <MenuResultTypo>5,000</MenuResultTypo>
        </MenuBox>
        <MoneyBox>
          <MoneyContentBox>
            <MoneyContentTypo>총 주문 금액: </MoneyContentTypo>
            <MoneyContentTypo>6,000원</MoneyContentTypo>
          </MoneyContentBox>
          <MoneyContentBox>
            <MoneyContentTypo>물건 금액: </MoneyContentTypo>
            <MoneyContentTypo>5,000원</MoneyContentTypo>
          </MoneyContentBox>
          <MoneyResultBox>
            <MoneyResultTitleTypo>받는 금액:</MoneyResultTitleTypo>
            <MoneyResultTypo>1,000원</MoneyResultTypo>
          </MoneyResultBox>
        </MoneyBox>
        <ContentButton type={'primary'} size={'large'}>
          배달 신청하기
        </ContentButton>
      </Container>
    </Root>
  )
}
