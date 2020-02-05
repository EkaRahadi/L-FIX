import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import mainScreen from '../components/layouts/MainScreen/reducer';
import userReducer from './user';
import projectReducer from './dataProject';
import memberReducer from './dataMember';
import eventReducer from './dataEvent';
import squadSelectedReducer from './squadSelected';
import eventSelectedReducer from './eventSelected';
import dataMeasureReducer from './dataMeasure';
import measureSelectedReducer from './measureSelected';
import dataPointReducer from './dataPoint';
import updateDataPointReducer from './dataAsync';
import detailEventReducer from './detailEvent';
import userAccountReducer from './userAccount';

const rootReducer = combineReducers({
  // form: formReducer,
  // mainScreen,
  // user : userReducer,
  // dataProject : projectReducer,
  // dataMember : memberReducer,
  // dataEvent : eventReducer,
  // squadSelected : squadSelectedReducer,
  // eventSelected : eventSelectedReducer,
  // dataMeasure : dataMeasureReducer,
  // measureSelected : measureSelectedReducer,
  // dataPoint : dataPointReducer,
  // updateDataPoint: updateDataPointReducer,
  // detailEvent : detailEventReducer,
  // ======================================LFIX======================================================
  userAccount : userAccountReducer
});

export default rootReducer;
