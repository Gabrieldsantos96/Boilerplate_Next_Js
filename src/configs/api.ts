import { GetServerSidePropsContext } from 'next'
import createAxios from './axios'
import { AxiosInstance } from 'axios'

export class BaseAPI {
  axios: AxiosInstance

  constructor(ctx?: undefined | GetServerSidePropsContext) {
    this.axios = createAxios(ctx)
  }

  setHeaders(token: string): void {
    this.axios.defaults.headers.Authorization = `Bearer ${token}`
  }

  removeHeaders(): void {
    this.axios.defaults.headers.Authorization = ''
  }
}

export const API = new BaseAPI()
