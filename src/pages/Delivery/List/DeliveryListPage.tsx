import { FC } from 'react'
import { Root } from 'components/Root'
import { Container, TitleTypo, DestinationBox, DestinationButton, DestinationTypo } from './styled'
import { RequestCard } from 'components/RequestCard'
import designCard01Img from 'constants/images/design_card_01.png'
import designCard02Img from 'constants/images/design_card_02.png'
import { TabBar } from 'components/TabBar'

type RequestInfoPageProps = {
  className?: string
}

export const DeliveryListPage: FC<RequestInfoPageProps> = ({ className }) => {
  return (
    <Root className={className}>
      <TitleTypo>배달 요청 리스트</TitleTypo>
      <DestinationBox>
        <DestinationButton>
          <DestinationTypo>신공학관</DestinationTypo>
        </DestinationButton>
        <DestinationButton>
          <DestinationTypo>원흥관</DestinationTypo>
        </DestinationButton>
        <DestinationButton>
          <DestinationTypo>혜화관</DestinationTypo>
        </DestinationButton>
        <DestinationButton>
          <DestinationTypo>정보문화관P</DestinationTypo>
        </DestinationButton>
        <DestinationButton>
          <DestinationTypo>정보문화관Q</DestinationTypo>
        </DestinationButton>
      </DestinationBox>
      <Container>
        <RequestCard
          src={designCard02Img}
          storeName="메가 커피"
          menuName={'아이스 아메리카노'}
          price={2000}
          destination={'신공학관 4105'}
          level={'쉬움'}
          category={['오르막길', '엘레베이터']}
        />
        <RequestCard
          src={designCard01Img}
          storeName="알촌"
          menuName={'짜장알밥'}
          price={1000}
          destination={'원흥관 P403'}
          level={'어려움'}
          category={['내리막길']}
        />
        <RequestCard
          src={designCard01Img}
          storeName="신전 떡볶이"
          menuName={'치즈떡볶이, 라볶이'}
          price={2000}
          destination={'학생회관 1층'}
          level={'어려움'}
          category={['평지', '계단']}
        />
      </Container>
      <TabBar />
    </Root>
  )
}
