import {AppRootStateType} from '../redux/store-redux';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

// this "HOC" redirects to the login page if the user is not logged in
const mapStateToProps = (state: AppRootStateType): any => {
  return {
    isAuth: state.auth.isAuth
  }
}

export function widthAuthRedirect(Component: any) {
  let RedirectComponent = (props: any) => {
    if (!props.isAuth) {
      return <Redirect to="/login"/>
    }
    return <Component {...props}/>
  }

  return connect(mapStateToProps)(RedirectComponent);
}