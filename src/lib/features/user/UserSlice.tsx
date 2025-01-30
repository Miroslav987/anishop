import { createAppSlice } from '@/lib/CreateAppSlice';
import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';


let futureDate = new Date();
futureDate.setFullYear(futureDate.getFullYear() + 10);  // Устанавливаем дату на 10 лет вперед

interface settingCookState {
  expires: Date;
  path:'/',
  // secure: boolean;
  sameSite: any;
}

const settingCook:settingCookState = { 
  expires: futureDate, 
  // secure: false, 
  path:'/',
  sameSite: 'Strict' 
}


// Начальное состояние
const initialState = {
       userUID: Cookies.get("userUID") || null,
       userEmail: Cookies.get("userEmail")|| null,
       userPhone: Cookies.get("userPhone")|| null,
       userToken: Cookies.get("userToken")|| null
};

// Создаем сл
export const userSlice = createAppSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserPhone:(state,action) =>{
      state.userPhone =action.payload
      
      Cookies.set("userPhone",action.payload, settingCook)
      
    },
    setUser: (state, action) => {
      const { uid, email, displayName, photoURL, phoneNumber, token } = action.payload;
      
      state.userUID = uid;
      state.userEmail = email;
      state.userPhone = phoneNumber;
      state.userToken = token;
      
      Cookies.set("userUID",uid, settingCook)
      Cookies.set("userEmail", email, settingCook);
      Cookies.set("userEmail",email, settingCook)
      Cookies.set("userPhone",phoneNumber, settingCook)
      Cookies.set("userToken",token, settingCook)

    },
    clearUser: (state) => {
      state.userUID = null;
      state.userEmail = null;
      state.userPhone = null;
      state.userToken = null;
       Cookies.remove("userUID") ,
       Cookies.remove("userEmail"),
       Cookies.remove("userPhone"),
       Cookies.remove("userToken")
    },
  },
});

export const { setUser, clearUser,setUserPhone } = userSlice.actions;

export default userSlice.reducer;



