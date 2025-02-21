import { useState, useRef, useEffect } from 'react';
import listApi from '../../../services/api/list.js';
import { useBoardContext } from '../../../contexts/BoardContext/BoardContext.jsx';

export default function EditableTitleUpdateList({ setIsEditing, list }) {
  const [listTitle, setListTitle] = useState(list.title);
  const inputRef = useRef(null);
  const { updateList } = useBoardContext();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleUpdateTitle = () => {
    // Mettre à jour le list via l'API
    listApi
      .updateList(list.id, { title: listTitle, board_id: list.board_id })
      .then((response) => {
        if (response.id) {
          // Mettre à jour le contexte avec le titre modifié
          updateList(list.id, { title: listTitle });
        }
      });
  };

  const handleBlurOrEnter = (e) => {
    if (e.type === 'blur' || e.key === 'Enter') {
      if (listTitle.trim() !== list.title) {
        handleUpdateTitle();
      } else {
        setIsEditing(false);
      }
      setIsEditing(false);
    }
  };

  return (
    <input
      ref={inputRef}
      type="text"
      className="input"
      value={listTitle}
      onChange={(e) => setListTitle(e.target.value)}
      onBlur={handleBlurOrEnter}
      onKeyDown={handleBlurOrEnter}
      aria-label="Nom du list"
    />
  );
}
