export function reducer(state, action) {
  const emailRe = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const passwordRe =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const numberLimit = /^\d{10}$/;
  switch (action.type) {
    case "firstName": {
      return {
        ...state,
        user: {
          ...state.user,
          first_name: action.fName,
        },
      };
    }
    case "lastName": {
      return {
        ...state,
        user: {
          ...state.user,
          last_name: action.lName,
        },
      };
    }
    case "email": {
      if (emailRe.test(action.email)) {
        return {
          ...state,
          user: {
            ...state.user,
            email: action.email,
          },
        };
      } else {
        if (state.user.email) {
          delete state.user.email;
          break;
        } else {
          return state;
        }
      }
    }
    case "password": {
      if (passwordRe.test(action.password)) {
        return {
          ...state,
          user: {
            ...state.user,
            password: action.password,
          },
        };
      } else {
        if (state.user.password) {
          delete state.user.password;
          break;
        } else {
          return state;
        }
      }
    }
    case "national_id": {
      if (action.national_id.length === 9) {
        return {
          ...state,
          user: {
            ...state.user,
            national_id: action.national_id,
          },
        };
      } else {
        if (state.user.national_id) {
          delete state.user.national_id;
          break;
        } else {
          return state;
        }
      }
    }
    case "nationality": {
      return {
        ...state,
        user: {
          ...state.user,
          nationality: action.nationality,
        },
      };
    }
    case "date_of_birth": {
      return {
        ...state,
        user: {
          ...state.user,
          date_of_birth: action.birth,
        },
      };
    }
    case "phoneNumber": {
      if (numberLimit.test(action.phoneNumber)) {
        return {
          ...state,
          user: {
            ...state.user,
            phone_number: action.phoneNumber,
          },
        };
      } else {
        if (state.user.phone_number) {
          delete state.user.phone_number;
          break;
        } else {
          return state;
        }
      }
    }
    case "country": {
      return {
        ...state,
        user: {
          ...state.user,
          country: action.country,
        },
      };
    }
    case "city": {
      return {
        ...state,
        user: {
          ...state.user,
          city: action.city,
        },
      };
    }
    case "gender": {
      return {
        ...state,
        user: {
          ...state.user,
          gender: action.gender,
        },
      };
    }
    case "chronic_diseases": {
      return {
        ...state,
        chronic_diseases: action.chronic_diseases,
      };
    }
    case "medical_report": {
      return {
        ...state,
        medical_report: action.medical_report,
      };
    }
    default: {
      return state;
    }
  }
}
