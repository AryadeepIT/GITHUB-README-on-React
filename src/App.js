import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';

import './App.css'

const App = () => {
  const file_name = 'Portfolio.md';
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import(`./markdown/${file_name}`)
      .then((res) => {
        fetch(res.default)
          .then(res => res.text())
          .then(res => setMarkdown(res));

      })
      .catch(err => console.log(err));

  });
  return (
    <div className="defaultshape">
      <Markdown>
        
        {markdown}
        
      </Markdown>
    </div>
  )
}

export default App
