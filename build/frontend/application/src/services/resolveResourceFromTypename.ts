export default function resolveResourceFromTypename (typename: string | null | undefined): string {
  if (typeof typename !== 'string') {
    return ''
  }
  return `/${typename.toLowerCase()}s`
}
