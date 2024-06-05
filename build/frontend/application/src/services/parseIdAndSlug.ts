export default function parseIdAndSlug (idslug: string): { id: string, slug: string } {
  const [id, ...slug] = idslug.split('-')
  return { id, slug: slug.join('-') }
}
