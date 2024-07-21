import { RequestCard } from 'components/RequestCard'
import { Root } from 'components/Root'
import { TabBar } from 'components/TabBar'
import designCard01Img from 'constants/images/design_card_01.png'
import designCard02Img from 'constants/images/design_card_02.png'
import designElement04Img from 'constants/images/design_element_04.png'
import logoSmallImg from 'constants/images/logo_small.png'
import { useUserProfile } from 'hooks/useUserProfile'
import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  LogoImg,
  SectionContainer,
  SectionContentContainer,
  SectionMapImg,
  SectionTitleMoreTypo,
  SectionTitleTypo,
  SectionTitleTypoWrapper,
  SubtitleTypo,
  TitleTypo,
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
        <TitleTypo>반가워요, 선유님</TitleTypo>
        <SubtitleTypo>오늘은 어떤 음식을 먹을까요?</SubtitleTypo>
      </TitleTypoWrapper>
      <SectionContainer>
        <SectionTitleTypoWrapper>
          <SectionTitleTypo>배달 요청하기</SectionTitleTypo>
        </SectionTitleTypoWrapper>
        <SectionContentContainer>
          <SectionMapImg src={designElement04Img} alt={'design element 04 image'} />
        </SectionContentContainer>
      </SectionContainer>
      <SectionContainer>
        <SectionTitleTypoWrapper>
          <SectionTitleTypo>배달 요청 리스트</SectionTitleTypo>
          <SectionTitleMoreTypo>더보기</SectionTitleMoreTypo>
        </SectionTitleTypoWrapper>
        <SectionContentContainer>
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
        </SectionContentContainer>
      </SectionContainer>
      <SectionContainer>
        <SectionTitleTypoWrapper>
          <SectionTitleTypo>이달의 배달왕</SectionTitleTypo>
        </SectionTitleTypoWrapper>
      </SectionContainer>
      <TabBar />
    </Root>
  )
}
