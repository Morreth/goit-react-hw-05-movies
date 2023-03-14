import Loader from 'components/Loader';

const Container = ({ isLoading, error, children }) => {
  return (
    <>
      {isLoading && <Loader />}
      {error && <h2>{error}</h2>}
      {children}
    </>
  );
};
export default Container;
