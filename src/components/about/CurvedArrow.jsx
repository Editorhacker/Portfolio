import React from 'react'

const CurvedArrow = () => {
    return (
        <svg
            width="100" // Scaled down default size, allow override via className if needed
            height="100"
            viewBox="0 0 320 420"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="inline-block" // manageable via parent class
        >
            {/* Main curved arrow (stroke 1) */}
            <path
                d="
          M90 40
          C20 120, 40 260, 160 260
          C250 260, 220 180, 160 180
          C100 180, 110 240, 190 300
          C240 340, 270 360, 300 360
        "
                stroke="#ffffff"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* Slight offset stroke for hand-drawn effect */}
            <path
                d="
          M94 44
          C28 122, 48 258, 158 262
          C246 264, 214 186, 156 186
          C104 186, 116 242, 186 304
          C236 342, 266 358, 296 358
        "
                stroke="#ffffff"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.85"
            />

            {/* Arrow head */}
            <path
                d="M300 360 L270 340"
                stroke="#ffffff"
                strokeWidth="7"
                strokeLinecap="round"
            />

            <path
                d="M300 360 L270 380"
                stroke="#ffffff"
                strokeWidth="7"
                strokeLinecap="round"
            />
        </svg>
    )
}

export default CurvedArrow
