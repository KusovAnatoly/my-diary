'use client'
import './tiptap.css'

import {Color} from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle, {TextStyleOptions} from '@tiptap/extension-text-style'
import StarterKit from '@tiptap/starter-kit'
import {EditorProvider} from '@tiptap/react'
import EditorCommandBar from "@/app/components/EditorCommandBar";

const Editor = () => {
    return <EditorProvider immediatelyRender={false} slotBefore={<EditorCommandBar/>} extensions={extensions} content={content}/>;
}

const extensions = [
    Color.configure({types: [TextStyle.name, ListItem.name]}),
    TextStyle.configure({ types: [ListItem.name] } as Partial<TextStyleOptions>),
    StarterKit.configure({
        italic: {},
        bulletList: {

            keepMarks: true,
            keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
        orderedList: {
            keepMarks: true,
            keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
    }),
]

const content = `
<h2>
  Hi there,
</h2>
<p>
  <i>this</i> is a <em>basic</em> example of <strong>Tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
<ul>
  <li>
    That’s a bullet list with one …
  </li>
  <li>
    … or two list items.
  </li>
</ul>
<p>
  Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
</p>
<pre><code class="language-css">body {
  display: none;
}</code></pre>
<p>
  I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
</p>
<blockquote>
  Wow, that’s amazing. Good work, boy! 👏
  <br />
  — Mom
</blockquote>
`

export default Editor;
