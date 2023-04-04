import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';

export const loginInitialState = {
  loginRequest: false,
  loggedIn: false,
  loginresponse: { error: { status: null } }
};


// export const PopupState = {
//   show: false,
//   rowdata: null,
//   header: 'Add',
//   data: null,
//   sourcecontrol: null,
//   softwareTechnologies: null,
//   programType: null,
//   leadManager: null
// }

export const UserCredentials = {
  data:null,
  rowdata:{},
  show: false,
  loader: false,
  header:"ADD",
  action:"View"
};
const mockStore = configureMockStore([thunk]);

export const TestStore = mockStore({
  login: loginInitialState,
  //popup: PopupState,
  details: UserCredentials
});