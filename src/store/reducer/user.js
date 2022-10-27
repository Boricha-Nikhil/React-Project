import { userConstants } from '../constant/user';

const initialState = {
    isLoading:false,
    user_data: null,
    all_data:[],
    errors:null,
    success:false
}

export const user = (state = initialState, {type,payload}) => {
  switch (type) {

    //REGISTER USER
    case userConstants.REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
        success:false
      };
    case userConstants.REGISTER_SUCCESS:
      return {
        ...state,
        isLoading:false,
        success:payload.success
    };
    case userConstants.REGISTER_FAILURE:
      return {
          ...state,
          isLoading: false,
          errors:payload
    };
    
    //LOGIN USER
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        user_data:payload,
        success:true,
        isLoading:false
    };
    case userConstants.LOGIN_FAILURE:
      return {
          ...state,
          isLoading: false,
          errors:payload
    };

    //SUCCESS HANDLE
    case userConstants.HANDLE_SUCCESS:
      return {
        ...state,
        success: false,
        errors: null
      }

      case userConstants.GETDATA_REQUEST:
        return {
          ...state,
          isLoading: true
        };
      case userConstants.GETDATA_SUCCESS:
        return {
          ...state,
          all_data:payload,
          isLoading:false
      };

    

    //STATE_CLEAR
    case "CLEAR":
        return {
            ...initialState
        }

    //DEFAULt STATE
    default:
      return state
  }
}