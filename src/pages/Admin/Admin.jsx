import { Link } from 'react-router-dom';
import './Admin.css';

function Admin() {
    return (
        <div className="page-container">
            <h2>Administração</h2>
            <br />

            <div className="admin-sections">
                <Link to="/register-collaborator" className="admin-card">
                    <h2>Usuários</h2>
                    <p>Gerencie seus usuários.</p>
                </Link>

                <Link to="/financial" className="admin-card">
                    <h2>Financeiro</h2>
                    <p>Monitore as transações financeiras e mantenha os registros atualizados.</p>
                </Link>

                <Link to="/register-accommodation" className="admin-card">
                    <h2>Serviços</h2>
                    <p>Cadastre, edite e controle os serviços extras oferecidos, garantindo uma melhor experiência aos hóspedes.</p>
                </Link>
            </div>
        </div>
    );
}

export default Admin;
