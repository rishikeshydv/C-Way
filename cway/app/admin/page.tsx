import React from 'react'
import { getServerSession } from 'next-auth'
import { handler } from '../api/auth/[...nextauth]/route'

async function Admin() {
  const session  = await getServerSession(handler)
  if (session.user.role !== 'admin'){
    return(
      <section>
        <div>
          <h1>You are not authorized!</h1>
        </div>
      </section>
    )
  }
  return (
    <div className='flex justify-center text-center'>
        <h1>Only admins can change the settings below:</h1>
        <div>
            <ul className='flex flex-col'>
                <li>Setting 1</li>
                <li>Setting 2</li>
                <li>Setting 3</li>
            </ul>
        </div>
        </div>
  )
}

export default Admin