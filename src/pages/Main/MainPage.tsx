import { FC } from 'react'
import { Container, ContentContainer, ContentInput, LogoWrapper, Root, SubmitButton, TitleTypo } from './styled'

type MainPageProps = {
  className?: string
}

export const MainPage: FC<MainPageProps> = ({ className }) => {
  return (
    <Root className={className}>
      <Container>
        <LogoWrapper>로고 사진</LogoWrapper>
        <TitleTypo>우리끼리 딜리버리</TitleTypo>
        <ContentContainer>
          <ContentInput placeholder="아이디를 입력해주세요." />
          <ContentInput placeholder="비밀번호를 입력해주세요." />
          <SubmitButton type={'primary'}>로그인</SubmitButton>
          <SubmitButton>회원가입</SubmitButton>
        </ContentContainer>
      </Container>
    </Root>
  )
}
