import { ReactNode } from 'react'
import Header from '../Header'
import Footer from '../Footer'

const MainLayout = ({children}: {children: ReactNode}) => {
  return (
    <main className='p-4 bg-gradient-to-br from-radialGradient-start to-radialGradient-end overflow-hidden h-screen'>
        <Header />
        {children}
        <Footer />
    </main>
  )
}

export default MainLayout
