import React, {FC} from 'react';
import preloader from '../asstets/images/spinning-circles.svg'

type PreloaderPropsType = {}

const Preloader: FC<PreloaderPropsType> = () => {
  return (
    <div><img src={preloader} alt={'preloader'}/></div>
  );
};

export default Preloader;