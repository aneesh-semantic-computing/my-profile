import React from 'react'

type Props = {
    title?: string;
    description?: string;
    isError?: boolean;
}

const Message = ({ title, description, isError=false}: Props) => {
  return (
    <div className="flex items-center justify-center">
      <div className="p-1 rounded shadow-lg border-2 border-blue-600">
        <div className="flex flex-col items-center p-4 space-y-2">
          {!isError ? 
          <svg xmlns="http://www.w3.org/2000/svg" className="text-green-600 w-28 h-28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          :
          <svg xmlns="http://www.w3.org/2000/svg" className="fill-red-600 w-32 h-32" viewBox="-5 -5 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,1a7,7,0,1,0,7,7A7,7,0,0,0,8,1Zm.5,8.5v-6a.5.5,0,0,0-1,0v6a.5.5,0,0,0,1,0Zm0,3v-1a.5.5,0,0,0-1,0v1a.5.5,0,0,0,1,0Z"/>
          </svg>
          }
          <h1 className="text-4xl font-bold font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">{title}</h1>
          <p className="text-center">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Message;