import React from 'react'

const NotFound = ({ errorMessage }: { errorMessage: string }) => {
    return (
      <div>
        {
          errorMessage === null || errorMessage === "" ?
            (
              <div>
                <h3>No crime found in this area!</h3>
                <p>Please try another post code.</p>
              </div>
            )
            :
            (
              <div>
                <h3>{errorMessage}</h3>
                <p>Please try another post code.</p>
              </div>
            )
        }
      </div>
    )
  
  }
  
  export default NotFound
