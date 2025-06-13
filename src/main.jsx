import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './routes/homepage/homePage'
import CreatePage from './routes/createpage/createPage'
import PostPage from './routes/postpage/postPage'
import AuthPage from './routes/authpage/authPage'
import SearchPage from './routes/searchpage/searchPage'
import ProfilePage from './routes/profilepage/profilePage'
import MainLayout from './routes/layouts/mainLayout'
import { BrowserRouter, Routes, Route } from 'react-router'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
          <Route element={<MainLayout/>}>
          <Route path='/' element={<HomePage />} />
          <Route path='/create' element={<CreatePage />} />
          <Route path='/bite/:id' element={<PostPage />} />
          <Route path='/:username' element={<ProfilePage />} />
          <Route path='/search' element={<SearchPage />} />
        </Route>
          <Route path='/auth' element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
