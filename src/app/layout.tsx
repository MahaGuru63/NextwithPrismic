import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  )
}