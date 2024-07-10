import { LocaleEnum } from '../../../locales/locales'
import { ReactElement } from 'react'
import { redirect } from 'next/navigation'

export default async function FormPage (
  { params: { locale } }: { params: { locale: LocaleEnum } }
): Promise<ReactElement> {
  redirect(
    locale === LocaleEnum.cs
      ? 'https://forms.gle/zDELnW4z9yNFhQ537'
      : 'https://forms.gle/4zJysRARCGcxs5gp8'
  )
}
