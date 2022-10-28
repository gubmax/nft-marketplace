import { HTMLAttributes, memo } from 'react'

const DEFAULT = 'NFT Platform'

interface TitleProps extends HTMLAttributes<HTMLTitleElement> {
  prefix?: string
}

function Title({ prefix, ...rest }: TitleProps) {
  return <title {...rest}>{prefix?.length ? `${prefix} · ${DEFAULT}` : DEFAULT}</title>
}

export default memo(Title)
