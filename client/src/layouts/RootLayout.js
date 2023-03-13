import Navigation from '../components/Navigation'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className="root-layout">
        <Navigation />

        <main>
            <Outlet />
        </main>
    </div>
  )
}
