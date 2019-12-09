# minurljs
minimalistic fluid url builder

follows the fluid builder pattern

## Contents
For now, the current implementation supports url building

```typescript
export interface IMinUrlBuilder {
  append(path: string): IMinUrlBuilder;
  withQuery(query: any): IMinUrlBuilder;
  build(): string;
}
```

## Example
```javascript
const { MinUrlBuilder } = require("minurljs");

const article = {
  id: "ddb9b362-97d0-4ba3-b0a4-f6480df13a66"
};

const url = new MinUrlBuilder("http://localhost:3000")
  .append("articles/article/")
  .append("/edit/")
  .append(article._id || article.id)
  .build();

console.log(url);

// outputs: http://localhost:3000/articles/article/edit/ddb9b362-97d0-4ba3-b0a4-f6480df13a66

```

## Instalation
```bash
$ yarn add minurljs
# or
$ npm install minurljs
```
