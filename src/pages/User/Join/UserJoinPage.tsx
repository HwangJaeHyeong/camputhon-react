import { Root } from 'components/Root'
import { FC } from 'react'

type UserJoinPageProps = {
  className?: string
}

export const UserJoinPage: FC<UserJoinPageProps> = ({ className }) => {
  return <Root className={className}>UserJoinPage</Root>
}
