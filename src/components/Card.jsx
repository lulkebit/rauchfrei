import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Card = ({ cardTitle, iconClass, children }) => (
  <div class="card" style={{ marginBottom: '20px' }}>
    <div class="card-header" style={{ color: '#ACEB98' }}>
      <i class={iconClass}></i> <b>{cardTitle}</b>
    </div>
    <div class="card-body">
      <p class="card-text">
        {children} {/* Hier werden die eingefügten Texte gerendert */}
      </p>
    </div>
  </div>
);

export default Card;
