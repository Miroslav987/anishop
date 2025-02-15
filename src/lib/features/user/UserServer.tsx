import { auth } from "@/lib/fire";
import { browserLocalPersistence, GoogleAuthProvider, isSignInWithEmailLink, onAuthStateChanged, sendSignInLinkToEmail, signInWithEmailAndPassword, signInWithEmailLink, signInWithPopup, signOut } from "firebase/auth";
import { clearUser, setAdmin, setUser } from "./UserSlice";
import { useRouter } from "next/navigation";
import { useModal } from "@/context/ModalProvider";
import { useAppDispatch } from "@/lib/hooks";
import { getDoc, getDocs } from "firebase/firestore";

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
  const dispatch = useAppDispatch();
    const {closeModal} = useModal()

//   const sendSignInLink = async (email:string) => {
//     const actionCodeSettings = {
//       url: `https://almurut.vercel.app/finishsignup?email=${email}`,
//       handleCodeInApp: true,
//     };
    
//     try {
//       await sendSignInLinkToEmail(auth, email, actionCodeSettings);
//       window.localStorage.setItem('emailForSignIn', email); 
//       router.push('/profile');
      
//       return { success: true, message: 'Ссылка для входа отправлена на ваш email.' };
//     } catch (error:any) {
//       return { success: false, message: `Ошибка: ${error.message}` };
//     }
// };

  // const confirmEmailSign = async (url: string, emailFromStorage: string,router:any) => {
  //   if (isSignInWithEmailLink(auth, url)) {
  //     try {
  //       const result: any = await signInWithEmailLink(auth, emailFromStorage, url);
  //       dispatch(setUser(result.user));
  //       console.log(result.user);
  //       router.push('/profile');
  //     } catch (error: any) {
  //       console.error(error.message);
  //     }
  //   } else {
  //     return 'Неверная сссылка';
  //   }
  // };

   const handleGoogle = async () => {
    const provider =  new GoogleAuthProvider()
    try {
      const {user}= await signInWithPopup(auth,provider)
      router.push("/profile")
      dispatch(setUser(user))
    } catch (error) {
      console.log(error);    
      
    }
  };

  const SignUpAdmin = async(password:string) => {
    const emailAdmin = "admin@gmail.com"
    try {
      const {user} = await signInWithEmailAndPassword(auth, emailAdmin, password)
      dispatch(setAdmin(user))
      router.push("/admin")
      closeModal()
    } catch (error) {
      console.error(error);
      
    }
  }

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


  return {Logout,handleGoogle ,SignUpAdmin};
};

