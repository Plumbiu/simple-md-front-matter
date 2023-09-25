# simple-md-front-matter

Pase markdown front matter syntax like this:

```markdown
---
foo: bar
baz: 14
---
```

## Installing

```bash
npm install simple-md-front-matter
```

## Usage

**Basic Usage:**

```ts
import parseFrontMatter from 'simple-md-front-matter'

try {
  parseFrontMatter(`
---
foo: bar
baz: 14
---
  `)
  /*
{
  foo: bar,
  baz: 14,
}
*/
} catch (err) {
  /* handle error */
}
```

**Golang Style:**

> If you dont like `try catch` syntax, you can use `parseWithGoStyle` API, it is similar to `Golang` style for handling error.

```ts
import { parseWithGoStyle } from 'simple-md-front-matter'

const { err, content } = parseWithGoStyle(`
---
foo: bar
baz: 14
---
`)

if (err) {
  /* handle error */
} else {
  console.log(content)
  /*
{
  foo: bar,
  baz: 14,
}
*/
}
```

**Type Support:**

With generics:

```ts
import parseFrontMatter from 'simple-md-front-matter'

interface FM {
  foo: string
  baz: number
}

parseFrontMatter<FM>(`
---
foo: bar
baz: 14
---
  `)

const { err, content } = parseWithGoStyle<FM>(`
---
foo: bar
baz: 14
---
`)
```
