import css from './BtnStyles.module.css';
export const LearnMore = ({ openModal }) => {
  return (
    <button className={css.btnMore} type="button" onClick={openModal}>
      Learn More
    </button>
  );
};
