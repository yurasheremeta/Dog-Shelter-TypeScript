import * as React from 'react';
import Spinner from './Spinner';

export interface WithSpinnerProps {
    isLoading: boolean;
}

const withSpinner = <T extends {}>(WrapepdCompnent: React.ComponentType<T>) => 
class WithSpinner extends React.Component<WithSpinnerProps & T>{
    render() {
       
        return this.props.isLoading ? <Spinner>loading...</Spinner> : <WrapepdCompnent {...this.props}/>;
        
    }

};
export default withSpinner;