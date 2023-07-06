import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function Header({ simple, hideAuth }) {
  const [categories, setCategories] = useState([]); 
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetchCategories();    
  }, []);

  const fetchCategories = async () => {
    // setLoading(true);
    fetch(`${process.env.API_BASE_URL}/category`)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data)
    })  
  };

  return (
    <header className="fixed-top">
      <nav className="navbar navbar-expand-xl navbar-light bg-white border-bottom">
        <div className="container">
          <Link href="/">
            <div className="navbar-brand">              
              <img               
                src={`https://oinks-com-br.s3.sa-east-1.amazonaws.com/site-content/site_logo_g.png`}
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
                  value={searchInput} onInput={e => setSearchInput(e.target.value)}
                />
                <Link href={`/busca/${searchInput}`} className="btn btn-primary">
                  <FontAwesomeIcon icon={["fas", "search"]} />
                </Link>
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
                    {categories.map((category, index) => {
                      return <li>
                        <a href={`/categoria/${category.name}`} className="dropdown-item">
                          {category.display_name}
                        </a>
                      </li>;
                    })}
                  </ul>
                </li>
              </ul>              
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" href="/">
                    <span>Ofertas</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/loja">
                    <span>Lojas</span>
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
