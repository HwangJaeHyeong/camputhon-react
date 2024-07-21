import { Root } from 'components/Root'
import { PRIMARY_COLOR_2 } from 'constants/system/default'
import dayjs from 'dayjs'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ScheduleSelector from 'react-schedule-selector'
import {
  Container,
  ContentButton,
  ContentContainer,
  ContentInput,
  ContentInputCaptionTypo,
  ContentInputCheckDuplicate,
  ContentInputContainer,
  ContentInputTitleTypo,
  ContentInputWrapper,
  ScheduleSelectorTypo,
  TitleTypo,
} from './styled'

type UserJoinPageProps = {
  className?: string
}

export const UserJoinPage: FC<UserJoinPageProps> = ({ className }) => {
  const navigate = useNavigate()
  const [schedule, setSchedule] = useState<any[]>([])

  const onClickSubmitButton = () => {
    navigate('/user/login')
  }

  const handleSchedule = (value: any) => {
    setSchedule(value)
  }

  return (
    <Root className={className}>
      <Container>
        <TitleTypo>회원가입 페이지</TitleTypo>
        <ContentContainer>
          <ContentInputContainer>
            <ContentInputTitleTypo>아이디</ContentInputTitleTypo>
            <ContentInputWrapper>
              <ContentInput placeholder="아이디를 입력해주세요." />
              <ContentInputCheckDuplicate type={'primary'}>중복 체크</ContentInputCheckDuplicate>
            </ContentInputWrapper>
            <ContentInputCaptionTypo>영어, 숫자 조합 8자 이상 입력해주세요.</ContentInputCaptionTypo>
          </ContentInputContainer>
          <ContentInputContainer>
            <ContentInputTitleTypo>비밀번호</ContentInputTitleTypo>
            <ContentInputWrapper>
              <ContentInput placeholder="비밀번호를 입력해주세요." type="password" />
            </ContentInputWrapper>
            <ContentInputCaptionTypo>영어+숫자+특수문자 조합 8자 이상 입력해주세요.</ContentInputCaptionTypo>
          </ContentInputContainer>
          <ContentInputContainer>
            <ContentInputTitleTypo>비밀번호 확인</ContentInputTitleTypo>
            <ContentInputWrapper>
              <ContentInput placeholder="비밀번호 확인을 입력해주세요." type="password" />
            </ContentInputWrapper>
          </ContentInputContainer>
          <ContentInputContainer>
            <ContentInputTitleTypo>닉네임</ContentInputTitleTypo>
            <ContentInputWrapper>
              <ContentInput placeholder="닉네임을 입력해주세요." />
              <ContentInputCheckDuplicate type={'primary'}>중복 체크</ContentInputCheckDuplicate>
            </ContentInputWrapper>
            <ContentInputCaptionTypo>한글, 영어, 숫자 조합 8자 이상 입력해주세요.</ContentInputCaptionTypo>
          </ContentInputContainer>
          <ContentInputContainer>
            <ContentInputTitleTypo>학생증</ContentInputTitleTypo>
            <ContentInputWrapper>
              <ContentInput type={'file'} placeholder="학생증을 입력해주세요." />
            </ContentInputWrapper>
            <ContentInputCaptionTypo>png, jpg 형식으로 업로드해주세요.</ContentInputCaptionTypo>
          </ContentInputContainer>
          <ContentInputContainer>
            <ContentInputTitleTypo>공강 시간</ContentInputTitleTypo>
            <ContentInputWrapper>
              <ScheduleSelector
                selection={schedule}
                numDays={5}
                minTime={9}
                maxTime={22}
                onChange={handleSchedule}
                hoveredColor={PRIMARY_COLOR_2}
                renderDateLabel={(date) => {
                  const now = dayjs(date).day() - 1
                  const weekList = ['월', '화', '수', '목', '금']
                  return <ScheduleSelectorTypo>{`${weekList[now]}요일`}</ScheduleSelectorTypo>
                }}
              />
            </ContentInputWrapper>
          </ContentInputContainer>
          <ContentButton type={'primary'} onClick={onClickSubmitButton}>
            회원가입 완료
          </ContentButton>
        </ContentContainer>
      </Container>
    </Root>
  )
}
