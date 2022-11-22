import { memo, ReactNode } from 'react'

interface HelpBlockProps {
  icon: ReactNode
  title: string
  text: string
  link: ReactNode
}

function HelpBlock({ icon, title, text, link }: HelpBlockProps) {
  return (
    <div className="flex">
      <div className="flex-shrink-0">{icon}</div>
      <div className="ml-5">
        <span>{title}</span>
        <span>{text}</span>
        {link}
      </div>
    </div>
  )
}

export default memo(HelpBlock)
