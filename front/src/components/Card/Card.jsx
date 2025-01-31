export default function Card({ card }) {
  return (
    <div key={card.id} className="card mb-3">
      <header className="card-header">
        <p className="card-header-title">{card.title}</p>
        <button className="card-header-icon">
          <span className="icon">
            <i className="fas fa-edit"></i>{' '}
            {/* Replace with your desired icon */}
          </span>
        </button>
      </header>

      <div className="card-content">
        <div className="content">
          <p>{card.description}</p>
          {card.labels.length > 0 && (
            <div className="tags">
              {card.labels.map((label) => (
                <span key={label.id} className="tag is-info">
                  {label.title}
                </span>
              ))}
            </div>
          )}
          {card.comments.length > 0 && (
            <div className="mt-3">
              <strong>Commentaires :</strong>
              <ul>
                {card.comments.map((comment) => (
                  <li key={comment.id}>{comment.content}</li>
                ))}
              </ul>
            </div>
          )}
          {/*{card.image && (*/}
          {/*  <figure className="image is-4by3 mt-3">*/}
          {/*    <img src={card.image} alt="Illustration" />*/}
          {/*  </figure>*/}
          {/*)}*/}
        </div>
      </div>
    </div>
  );
}
