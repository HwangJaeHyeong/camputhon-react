import { FC } from 'react'
import { Container, ContentRoot } from './styled'

type RootProps = {
  className?: string
  children: any
}

export const Root: FC<RootProps> = ({ className, children }) => {
  return (
    <ContentRoot className={className}>
      <Container>{children}</Container>
    </ContentRoot>
  )
}
