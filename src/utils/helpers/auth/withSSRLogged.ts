/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult
} from 'next'
import { parseCookies } from 'nookies'

import { USER_COOKIE_NAME } from '@/configs/constants'

export function withSSRLogged<P extends { [key: string]: any }>(
  fn: GetServerSideProps<P>
) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx)

    if (cookies[USER_COOKIE_NAME]) {
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      }
    }

    return await fn(ctx)
  }
}
