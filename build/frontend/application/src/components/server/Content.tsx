import { ReactElement } from 'react'
import Block from './Block'
import Heading from './Heading'
import Link from 'next/link'
import {getCurrentLocale} from "../../locales/CurtrentLocale";

const Children = ({ content }: { content?: any }): ReactElement => {
  if (content === null || content === undefined || content.children === undefined || content.children === null) {
    return <></>
  }

  return content.children.map(child => <Item content={child}/>)
}

const Item = ({ content }: { content?: any }): ReactElement => {
  if (content === null || content === undefined) {
    return <></>
  }
  if (content.type === undefined && content.root !== undefined) {
    return <Item content={content.root}/>
  }
  switch (content.type) {
    case 'root':
      return <Children content={content}/>
    case 'heading':
      return <Heading content={content}><Children content={content}/></Heading>
    case 'paragraph':
      return <p><Children content={content}/></p>
    case 'text':
      return content.text
    case 'quote':
      return <blockquote><Children content={content}/></blockquote>
    case 'linebreak':
      return <br/>
    case 'block':
      return <Block block={content}/>
    case 'link':
      return content?.fields?.linkType === 'internal'
        ? (<Link href={`/${getCurrentLocale()}/${content?.fields?.doc?.value?.id ?? ''}-${content?.fields?.doc?.value?.slug ?? ''}`}>
          <Children content={content}/>
        </Link>)
        : (<a href={content.fields.url} target={content?.fields?.newTab === true ? '_blank' : ''}>
            <Children content={content}/>
          </a>)

    default:
      console.log('Unknown content', content)
      return <></>
  }
}

export default function Content ({ content, className }: { content?: any, className?: string }): ReactElement {
  return <div className={'content ' + (className ?? '')}>
    <Item content={content}/>
  </div>
}
