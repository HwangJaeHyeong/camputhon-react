import { RequestCard } from 'components/RequestCard'
import { Root } from 'components/Root'
import { TabBar } from 'components/TabBar'
import designCard01Img from 'constants/images/design_card_01.png'
import logoSmallImg from 'constants/images/logo_small.png'
import { useUserProfile } from 'hooks/useUserProfile'
import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  LogoImg,
  SectionContainer,
  SectionContentContainer,
  SectionTitleMoreTypo,
  SectionTitleTypo,
  SectionTitleTypoWrapper,
  TitleTypoWrapper,
} from './styled'

type MainPageProps = {
  className?: string
}

export const MainPage: FC<MainPageProps> = ({ className }) => {
  const navigate = useNavigate()
  const { isLogin } = useUserProfile()

  useEffect(() => {
    if (isLogin === false) {
      navigate('/user/login')
    }
  }, [])

  return (
    <Root className={className}>
      <TitleTypoWrapper>
        <LogoImg src={logoSmallImg} alt={'우리끼리 딜리버리 로고 이미지'} />
      </TitleTypoWrapper>
      <SectionContainer>
        <SectionTitleTypoWrapper>
          <SectionTitleTypo>배달 요청 리스트</SectionTitleTypo>
          <SectionTitleMoreTypo>더보기</SectionTitleMoreTypo>
        </SectionTitleTypoWrapper>
        <SectionContentContainer>
          <RequestCard
            src={designCard01Img}
            storeName="메가 커피"
            menuName={'아이스 아메리카노'}
            price={2000}
            destination={'신공학관 4105'}
            level={'어려움'}
            category={['평지', '계단']}
          />
        </SectionContentContainer>
      </SectionContainer>
      <TabBar />
    </Root>
  )
}
