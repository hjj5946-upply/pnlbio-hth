import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'

/** 라우트 이동 시 스크롤 위치 처리 (해시가 있으면 해당 섹션으로, 없으면 최상단) */
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <ScrollManager />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="*" element={<ProductDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
