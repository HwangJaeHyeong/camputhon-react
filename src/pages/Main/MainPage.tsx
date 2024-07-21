import { Root } from 'components/Root'
import { useUserProfile } from 'hooks/useUserProfile'
import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { TitleTypo, TitleTypoWrapper } from './styled'

type MainPageProps = {
  className?: string
}

export const MainPage: FC<MainPageProps> = ({ className }) => {
  const navigate = useNavigate()
  const { isLogin } = useUserProfile()

  useEffect(() => {
    if (!isLogin) {
      navigate('/user/login')
    }
  }, [])

  return (
    <Root className={className}>
      <TitleTypoWrapper>
        <TitleTypo>우리끼리 딜리버리</TitleTypo>
      </TitleTypoWrapper>
    </Root>
  )
}
