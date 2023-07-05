import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function Footer() {
  return (
    <div className="vstack-footer mt-auto">
      <footer className="py-4 bg-light">
        <div className="container py-3">
          <div className="row g-3">
            <div className="col-md-6 col-lg-4 d-none d-md-block">
              <h5 className="text-dark">Contato</h5>
              <div className="vstack gap-1">
                <small className="d-flex text-dark text-opacity-75 gap-2">
                  <FontAwesomeIcon
                    icon={["fas", "envelope"]}
                    className="mt-1"
                  />
                  <div>contato@oinks.com.br</div>
                </small>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 d-none d-md-block">
              <h5 className="text-dark">Institucional</h5>
              <div className="vstack small gap-2">
                <a href="#" className="footer-link">
                  Sobre nós
                </a>
                <a href="#" className="footer-link">
                  Politica de Privacidade
                </a>
                <a href="#" className="footer-link">
                  Termos de Uso
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 d-none d-md-block">
            </div>
            <div className="col-md-6 col-lg-4">    
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4 bs-brandeis-blue">
        <div className="container d-flex">
          <span className="text-light text-opacity-50 my-auto">
            &copy; {new Date().getFullYear()} Oinks Brasil
          </span>          
        </div>
      </footer>
    </div>
  );
}

export default Footer;
