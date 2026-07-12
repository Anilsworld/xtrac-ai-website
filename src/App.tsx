import { Routes, Route } from 'react-router-dom'
import { Marketing } from '@/pages/Marketing'
import { Login } from '@/pages/Login'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Marketing />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Marketing />} />
    </Routes>
  )
}
