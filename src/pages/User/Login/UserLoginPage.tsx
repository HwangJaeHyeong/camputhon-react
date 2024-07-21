import { Root } from 'components/Root'
import { useUserProfile } from 'hooks/useUserProfile'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ContentContainer, ContentInput, LogoWrapper, SubmitButton, TitleTypo } from './styled'

type UserLoginPageProps = {
  className?: string
}

export const UserLoginPage: FC<UserLoginPageProps> = ({ className }) => {
  const navigate = useNavigate()
  const { setAccessToken } = useUserProfile()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onClickLoginButton = () => {
    navigate('/')
    setAccessToken('TEST')
  }
  const onClickJoinButton = () => {
    navigate('/user/join')
  }

  const onKeypressEnter = (e: any) => {
    if (e.key === 'Enter') {
      onClickLoginButton()
    }
  }

  return (
    <Root className={className}>
      <LogoWrapper>
        <TitleTypo>
          우리끼리 <br /> 딜리버리
        </TitleTypo>
      </LogoWrapper>
      <ContentContainer>
        <ContentInput placeholder="아이디를 입력해주세요." value={email} onChange={(e) => setEmail(e.target.value)} />
        <ContentInput
          type={'password'}
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={onKeypressEnter}
        />
        <SubmitButton type={'primary'} onClick={onClickLoginButton}>
          로그인
        </SubmitButton>
        <SubmitButton onClick={onClickJoinButton}>회원가입</SubmitButton>
      </ContentContainer>
    </Root>
  )
}
