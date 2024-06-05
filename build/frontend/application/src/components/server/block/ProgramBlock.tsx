import { ReactElement } from 'react'

export default function ProgramBlock ({ fields }: {
  fields: { items: Array<{ id: string, time: string, title: string }> }
}): ReactElement {
  return <>
    <ul className={'list-group w-25'}>
      {fields.items.map(item => {
        const date = new Date(item.time)
        return <li key={item.id} className={'list-group-item'}>
          <strong className={'me-2'}>
            {date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0')}
          </strong>
          <span>{item.title}</span>
        </li>
      })}
    </ul>
  </>
}
