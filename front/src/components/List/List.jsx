import Card from '../Card/Card';

export default function List({ list }) {
  if (!list.cards) {
    return <div className="info has-text-white"> Liste...</div>;
  }

  return (
    <div key={list.id} className="column is-one-third">
      <div className="box">
        <h2 className="title is-4 has-text-primary">{list.title}</h2>

        {list.cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
