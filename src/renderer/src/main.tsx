import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ClerkProvider } from '@clerk/clerk-react'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <ClerkProvider publishableKey="pk_test_YW11c2VkLXJvZGVudC03MC5jbGVyay5hY2NvdW50cy5kZXYk">
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ClerkProvider>
)
