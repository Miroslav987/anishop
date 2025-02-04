import { auth } from "@/lib/fire";
import { isSignInWithEmailLink, onAuthStateChanged, sendSignInLinkToEmail, signInWithEmailLink, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { clearUser, setUser } from "./UserSlice";
import { useRouter } from "next/navigation";
import { useModal } from "@/context/ModalProvider";

// 

//  const sendSignInLink = async (email:string) => {
//     const actionCodeSettings = {
//       url: `http://localhost:3000/finishsignup?email=${email}`,
//       handleCodeInApp: true,
//     };
  
//     try {
//       await sendSignInLinkToEmail(auth, email, actionCodeSettings);
//       window.localStorage.setItem('emailForSignIn', email); 
      
//       return { success: true, message: 'Ссылка для входа отправлена на ваш email.' };
//     } catch (error:any) {
//       return { success: false, message: `Ошибка: ${error.message}` };
//     }
// };


// export const confirmEmailSign = async (url:string,emailFromStorage:string,router:any) => {
  
//   if (isSignInWithEmailLink(auth, url)) {
//     const dispatch = useDispatch()
    
//     try {
//      const result:any = signInWithEmailLink(auth, emailFromStorage, url)
//       dispatch(setUser(result.user))
//       console.log(result.user);
      
//       router.push("/profile");
//     } catch (error:any) {
//       console.error(error.message);
      
//     }finally{}

//   } else {
//       return "Неверная сссылка"
//   }
// }


export const useAuth = () => {
  const router = useRouter();
  const dispatch = useDispatch();
    const {closeModal} = useModal()

  const sendSignInLink = async (email:string) => {
    const actionCodeSettings = {
      url: `https://almurut.vercel.app/finishsignup?email=${email}`,
      handleCodeInApp: true,
    };
    
    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem('emailForSignIn', email); 
      router.push('/profile');
      
      return { success: true, message: 'Ссылка для входа отправлена на ваш email.' };
    } catch (error:any) {
      return { success: false, message: `Ошибка: ${error.message}` };
    }
};

  const confirmEmailSign = async (url: string, emailFromStorage: string,router:any) => {
    if (isSignInWithEmailLink(auth, url)) {
      try {
        const result: any = await signInWithEmailLink(auth, emailFromStorage, url);
        dispatch(setUser(result.user));
        console.log(result.user);
        router.push('/profile');
      } catch (error: any) {
        console.error(error.message);
      }
    } else {
      return 'Неверная сссылка';
    }
  };

  const Logout = async ()=> {
    try{
      await signOut(auth)
      dispatch(clearUser())
      router.push("/")
      closeModal()
    }
    catch(error){
      console.error(error);
    }
  }


  return {confirmEmailSign,Logout,sendSignInLink};
};

