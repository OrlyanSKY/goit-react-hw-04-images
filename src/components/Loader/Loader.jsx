import { Dna } from 'react-loader-spinner';
import PropTypes from 'prop-types';

export const Loader = ({ visible }) => (
  <Dna
    visible={visible}
    height="50"
    width="50"
    ariaLabel="dna-loading"
    wrapperStyle={{
      marginLeft: 'auto',
      marginRight: 'auto',
    }}
    wrapperClass="dna-wrapper"
  />
);

Loader.propTypes = {
  visible: PropTypes.bool.isRequired,
};
