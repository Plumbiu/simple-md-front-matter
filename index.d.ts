declare module 'simple-md-front-matter' {
  export function parseWithGoStyle<T>(md: string):
    | {
        err: null
        content: T
      }
    | {
        err: any
        content?: undefined
      }

  export default function parseFrontMatter<T>(md: string): T
}
