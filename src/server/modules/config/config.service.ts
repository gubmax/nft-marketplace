export class ConfigService {
  isProd: boolean

  constructor ({ isProd }) {
    this.isProd = isProd
  }
}
