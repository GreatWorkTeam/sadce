const DEFAULT_APP_URL = "http://localhost:4000"
const DEFAULT_V0_URL = "https://v0.dev"

export const appUrl = process.env.NEXT_PUBLIC_APP_URL?.trim() || DEFAULT_APP_URL
export const v0Url = process.env.NEXT_PUBLIC_V0_URL?.trim() || DEFAULT_V0_URL

export function toAppUrl(path: string) {
  return `${appUrl}${path.startsWith("/") ? path : `/${path}`}`
}
