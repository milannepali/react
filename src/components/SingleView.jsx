import PropTypes from 'prop-types';

const SingleView = ({item, setSelectedItem}) => {
  if (!item) {
    return null;
  }

  return (
    <dialog open>
      <h2>{item.title}</h2>

      <p>{item.description}</p>

      {item.media_type.startsWith('image') ? (
        <img src={item.filename} alt={item.title} />
      ) : (
        <video src={item.filename} controls />
      )}

      <br />

      <button onClick={() => setSelectedItem(null)}>Close</button>
    </dialog>
  );
};

SingleView.propTypes = {
  item: PropTypes.object,
  setSelectedItem: PropTypes.func.isRequired,
};

export default SingleView;
