import { StackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import UploadPhoto from '../screens/UploadPhoto';
import ServiceScreen from '../screens/ServiceScreen';
import GuaranteeScreen from '../screens/GuaranteeScreen'
import History from '../screens/History';
import Account from '../screens/Account';
import OnBoarding from '../screens/OnBoarding';
import Verification from '../screens/Verification';
import EventAdded from '../screens/EventAdded';
import Find from "../screens/Find";
import AssessmentSuccess from '../screens/AssessmentSuccess';

export const HomeStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const FindStack = StackNavigator(
  {
    Find: {
      screen: Find,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const ServiceScreenStack = StackNavigator(
  {
    ServiceScreen: {
      screen: ServiceScreen,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const GuaranteeScreenStack = StackNavigator(
  {
    GuaranteeScreen: {
      screen: GuaranteeScreen,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const AccountStack = StackNavigator(
  {
    Account: {
      screen: Account,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const OnBoardingStack = StackNavigator(
  {
    OnBoarding: {
      screen: OnBoarding,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);
//Tambahan
// export const MemberEventStack = StackNavigator(
//   {
//     MemberEvent: {
//       screen: MemberEvent,
//       navigationOptions: {
//         tabBarVisible: false
//       }
//     }
//   },
//   { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
// );
// export const CreateEventStack = StackNavigator(
//   {
//     CreateEvent: {
//       screen: CreateEvent,
//       navigationOptions: {
//         tabBarVisible: false
//       }
//     }
//   },
//   { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
// );

// export const ListAssessmentStack = StackNavigator(
//   {
//     ListAssessment:{
//       screen: ListAssessment,
//       navigationOptions:{
//         tabBarVisible: false
//       }
//     }
//   },
//   {headerMode:'none', navigationOptions: {tabBarVisible:false} }
// );

// export const GiveAssessmentStack = StackNavigator(
//   {
//     GiveAssessment:{
//       screen: GiveAssessment,
//       navigationOptions:{
//         tabBarVisible: false
//       }
//     }
//   },
//   {headerMode:'none', navigationOptions: {tabBarVisible:false} }
// );

export const AssessmentSuccessStack = StackNavigator(
  {
    AssessmentSuccess:{
      screen: AssessmentSuccess,
      navigationOptions:{
        tabBarVisible: false
      }
    }
  },
  {headerMode:'none', navigationOptions: {tabBarVisible:false} }
);

export const EventAddedStack = StackNavigator(
  {
    EventAdded:{
      screen: EventAdded,
      navigationOptions:{
        tabBarVisible: false
      }
    }
  },
  {headerMode: 'none', navigationOptions: {tabBarVisible:false} }
);

export const VerificationStack = StackNavigator(
  {
    Verification:{
      screen: Verification,
      navigationOptions:{
        tabBarVisible: false
      }
    }
  },
  {headerMode: 'none', navigationOptions: {tabBarVisible:false} }
);
