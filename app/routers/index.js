import { SwitchNavigator } from 'react-navigation';
import { OnBoardingStack } from './stackNavigator';
import {AssessmentSuccessStack} from './stackNavigator';
import {EventAddedStack} from './stackNavigator';
import { Drawer } from './drawerNavigator';
// import MemberEvent from '../screens/MemberEvent';
// import ListAssessment from '../screens/ListAssessment';
// import GiveAssessment from '../screens/GiveAssessment';
// import CreateEvent from '../screens/CreateEvent';
// import ReviewPlanning from '../screens/ReviewPlanning';
// import Details from '../screens/Details';
import Verification from '../screens/Verification';
import Find from '../screens/Find';
import WaitingScreen from '../screens/WaitingScreen';
import OnProcessScreen from '../screens/OnProcessScreen';
import DoneScreen from '../screens/DoneScreen';
import RatingScreen from '../screens/RatingScreen';
import DetailGuaranteeScreen from '../screens/DetailGuarantee';
import LoginRegisterScreen from '../screens/LoginRegister';
import RegisterScreen from '../screens/RegisterScreen';
import DetailTechnician from '../screens/DetailTechnician';
import DetailDamages from '../screens/DetailDamages';
import DetailDamagesDone from '../screens/DetailDamagesDone';
import TermsAndConditions from '../screens/TermsNCondicitions';

export default SwitchNavigator(
  {
    OnBoarding: OnBoardingStack,
    App: Drawer,
    // MemberEvent: MemberEvent,
    // CreateEvent: CreateEvent,
    // ListAssessment: ListAssessment,
    // GiveAssessment: GiveAssessment,
    // AssessmentSuccess: AssessmentSuccessStack,
    // EventAdded: EventAddedStack,
    // ReviewPlanning : ReviewPlanning,
    // Details : Details,
    Verification : Verification,
    Find : Find,
    Waiting : WaitingScreen,
    OnProcess : OnProcessScreen,
    Done : DoneScreen,
    Rating: RatingScreen,
    DetailGuarantee: DetailGuaranteeScreen,
    LoginRegister: LoginRegisterScreen,
    Register: RegisterScreen,
    DetailTechnician: DetailTechnician,
    DetailDamages: DetailDamages,
    DetailDamagesDone: DetailDamagesDone,
    TermsConditions: TermsAndConditions
  },
  {
    initialRouteName: 'LoginRegister'
  }
);
