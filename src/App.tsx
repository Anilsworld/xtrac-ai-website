import { Routes, Route } from 'react-router-dom'
import { Marketing } from '@/pages/Marketing'
import { Login } from '@/pages/Login'
import { Privacy } from '@/pages/Privacy'
import { Terms } from '@/pages/Terms'
import { DataDeletion } from '@/pages/DataDeletion'
import { HelpCenter } from '@/pages/HelpCenter'
import { About } from '@/pages/About'
import { Founders } from '@/pages/Founders'
import { Careers } from '@/pages/Careers'
import { Contact } from '@/pages/Contact'
import { Changelog } from '@/pages/Changelog'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Marketing />} />
      <Route path="/login" element={<Login />} />

      {/* Company */}
      <Route path="/about" element={<About />} />
      <Route path="/founders" element={<Founders />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />

      {/* Product */}
      <Route path="/changelog" element={<Changelog />} />

      {/* Legal + support */}
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/data-deletion" element={<DataDeletion />} />
      <Route path="/help" element={<HelpCenter />} />

      <Route path="*" element={<Marketing />} />
    </Routes>
  )
}
