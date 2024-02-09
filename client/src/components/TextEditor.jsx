import { useCallback, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ align: [] }],
  ["image", "blockquote", "code-block"],
  ["clean"],
];

const TextEditor = () => {
  const [quill, setQuill] = useState(null);

  const textEditorContainerRef = useCallback((textEditorContainer) => {
    if (textEditorContainer === null) return;

    textEditorContainer.innerHTML = "";

    const editor = document.createElement("div");
    textEditorContainer.append(editor);

    const q = new Quill(editor, {
      theme: "snow",
      modules: {
        toolbar: TOOLBAR_OPTIONS,
      },
    });
    setQuill(q);
  }, []);

  return <div ref={textEditorContainerRef} className="text-editor-container" />;
};

export default TextEditor;
