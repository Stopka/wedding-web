import { RowLabel, RowLabelArgs } from 'payload/dist/admin/components/forms/RowLabel/types'

const TitleRowLabel = (itemName: string = 'Item', titleField: string = 'title'): RowLabel => {
  return ({ data, index }: RowLabelArgs): string => {
    return data[titleField] ?? `${itemName} ${String(index).padStart(2, '0')}`
  }
}

export default TitleRowLabel
