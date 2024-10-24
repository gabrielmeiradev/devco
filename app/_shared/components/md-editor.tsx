import React from 'react';
import MarkdownEditor from '@uiw/react-markdown-editor';

const Editor = ({className} : {className: string}) => {
  return (
    <MarkdownEditor
      value={""}
      className={className}
      onChange={(value, viewUpdate) => {
        console.log(value, viewUpdate)
      }}
    />
  )
};

export default Editor;