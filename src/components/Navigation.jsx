import "bootstrap/dist/css/bootstrap.min.css";

export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light border rounded" style={{ background: '#ACEB98' }}>
            <a className="navbar-brand" href="/">
                Rauchfrei
            </a>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
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
