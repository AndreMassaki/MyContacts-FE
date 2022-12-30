import { Link } from 'react-router-dom';

import {
  Container, InputSearchContainer, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import Modal from '../../components/Modal';

export default function Home() {
  return (
    <Container>
      <Modal danger />
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>
      <Header>
        <strong>3 Contatos</strong>
        <Link to="new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>André Massaki</strong>
              <small>instagram</small>
            </div>
            <span>andremassaki.dev@gmail.com</span>
            <span>(41) 9 9655-1430</span>
          </div>

          <div className="actions">
            <Link to="/edit/id">
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>André Massaki</strong>
              <small>instagram</small>
            </div>
            <span>andremassaki.dev@gmail.com</span>
            <span>(41) 9 9655-1430</span>
          </div>

          <div className="actions">
            <Link to="/edit/id">
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>André Massaki</strong>
              <small>instagram</small>
            </div>
            <span>andremassaki.dev@gmail.com</span>
            <span>(41) 9 9655-1430</span>
          </div>

          <div className="actions">
            <Link to="/edit/id">
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
