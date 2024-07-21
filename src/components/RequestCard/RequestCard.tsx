import { FC } from 'react'
import {
  Container,
  ContentContainer,
  ContentTypo,
  ProfileImg,
  Root,
  TagContainer,
  TagItem,
  TagItemTypo,
  TitleContainer,
  TitleTypo,
} from './styled'

type RequestCardProps = {
  className?: string
  src: any
  storeName: string
  menuName: string
  price: number
  destination: string
  level: '쉬움' | '보통' | '어려움'
  category: string[]
  isRecommended?: boolean
}

const COLOR_LIST: any = {
  오르막길: {
    backgroundColor: '#FFF0ED',
    color: '#FC7055',
  },
  엘레베이터: {
    backgroundColor: '#F2EBFD',
    color: '#7343E5',
  },
  내리막길: {
    backgroundColor: '#ECF7FB',
    color: '#40B5DC',
  },
  평지: {
    backgroundColor: '#E9F9EF',
    color: '#33C165',
  },
  계단: {
    backgroundColor: '#FFF9E6',
    color: '#FECC00',
  },
  쉬움: {
    backgroundColor: '#C5D5FF',
    color: '#2260FF',
  },
  보통: {
    backgroundColor: '#d9d9d9',
    color: '#aaaaaa',
  },
  어려움: {
    backgroundColor: '#FFDCDC',
    color: '#EC221F',
  },
}

export const RequestCard: FC<RequestCardProps> = ({
  className,
  storeName,
  menuName,
  destination,
  price,
  level,
  category,
  src,
  isRecommended = false,
}) => {
  const categoryList = [level, ...category]

  return (
    <Root className={className}>
      <Container>
        <TitleContainer>
          <ProfileImg src={src} alt={'design card 01 image'} />
          <TitleTypo>
            {storeName} {'<=>'} {destination}
          </TitleTypo>
        </TitleContainer>
        <ContentContainer>
          <ContentTypo>메뉴 이름 : {menuName}</ContentTypo>
          <ContentTypo>배달 비용 : {price.toLocaleString()}원</ContentTypo>
        </ContentContainer>
        {categoryList.length > 0 && (
          <TagContainer>
            {categoryList.map((value, index) => (
              <TagItem key={`tag_item_${value}_${index}`} backgroundColor={COLOR_LIST[value].backgroundColor}>
                <TagItemTypo color={COLOR_LIST[value].color}>{value}</TagItemTypo>
              </TagItem>
            ))}
          </TagContainer>
        )}
      </Container>
    </Root>
  )
}
