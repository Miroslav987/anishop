import { createAppSlice } from '@/lib/CreateAppSlice';
import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';


let futureDate = new Date();
futureDate.setFullYear(futureDate.getFullYear() + 10);  // Устанавливаем дату на 10 лет вперед

interface settingCookState {
  expires: Date;
  path: '/',
  // secure: boolean;
  sameSite: any;
}

const settingCook: settingCookState = {
  expires: futureDate,
  // secure: false, 
  path: '/',
  sameSite: 'Strict'
}

export interface USER {
  uid: string | null;
  photoURL: string | null;
  name: string | null;
  email: string | null;
  phone: string | null;
  name_company: string | null;
  admin_access: boolean;
  dealer_access: boolean;
  request_dealer: boolean;
  request_admin: boolean;
}

interface State {
  user: USER;
  users: USER[]; 
}


const convertToBoolean = (value: string | undefined): boolean => {
  return value === "true";
};


const initialState: State = {
  user: {
    uid: Cookies.get("uid") || null,
    photoURL: Cookies.get("photoURL") || null,
    name: Cookies.get("name") || null,
    email: Cookies.get("email") || null,
    phone: Cookies.get("phone") || null,
    name_company: Cookies.get("name_company") || null,
    admin_access: convertToBoolean(Cookies.get("admin_access")) || false,
    dealer_access: convertToBoolean(Cookies.get("dealer_access")) || false,
    request_dealer: convertToBoolean(Cookies.get("request_dealer")) || false,
    request_admin: convertToBoolean(Cookies.get("request_admin")) || false,
  },
  users: [], 
};


export const userSlice = createAppSlice({
  name: 'user',
  initialState,
  reducers: {



    setUserPhone: (state, action) => {
      state.user.phone =
        action.payload
      Cookies.set("userPhone", action.payload, settingCook)
    },

    setUser: (state, action) => {
      const payload = action.payload;
      for (const key in payload) {
        if (payload.hasOwnProperty(key)) {
          Cookies.set(key, payload[key], settingCook);
        }
      }
      state.user = { ...state.user, ...payload };
    },

    clearUser: (state) => {
      state.user.uid = null;
      state.user.email = null;
      state.user.phone = "";
      Cookies.remove("uid");
      Cookies.remove("name");
      Cookies.remove("photoURL");
      Cookies.remove("email");
      Cookies.remove("phone");
      Cookies.remove("name_company");
      Cookies.remove("admin_access");
      Cookies.remove("dealer_access");
      Cookies.remove("request_dealer");
      Cookies.remove("request_admin");
    },

    SetUsers:(state , action) => {
        state.users = action.payload
    },

  },
});

export const { setUser, clearUser, setUserPhone, SetUsers } = userSlice.actions;
 
export default userSlice.reducer;



