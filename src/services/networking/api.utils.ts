import {
  SnakeKeysToCamelCase,
  snakeKeysToCamel,
  camelKeysToSnake,
  CamelKeysToSnakeCase,
  IGithubResponse,
  IGithubUser,
  IGithubApiResponse,
  IFullUserResponse,
  IUserBio,
} from "@github/utils"

export const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const parse = <U, T extends Array<U>>(str: string, ...values: T): string => {
  return str.replace(/%s/g, () => {
    const value = String(values.shift())
    return value ?? ""
  })
}

export const snakeToCamelMapper = <D extends object>(data: D): SnakeKeysToCamelCase<D> =>
  snakeKeysToCamel(data)

export const camelToSnakeMapper = <D extends object>(data: D): CamelKeysToSnakeCase<D> =>
  camelKeysToSnake(data)

export const defaultMapper = snakeKeysToCamel as <D, R>(data: D) => R

export const defaultDataMapper = camelToSnakeMapper as <D, R>(data: D) => R

export const githubResponseMapper = (res: IGithubResponse): IGithubUser[] => {
  const users: IGithubUser[] = []
  res.items.forEach((user: IGithubApiResponse) => {
    users.push({ avatarUrl: user.avatar_url, username: user.login })
  })
  return users
}

export const userBioMapper = (res: IFullUserResponse): IUserBio => {
  return { bio: res.bio }
}
