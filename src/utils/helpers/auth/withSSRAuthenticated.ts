/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-return-await */
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult
} from 'next'
import nookies, { parseCookies } from 'nookies'

import { USER_COOKIE_NAME, COOKIES_TO_REDIRECT } from '@/configs/constants'

export function withSSRAuthenticated<P extends { [key: string]: any }>(
  fn: GetServerSideProps<P>
) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx)
    const { resolvedUrl } = ctx
    const { maxAge, path } = { maxAge: 60 * 60 * 1, path: '/' }
    const urlWithQueryParams = resolvedUrl.split('?')[1]
    const baseRedirect = resolvedUrl.split('?')[0]

    const setRedirectCookies = (url: string) => {
      nookies.set(ctx, COOKIES_TO_REDIRECT, url, { maxAge, path })
    }

    const getUtmParams = (queryParams: string | undefined): string => {
      return queryParams && queryParams.includes('utm') ? `?${queryParams}` : ''
    }

    const verifyIfUtm = getUtmParams(urlWithQueryParams) ?? ''

    if (verifyIfUtm !== '') {
      setRedirectCookies(baseRedirect)
    } else {
      setRedirectCookies(resolvedUrl)
    }

    if (!cookies[USER_COOKIE_NAME]) {
      return {
        redirect: {
          destination: `/login${verifyIfUtm}`,
          permanent: false
        }
      }
    }

    return await fn(ctx)
  }
}
