import { Root } from 'components/Root'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { ContentContainer, ContentInput, LogoWrapper, SubmitButton, TitleTypo } from './styled'

type MainPageProps = {
  className?: string
}

export const MainPage: FC<MainPageProps> = ({ className }) => {
  const navigate = useNavigate()

  const onClickLoginButton = () => {
    navigate('/')
  }
  const onClickJoinButton = () => {
    navigate('/user/join')
  }

  return (
    <Root className={className}>
      <LogoWrapper>
        <TitleTypo>
          우리끼리 <br /> 딜리버리
        </TitleTypo>
      </LogoWrapper>
      <ContentContainer>
        <ContentInput placeholder="아이디를 입력해주세요." />
        <ContentInput placeholder="비밀번호를 입력해주세요." />
        <SubmitButton type={'primary'} onClick={onClickLoginButton}>
          로그인
        </SubmitButton>
        <SubmitButton onClick={onClickJoinButton}>회원가입</SubmitButton>
      </ContentContainer>
    </Root>
  )
}
