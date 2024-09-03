import React from 'react'
import HomePage from './components/homePage'
import VideoPage from './components/VideoPage'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    { 
      path: '/User/:UserID',
      element: <VideoPage/>,
    },
  ])
  return (
    <div className='bg-gray-900 text-white w-full h-screen flex justify-center items-center'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
