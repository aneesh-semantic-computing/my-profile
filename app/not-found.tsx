import React from 'react'

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen">
        <div className="text-center">
            <h1 className="text-4xl font-medium">404</h1>
            <p className="text-xl font-medium m-6">Sorry, the page you&apos;re looking for can&apos;t be found.</p>
            <a href="/" className="bg-blue-800 hover:bg-blue-600 text-white py-2 px-4 rounded">Go Home</a>
        </div>
    </div>
  )
}

export default NotFound;