import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { LOGIN } from './actions/type';
import { loginSuccess, loginFailed } from './actions';
import checkLogin from './api/checkLogin';


const loginEpic = action$ =>
  action$.ofType(LOGIN)
    .mergeMap(action =>
      Observable.fromPromise(checkLogin())
        .map(response => loginSuccess(response))
        .catch(error => Observable.of(loginFailed(error)))
    );

export default loginEpic;
