import "bootstrap/dist/css/bootstrap.min.css";

export default function Card(props) {
    return (  
        <div class="card" style={{ marginBottom: '20px' }}>
            <div class="card-header" style={{ color: '#ACEB98' }}>
                <i class={props.iconClass}></i> <b>{props.cardTitle}</b>
            </div>
            <div class="card-body">
                <p class="card-text">
                    {props.children}
                </p>
            </div>
        </div>
    );
  }