import { ReactElement } from 'react'
import MediaImage from '../MediaImage'
import { ImageFragment } from '../../../graphql/generated/types'
import Content from '../Content'

export default function ContactsBlock ({ fields }: {
  fields: { items: Array<{ id: string, name: string, role: string, image: ImageFragment, content: any }> }
}): ReactElement {
  return <div className={'container-fluid'}>
    <div className={'row row-cols-2 justify-content-center'}>
      {fields.items.map(item => {
        return <div className={'col p-0'}>
          <div key={item.id} className="card text-center m-1">
            <MediaImage media={item.image} sizeName={'face'} className={'card-img-top'}/>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <h6 className="card-text">{item.role}</h6>
              {item.content !== null && item.content !== undefined
                ? <Content className={'text-start'} content={item.content}/>
                : ''}
            </div>
          </div>
        </div>
      })}
    </div>
  </div>
}
