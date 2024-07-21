import { Root } from 'components/Root'
import { TabBar } from 'components/TabBar'
import { STORE_LIST } from 'constants/system/store'
import { FC } from 'react'
import {
  Container,
  ContentButton,
  ContentContainer,
  ContentInput,
  ContentInputCaptionTypo,
  ContentInputCheckbox,
  ContentInputContainer,
  ContentInputTitleTypo,
  ContentInputTitleTypoContainer,
  ContentInputWrapper,
  ContentSelect,
  ContentTextArea,
  ContentTimePicker,
  SubtitleTypo,
  TitleTypo,
} from './styled'

type RequestInfoPageProps = {
  className?: string
}

export const RequestInfoPage: FC<RequestInfoPageProps> = ({ className }) => {
  return (
    <Root className={className}>
      <Container>
        <TitleTypo>배달 요청하기</TitleTypo>
        <SubtitleTypo>어떤 음식을 배달시킬까요?</SubtitleTypo>
        <ContentContainer>
          <ContentInputContainer>
            <ContentInputTitleTypo>가게 선택하기</ContentInputTitleTypo>
            <ContentInputWrapper>
              <ContentSelect showSearch placeholder="가게를 선택해주세요." options={STORE_LIST} />
            </ContentInputWrapper>
          </ContentInputContainer>
          <ContentInputContainer>
            <ContentInputTitleTypo>목적지 선택하기</ContentInputTitleTypo>
            <ContentInputWrapper>
              <ContentSelect
                showSearch
                placeholder="배달 받을 건물을 선택해주세요."
                options={[
                  { label: '신공학관', value: '신공학관' },
                  { label: '혜화관', value: '혜화관' },
                  { label: '법학관', value: '법학관' },
                  { label: '정보문화관', value: '정보문화관' },
                  { label: '원흥관', value: '원흥관' },
                ]}
              />
            </ContentInputWrapper>
            <ContentInputWrapper>
              <ContentInput placeholder="세부 사항을 입력해주세요." />
            </ContentInputWrapper>
          </ContentInputContainer>
          <ContentInputContainer>
            <ContentInputTitleTypoContainer>
              <ContentInputTitleTypo>정기권 여부</ContentInputTitleTypo>
              <ContentInputCheckbox />
            </ContentInputTitleTypoContainer>
            <ContentInputCaptionTypo>정기권은 매주 똑같은 주문을 하는 방식입니다.</ContentInputCaptionTypo>
          </ContentInputContainer>
          <ContentInputContainer>
            <ContentInputTitleTypoContainer>
              <ContentInputTitleTypo>도착 시간</ContentInputTitleTypo>
            </ContentInputTitleTypoContainer>
            <ContentTimePicker showMinute showSecond={false} format={'HH:MM'} minuteStep={5} />
            <ContentInputCaptionTypo>실제 도착은 입력한 시간의 10분 내외로 도착합니다.</ContentInputCaptionTypo>
          </ContentInputContainer>
          <ContentInputContainer>
            <ContentInputTitleTypo>메뉴 이름</ContentInputTitleTypo>
            <ContentInputWrapper>
              <ContentTextArea placeholder="메뉴 이름을 입력해주세요." autoSize={{ minRows: 2, maxRows: 3 }} />
            </ContentInputWrapper>
          </ContentInputContainer>
          <ContentInputContainer>
            <ContentInputTitleTypo>배달 금액</ContentInputTitleTypo>
            <ContentInputWrapper>
              <ContentSelect
                showSearch
                placeholder="배달 금액을 선택해주세요."
                options={[
                  { label: '1,000원', value: '1,000원' },
                  { label: '1,500원', value: '1,500원' },
                  { label: '2,000원', value: '2,000원' },
                  { label: '2,500원', value: '2,500원' },
                  { label: '3,000원', value: '3,000원' },
                ]}
              />
            </ContentInputWrapper>
          </ContentInputContainer>
          <ContentInputContainer>
            <ContentInputTitleTypo>기타 요청사항</ContentInputTitleTypo>
            <ContentInputWrapper>
              <ContentTextArea placeholder="기타 요청사항을 입력해주세요." autoSize={{ minRows: 2, maxRows: 3 }} />
            </ContentInputWrapper>
          </ContentInputContainer>
          <ContentButton type={'primary'} size={'large'}>
            요청하기
          </ContentButton>
        </ContentContainer>
      </Container>
      <TabBar />
    </Root>
  )
}
