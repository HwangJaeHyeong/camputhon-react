import { FC } from 'react'
import { Root } from 'components/Root'
import { TabBar } from 'components/TabBar'
import { ApproveButton, ButtonBox, CancelButton, Container, RiderBox, RiderInfo, RiderTypo, TitleTypo } from './styled'
import { Avatar, Rate } from 'antd'

type RequestInfoPageProps = {
  className?: string
}

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful']

export const RequestConfirmPage: FC<RequestInfoPageProps> = ({ className }) => {
  return (
    <Root className={className}>
      <Container>
        <TitleTypo>배달 신청 리스트</TitleTypo>
        <RiderBox>
          <Avatar size="large" src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
          <RiderInfo>
            <RiderTypo>김민환</RiderTypo>
            <Rate tooltips={desc} value={4} />
          </RiderInfo>
          <ButtonBox>
            <ApproveButton>수락</ApproveButton>
            <CancelButton>거절</CancelButton>
          </ButtonBox>
        </RiderBox>
        <RiderBox>
          <Avatar size="large" src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
          <RiderInfo>
            <RiderTypo>이나경</RiderTypo>
            <Rate tooltips={desc} value={3} />
          </RiderInfo>
          <ButtonBox>
            <ApproveButton>수락</ApproveButton>
            <CancelButton>거절</CancelButton>
          </ButtonBox>
        </RiderBox>
        <RiderBox>
          <Avatar size="large" src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" />
          <RiderInfo>
            <RiderTypo>황재형</RiderTypo>
            <Rate tooltips={desc} value={5} />
          </RiderInfo>
          <ButtonBox>
            <ApproveButton>수락</ApproveButton>
            <CancelButton>거절</CancelButton>
          </ButtonBox>
        </RiderBox>
      </Container>
      <TabBar />
    </Root>
  )
}
