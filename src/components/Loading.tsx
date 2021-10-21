import { FunctionComponent } from "react";
import {Animated} from 'react-animated-css';


interface ILoadingProps {
  loading: boolean;
}

const Loading: FunctionComponent<ILoadingProps> = (props) => {
  const { loading } = props;

  if (loading) {
      return <div className=''>
          <h1 className='fas fa-spinner fa-pulse mx-2'>
          </h1>
          <Animated
            animationIn='fadeIn'
            animationOut='bounceOut'
            isVisible={true}
            ></Animated>
          <h1>
          Loading...
          </h1>
      </div>;
  }

  return <>{props.children}</>;
};

export default Loading;
