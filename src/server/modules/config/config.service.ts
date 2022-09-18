export interface Config {
  isProd: boolean
}

export class ConfigService {
  isProd: boolean

  constructor({ isProd }: Config) {
    this.isProd = isProd
  }
}
