import DOMPurify from 'dompurify'

export function html(content) {
  return { dangerouslySetInnerHTML: { __html: DOMPurify.sanitize(content) } }
}
