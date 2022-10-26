import { Dna } from 'react-loader-spinner';
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
