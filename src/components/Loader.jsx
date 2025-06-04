import { BarLoader } from 'react-spinners';

const Loader = () => {
  return (
    <BarLoader
      color="#198f51"
      height={18}
      speedMultiplier={1}
      width={220}
      cssOverride={{
        display: 'block',
        margin: '0 auto',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    />
  );
};

export default Loader;
