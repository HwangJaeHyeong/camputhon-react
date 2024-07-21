import { Root } from 'components/Root'
import designElement01Img from 'constants/images/design_element_01.png'
import designElement02Img from 'constants/images/design_element_02.png'
import designElement03Img from 'constants/images/design_element_03.png'
import logoSmallImg from 'constants/images/logo_small.png'
import { useUserProfile } from 'hooks/useUserProfile'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ContentContainer,
  ContentElement01Img,
  ContentElement02Img,
  ContentElement03Img,
  ContentElementContainer,
  ContentElementTypo,
  ContentInput,
  LogoImg,
  LogoImgWrapper,
  SubmitButton,
} from './styled'

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
      <LogoImgWrapper>
        <LogoImg src={logoSmallImg} alt={'logo small'} />
      </LogoImgWrapper>
      <ContentElementContainer>
        <ContentElement01Img src={designElement01Img} alt={'design_element_01_img'} />
        <ContentElement02Img src={designElement02Img} alt={'design_element_02_img'} />
        <ContentElement03Img src={designElement03Img} alt={'design_element_03_img'} />
        <ContentElementTypo>
          애매한 공강시간...
          <br />
          쉽고 빠르게 돈을 벌어보세요!
          <br /> 어디서든 필요한 물건을 받아보세요!
        </ContentElementTypo>
      </ContentElementContainer>
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
