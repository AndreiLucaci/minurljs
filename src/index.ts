import { Objs } from 'minobjs';

const sanitize = (str: string): string => {
  return str.replace(/^[/\\]|[/\\]$/, '');
};

const toPath = (str: string): string => {
  return `${sanitize(str)}/`;
};

const sanitizer = {
  combine: (baseHost: string, path: string): string => {
    return `${toPath(baseHost)}${sanitize(path)}`;
  },
};

export interface IMinUrlBuilder {
  append(path: string): IMinUrlBuilder;
  withQuery(query: any): IMinUrlBuilder;
  build(): string;
}

export class MinUrlBuilder implements IMinUrlBuilder {
  private value: string;
  private queryDelimiter: string;

  constructor(baseHost: string, queryDelimiter: string = '?') {
    this.value = baseHost;
    this.queryDelimiter = queryDelimiter;
  }

  public append(path: string): IMinUrlBuilder {
    this.value = sanitizer.combine(this.value, path);

    return this;
  }

  public withQuery(query: any): IMinUrlBuilder {
    const obj = new Objs();

    if (!obj.isEmpty(query)) {
      this.value = [this.value, this.queryDelimiter, new URLSearchParams(query).toString()].join('');
    }

    return this;
  }

  public build(): string {
    return this.value;
  }
}
