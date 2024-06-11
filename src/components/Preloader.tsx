import React, {FC} from 'react';

type PreloaderPropsType = {}

const Preloader: FC<PreloaderPropsType> = () => {
  return (
    <div style={{background: 'white'}}>LOADING</div>
  );
};

export default Preloader;