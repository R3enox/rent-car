import css from './HomePage.module.css';
const HomePage = () => {
  return (
    <section className={css.container}>
      <div className={css.bgImg}>
        <h1 className={css.mainTitle}>Car rental from $10</h1>
        <ul className={css.listHome}>
          <li>
            <p>Free delivery of cars in Ukraine</p>
          </li>
          <li>
            <p>Ability to travel abroad</p>
          </li>
          <li>
            <p>Full insurance</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HomePage;
