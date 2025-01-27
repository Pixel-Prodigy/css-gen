import React from 'react'

export  function Header() {
  return (
    <div className="flex gap-16 px-12 pt-6 pb-4 border-b-1 border-gray-400/50 z-0 mb-6 items-center">
      
    <img className="w-36" src="https://css-generator-pearl.vercel.app/static/media/logo.b6da3de5ffed02bf99ca58f065b8230b.svg" alt="Css Generator" />
      <div className="flex gap-5">
        <a href="/button">Button</a>
        <a href="/paragraph">Paragraph</a>
        <a href="/input">Input</a>
    </div>
  </div>
)
}
