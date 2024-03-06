import "bootstrap/dist/css/bootstrap.min.css";

export default function Card(props) {
    return (  
        <div class="card" style={{ marginBottom: '20px' }}>
            <div class="card-body">
                <h5 class="card-title" style={{ color: '#ACEB98' }}>{props.cardTitle}</h5>
                <p class="card-text">
                    {props.children}
                </p>
            </div>
        </div>
    );
  }