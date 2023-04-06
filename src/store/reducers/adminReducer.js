import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoadingGenDer: false,
    genders: [],
    roles: [],
    positions: [],
    users: [],
    topDoctors: [],
    allDoctors: [],
    allScheduleTime: [],
    allRequiredDoctorInfor: [],
    extraDoctorInforById: [],
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            let copyState = { ...state };
            copyState.isLoadingGenDer = true;
            return {
                ...copyState,
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            //let copyState = { ...state };
            state.genders = action.data;
            state.isLoadingGenDer = false;
            return {
                ...state,
            }
        case actionTypes.FETCH_GENDER_FAILED:
            // let copyState = { ...state };
            state.isLoadingGenDer = false;
            state.genders = [];

            return {
                ...state,
            }
        case actionTypes.FETCH_POSITION_SUCCESS:
            //let copyState = { ...state };
            state.positions = action.data;
            return {
                ...state,
            }
        case actionTypes.FETCH_POSITION_FAILED:
            // let copyState = { ...state };
            state.positions = [];

            return {
                ...state,
            }
        case actionTypes.FETCH_ROLE_SUCCESS:
            //let copyState = { ...state };
            state.roles = action.data;
            return {
                ...state,
            }
        case actionTypes.FETCH_ROLE_FAILED:
            // let copyState = { ...state };
            state.roles = [];

            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_USERS_SUCCESS:
            // let copyState = { ...state };
            state.users = action.users;

            return {
                ...state,
            }

        case actionTypes.FETCH_ALL_USERS_FAILED:
            // let copyState = { ...state };
            state.users = [];

            return {
                ...state,
            }
        case actionTypes.FETCH_TOP_DOCTORS_SUCCESS:
            // let copyState = { ...state };
            state.topDoctors = action.data;

            return {
                ...state,
            }

        case actionTypes.FETCH_TOP_DOCTORS_FAILED:
            // let copyState = { ...state };
            state.topDoctors = [];

            return {
                ...state,
            }

        case actionTypes.FETCH_ALL_DOCTORS_SUCCESS:
            // let copyState = { ...state };
            state.allDoctors = action.data;

            return {
                ...state,
            }

        case actionTypes.FETCH_ALL_DOCTORS_FAILED:
            // let copyState = { ...state };
            state.allDoctors = [];

            return {
                ...state,
            }
        case actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_SUCCESS:
            // let copyState = { ...state };
            state.allScheduleTime = action.dataTime;

            return {
                ...state,
            }

        case actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILED:
            // let copyState = { ...state };
            state.allScheduleTime = [];

            return {
                ...state,
            }
        case actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_SUCCESS:
            // let copyState = { ...state };
            state.allRequiredDoctorInfor = action.data;

            return {
                ...state,
            }

        case actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_FAILED:
            // let copyState = { ...state };
            state.allRequiredDoctorInfor = [];

            return {
                ...state,
            }

        case actionTypes.FETCH_EXTRA_DOCTOR_INFOR_BY_ID_SUCCESS:
            // let copyState = { ...state };
            state.extraDoctorInforById = action.data;
            return {
                ...state,
            }

        case actionTypes.FETCH_EXTRA_DOCTOR_INFOR_BY_ID_FAILED:
            // let copyState = { ...state };
            state.extraDoctorInforById = [];

            return {
                ...state,
            }

        default:
            return state;
    }
}

export default adminReducer;