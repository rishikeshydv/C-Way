import { useSession } from "next-auth/react";
import React from "react";
function Enrolled() {
  const {data:session} = useSession()
  if (session.role !== 'enrolled'){
    return (
      <section>
        <div>
          <h1>
            You are not authorized!
          </h1>
        </div>
      </section>
    )
  }
  return (
    <div>
      <p>You are logged in as {session?.user?.name}</p>
      <h1>Only Enrolled Students Can Look at the contents:</h1>
      <div>
        <ul>
          <li>Video 1</li>
          <li>Video 2</li>
          <li>Video 3</li>
        </ul>
      </div>
    </div>
  );
}

export default Enrolled;
