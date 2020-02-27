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
import dataKategoriReducer from './dataKategori';
import waitingServiceReducer from './waitingService';
import onProcessServiceReducer from './onProcessService';
import doneServiceReducer from './doneService';
import detailWaitingReducer from './detailWaiting';
import detailTechnicianReducer from './detailTechnician';
import detailOnProcessReducer from './detailOnProcess';
import detailDamageReducer from './detailDamages';
import detailDoneReducer from './detailDone';
import ratingReducer from './rating';

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
  userAccount : userAccountReducer,
  dataCategory: dataKategoriReducer,
  waitingService: waitingServiceReducer,
  onProcessService: onProcessServiceReducer,
  doneService: doneServiceReducer,
  detailWaiting: detailWaitingReducer,
  detailTechnician: detailTechnicianReducer,
  detailOnProcess: detailOnProcessReducer,
  detailDamage: detailDamageReducer,
  detailDone: detailDoneReducer,
  rating: ratingReducer
});

export default rootReducer;