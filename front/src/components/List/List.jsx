import Card from '../Card/Card';
import EditableTitleCreateCard from '../EditableTitle/CreateCard/EditableTitleCreateCard.jsx';
import { useState } from 'react';
import EditableTitleUpdateList from '../EditableTitle/UpdateList/EditableTitleUpdateList.jsx';

export default function List({ list }) {
  if (!list) return <div className="title">Loading...</div>;

  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div key={list.id} className="column is-one-third">
      <div className="box">
        {isEditing ? (
          <EditableTitleUpdateList list={list} setIsEditing={setIsEditing} />
        ) : (
          <h2
            className="title is-4 has-text-primary"
            onClick={() => {
              setIsEditing(true);
            }}
          >
            {list.title}
          </h2>
        )}

        {/* Vérifie que list.cards est défini avant d'utiliser .map() */}
        {list.cards?.length > 0 &&
          list.cards.map((card) => <Card key={card.id} card={card} />)}

        {!isAdding ? (
          <button
            type="button"
            className="button is-primary"
            onClick={() => {
              setIsAdding(true);
            }}
          >
            Ajouter une carte
          </button>
        ) : (
          <EditableTitleCreateCard setIsAdding={setIsAdding} list={list} />
        )}
      </div>
    </div>
  );
}
