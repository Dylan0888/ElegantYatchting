import React from 'react'

const Gradient = () => {
    return (
        <div
            className="pointer-events-none absolute inset-0 rounded-t-lg"

            style={{
                background: `
      linear-gradient(
        to right,
        rgba(5, 10, 20, 0.88) 0%,
        rgba(5, 10, 20, 0.72) 22%,
        rgba(5, 10, 20, 0.45) 40%,
        rgba(5, 10, 20, 0.12) 60%,
        rgba(5, 10, 20, 0) 100%
      ),

      linear-gradient(
        to top,
        rgba(0,0,0,0.55) 0%,
        rgba(0,0,0,0.18) 30%,
        rgba(0,0,0,0) 55%
      ),

      linear-gradient(
        to bottom,
        rgba(0,0,0,0.30) 0%,
        rgba(0,0,0,0) 20%
      )
    `,
            }}
        />
    )
}

export default Gradient
