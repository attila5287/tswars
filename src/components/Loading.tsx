import { FunctionComponent } from "react";
import {Animated} from 'react-animated-css';


interface ILoadingProps {
  loading: boolean;
}

const Loading: FunctionComponent<ILoadingProps> = (props) => {
  const { loading } = props;

  if (loading) {
      return <div className='d-flex flex-row justify-content-center'>
          <h1 className='midi fas fa-spinner fa-pulse mx-2'>
          </h1>
          <Animated
            animationIn='slideInRight'
            animationOut='bounceOut'
            isVisible={true}
          >
          <h2>
          Loading...
          </h2>
          </Animated>
      </div>;
  }

  return <>{props.children}</>;
};

export default Loading;
