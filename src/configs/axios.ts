import axios, { AxiosInstance } from 'axios'
import { GetServerSidePropsContext } from 'next'
import { parseCookies } from 'nookies'
import { API_URL, USER_COOKIE_NAME } from './constants'

export default function createAxios(
  ctx?: undefined | GetServerSidePropsContext
): AxiosInstance {
  const cookies = parseCookies(ctx)

  const instanceAxios = axios.create({
    baseURL: API_URL,
    headers: {
      Authorization: `Bearer ${cookies[USER_COOKIE_NAME]}`
    }
  })

  return instanceAxios
}
