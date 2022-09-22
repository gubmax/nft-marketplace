import assert from 'node:assert'

import pc from 'picocolors'
import { PinoPretty } from 'pino-pretty'

import { colorByType, levelByNumber, LogLevelWeights } from './logger.constants'

interface InputData {
  level: LogLevelWeights
  time: number
  pid: number
  hostname: string
  reqId: string
  req?: {
    method: string
    url: string
    hostname: string
    remoteAddress: string
    remotePort: number
  }
  res?: {
    statusCode: number
    method: string
    url: string
  }
  responseTime?: number
  msg: string
}

const baseColor = (level: string | number, description: string) => {
  const levelText = levelByNumber[level]
  const baseColorFn = pc[colorByType[levelText]]

  assert(typeof baseColorFn === 'function')

  return baseColorFn(description)
}

export const timePrettifier: PinoPretty.Prettifier = (time) => {
  if (typeof time === 'object') return ''

  return pc.dim(time)
}

export const levelPrettifier: PinoPretty.Prettifier = (level) => {
  if (typeof level === 'object') return ''

  const levelText = levelByNumber[level]

  return baseColor(level, levelText)
}

const joinMsg = (...arr: Array<string | undefined>): string =>
  arr.filter((item): item is string => !!item).join(' ')

export const messageFormat: PinoPretty.MessageFormatFunc = (log) => {
  const input = log as unknown as InputData

  const { msg, req, res, responseTime } = input
  const prettyTransport = pc.dim('http')

  // Request
  if (req) {
    return joinMsg(prettyTransport, pc.dim('<--'), req.method, pc.dim('xxx'), req.url)
  }

  // Response
  if (res) {
    const colorFn = res.statusCode >= 500 ? pc.red : res.statusCode >= 300 ? pc.yellow : pc.green
    const ms = responseTime ? pc.dim(`${Math.round(responseTime)}ms`) : ''

    return joinMsg(
      prettyTransport,
      colorFn('-->'),
      res.method,
      colorFn(res.statusCode),
      res.url,
      ms,
    )
  }

  // Info
  return joinMsg(msg)
}
