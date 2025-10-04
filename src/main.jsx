import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const rootElement = document.getElementById('root');
if (rootElement != null) {

  // @ts-ignore
  createRoot(document.getElementById('root')).render(
    <div>some</div>
  )

}
