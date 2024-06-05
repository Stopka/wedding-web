import { ReactElement } from 'react'
import Content from '../Content'

export default function RowBlock ({ fields }: {
  fields: { columns: Array<{ id: string, classes: string, content: any }> }
}): ReactElement {
  console.log('row', fields)
  return <div className={'row'}>{fields.columns.map(item => {
    return (<div key={item.id} className={item.classes}>
      <Content content={item.content}/>
    </div>)
  })}</div>
}
