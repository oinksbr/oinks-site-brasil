import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const categories = ["Informática","Beleza e perfumaria","Eletrodomesticos","Games","Tv e video","Audio","Celulares e Smartphones","Casa inteligente","Tablets e Ipads","Eletroportateis","Automotivo"];

function Header({ simple, hideAuth }) {
  let title = process.env.APP_NAME;
  return (
    <header className="fixed-top">
      <nav className="navbar navbar-expand-xl navbar-light bg-white border-bottom">
        <div className="container">
          <Link href="/">
            <div className="navbar-brand">              
              <img               
                src={`https://oinks.com.br/wp-content/uploads/logo_oinks.png`}
                width={160}
                height={35}                
              />
            </div>
          </Link>          
          <div className="d-flex">
          <div className="input-group">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Buscar um produto..."
                  aria-label="Buscar um produto"
                  size="32"
                />
                <button type="button" className="btn btn-primary">
                  <FontAwesomeIcon icon={["fas", "search"]} />
                </button>
              </div>
          </div>
        </div>
      </nav>
      {!simple && (
        <nav className="navbar navbar-expand-lg .navbar-nav-scroll navbar-light bg-white">
          <div className="container">
            <button
              className="navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-3">
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link-dropdown dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    id="languageMenuLink"
                  >
                    Categorias
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-macos dropdown-menu-start"
                    aria-labelledby="languageMenuLink"
                  >
                    {categories.map((e, i) => {
                      return <li>
                        <a href="#" className="dropdown-item">
                          {e}
                        </a>
                      </li>;
                    })}
                  </ul>
                </li>
              </ul>              
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/explore">
                    <span className="nav-link">Ofertas</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/explore">
                    <span className="nav-link">Lojas</span>
                  </Link>
                </li>                
              </ul>
              
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
