import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ProgressBar from '../Bars/ProgressBarMoney';

const Card = ({ cardId, cardTitle, iconClass, children, onRemove }) => {
  const formattedPrice = Number(children).toLocaleString('de-DE');

  return (
    <div className="card" style={{ marginBottom: '20px' }}>
      <div className="card-header" style={{ color: '#ACEB98' }}>
        <i className={iconClass}></i> <b>{cardTitle}</b>
        <span className="float-end" style={{ cursor: 'pointer', color: 'red' }} onClick={() => onRemove(cardId)}>X</span> {/* X-Symbol zum Entfernen der Karte */}
      </div>
      <div className="card-body">
        <p className="card-text">
          Preis: {formattedPrice}€
        </p>
        <ProgressBar price={children}></ProgressBar>
      </div>
    </div>
  );
};

export default Card;
