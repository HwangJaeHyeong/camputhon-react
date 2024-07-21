import { Typography } from 'antd'
import deliverySvgImg from 'constants/icons/delivery.svg'
import homeSvgImg from 'constants/icons/home.svg'
import mypageSvgImg from 'constants/icons/mypage.svg'
import searchSvgImg from 'constants/icons/search.svg'
import { FC } from 'react'
import { ReactSVG } from 'react-svg'
import styled from 'styled-components'

type TabBarProps = {
  className?: string
}

export const TabBar: FC<TabBarProps> = ({ className }) => {
  return (
    <Root className={className}>
      <ItemContainer>
        <ItemIcon src={homeSvgImg} />
        <ItemTypo>Home</ItemTypo>
      </ItemContainer>
      <ItemContainer>
        <ItemIcon src={searchSvgImg} />
        <ItemTypo>Search</ItemTypo>
      </ItemContainer>
      <ItemContainer>
        <ItemIcon src={deliverySvgImg} />
        <ItemTypo>Delivery</ItemTypo>
      </ItemContainer>
      <ItemContainer>
        <ItemIcon src={mypageSvgImg} />
        <ItemTypo>Mypage</ItemTypo>
      </ItemContainer>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top: 2px #eee solid;
  z-index: 10;
`

const ItemContainer = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-top: 5px;
  cursor: pointer;
`

const ItemIcon = styled(ReactSVG)`
  height: 24px;
  color: #484c52;
`

const ItemTypo = styled(Typography)`
  font-size: 16px;
  color: #484c52;
`
