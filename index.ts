import { load } from 'js-yaml'

export default function parseFrontMatter(md: string) {
  const raw = md.slice(md.indexOf('---') + 3, md.indexOf('---', 3))
  return load(raw)
}

export function parseWithGoStyle(md: string) {
  const raw = md.slice(md.indexOf('---') + 3, md.indexOf('---', 3))
  try {
    return {
      err: null,
      content: load(raw)
    }
  } catch (err: any) {
    return {
      err,
    }
  }
}
