import { load } from 'js-yaml'

export default function parseFrontMatter(md: string) {
  const raw = md.slice(md.indexOf('---') + 3, md.indexOf('---', 3))
  return load(raw) as Content
}

export function parseWithGoStyle(md: string) {
  const raw = md.slice(md.indexOf('---') + 3, md.indexOf('---', 3))
  try {
    return {
      err: null,
      content: load(raw) as Content,
    }
  } catch (err: any) {
    return {
      err,
    }
  }
}
