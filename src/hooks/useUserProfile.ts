import { LOCAL_ACCESS_TOKEN } from 'constants/system/user'

type UseUserProfileProps = {}

type UseUserProfileType = {
  accessToken: string
  isLogin: boolean
  setAccessToken: (value: string) => void
  removeAccessToken: () => void
}

export const useUserProfile = (): UseUserProfileType => {
  const accessToken = localStorage.getItem('') ?? ''

  const isLogin = accessToken !== ''

  const setAccessToken = (value: string) => {
    localStorage.setItem(LOCAL_ACCESS_TOKEN, value)
    return
  }

  const removeAccessToken = () => {
    localStorage.removeItem(LOCAL_ACCESS_TOKEN)
    return
  }

  return { accessToken, isLogin, setAccessToken, removeAccessToken }
}
