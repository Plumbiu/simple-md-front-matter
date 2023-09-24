type Content = Record<string, number | number[] | string | string[]>

declare module 'simple-md-front-matter' {
  export function parseWithGoStyle(md: string):
    | {
        err: null
        content: Content
      }
    | {
        err: any
        content?: undefined
      }

  export default function parseFrontMatter(md: string): Content
}
