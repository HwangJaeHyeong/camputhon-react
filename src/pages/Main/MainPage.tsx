import { Root } from 'components/Root'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { TitleTypo } from './styled'

type MainPageProps = {
  className?: string
}

export const MainPage: FC<MainPageProps> = ({ className }) => {
  const navigate = useNavigate()

  return (
    <Root className={className}>
      <TitleTypo>
        우리끼리 <br /> 딜리버리
      </TitleTypo>
    </Root>
  )
}
