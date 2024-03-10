import { Header } from 'components/Header/Header';
import css from './SharedLayout.module.css';
import { Footer } from '../Footer/Footer';

const SharedLayout = ({ children }) => {
  return (
    <div className={css.container}>
      <Header />
      <main className={css.mainWrapper}>{children}</main>
      <Footer />
    </div>
  );
};

export default SharedLayout;
