import "bootstrap/dist/css/bootstrap.min.css";

export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light border rounded" style={{ background: '#ACEB98' }}>
            <a className="navbar-brand" href="/">
                Rauchfrei
            </a>

            <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">
                            Übersicht
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/health">
                            Gesundheit
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/savings">
                            Sparziele
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/settings">
                            Einstellungen
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
  }
