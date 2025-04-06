import { auth, db } from "@/lib/fire";
import { GoogleAuthProvider, OAuthProvider, reauthenticateWithPopup, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { clearUser, SetUsers, setUser, USER } from "./UserSlice";
import { useRouter } from "next/navigation";
import { useModal } from "@/context/ModalProvider";
import { useAppDispatch } from "@/lib/hooks";
import { collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { log } from "console";
import { retry } from "@reduxjs/toolkit/query";


export const useUser = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { closeModal } = useModal()



  const SignUpAdmin = async (password: string, user: any) => {
    const emailAdmin = "admin@gmail.com"
    try {
      await signInWithEmailAndPassword(auth, emailAdmin, password)
      const updateUser = { ...user, admin_access: true }
      await setDoc(doc(db, `users/${updateUser.uid}`), updateUser)
      dispatch(setUser(updateUser))
      router.push("/admin")
      closeModal()
    } catch (error) {
      console.error(error);

    }
  }
  const AddEditPhone = async (phone: string, user: any) => {
    try {
      const updateUser = { ...user, phone: phone }
      await setDoc(doc(db, `users/${updateUser.uid}`), updateUser)
      dispatch(setUser(updateUser))
      closeModal()
    } catch (error) {
      console.error(error);

    }
  }

  const handleGoogle = async () => {
    const provider = new GoogleAuthProvider()
    try {
      const { user } = await signInWithPopup(auth, provider)
      if (user.uid) {
        await LoginProfile(user)
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleApple = async () => {
    const provider = new OAuthProvider('apple.com');
    try {

      const { user } = await signInWithPopup(auth, provider)
      console.log(user);
      
      if (user.uid) {
        await LoginProfile(user)
      }
    } catch (error: any) {
      if (error.message == "Firebase: Error (auth/operation-not-allowed).") {
        return alert("работает только на устройствах Apple")
      }
      console.log(error.message);

      //  console.error(error);

    }
  };

  const LoginProfile = async (user: any) => {
    try {
      const data = doc(db, `users/${user.uid}`);
      const userinfo = await getDoc(data);
      if (!userinfo.exists()) {
        await createProfile(user);
      }
      else {
        dispatch(setUser(userinfo.data()))
      }
    } catch (error) {
      console.error(error);
    }
  }

  const createProfile = async (user: any) => {
    try {
      const userData = {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        phone: user.phoneNumber,
        photoURL: user.photoURL,
        my_order: [],
        client_order: [],
        name_company: "",
        admin_access: false,
        dealer_access: false,
        request_dealer: false,
        request_admin: false,
      };

      await setDoc(doc(db, `users`, `${userData.uid}`), userData);
      await LoginProfile(userData)
    } catch (error) {
      console.error(error);
    }
  }


  const GetProfile = async (uid: any) => {
    try {
      const data = doc(db, `users/${uid}`);
      const userinfo = await getDoc(data);
      dispatch(setUser(userinfo.data()))
    } catch (error) {
      console.error(error);
    }
  }


  const GetUsers = async () => {
    try {
      const data = await getDocs(collection(db, "users"))
      const users = data.docs.map(doc => ({
        ...doc.data(),
      }));
      dispatch(SetUsers(users))
    } catch (error) {
      console.error(error);

    }
  }

  const FilterUser = async (filter: string) => {
    try {
      if (filter === "all") {
        return GetUsers()
      }
      const userQuery = query(collection(db, 'users'), where(filter, '>=', true),);
      const userSnapshot = await getDocs(userQuery);
      const user = userSnapshot.docs.map(doc => ({
        ...doc.data(),
      }));
      dispatch(SetUsers(user))

    } catch (error) {
      console.error(error);

    }
  }


  const AdminAccess = async (user: USER, admin_access: boolean) => {
    try {

      if (!admin_access) {
        const updateUser = { ...user, admin_access: true, request_admin: false }
        await setDoc(doc(db, `users/${updateUser.uid}`), updateUser)
        GetUsers()
        console.log(true);
        return;
      }
      const updateUser = { ...user, admin_access: false, request_admin: false }
      await setDoc(doc(db, `users/${updateUser.uid}`), updateUser)
      GetUsers()
      console.log(false);

    } catch (error) {
      console.error(error);

    }
  }

  const DealerAccess = async (user: USER, dealer_access: boolean) => {
    try {

      if (!dealer_access) {
        const updateUser = { ...user, dealer_access: true, request_dealer: false }
        await setDoc(doc(db, `users/${updateUser.uid}`), updateUser)
        GetUsers()
        console.log(true);
        return;
      }
      const updateUser = { ...user, dealer_access: false, request_dealer: false }
      await setDoc(doc(db, `users/${updateUser.uid}`), updateUser)
      GetUsers()
      console.log(false);

    } catch (error) {
      console.error(error);

    }
  }

  const RequestAdmin = async (user: USER) => {
    try {
      const updateUser = { ...user, request_admin: true }
      await setDoc(doc(db, `users/${updateUser.uid}`), updateUser)
      dispatch(setUser(updateUser))
      closeModal()
    } catch (error) {
      console.error(error);

    }
  }
  const RequestDealer = async (user: USER) => {
    try {
      const updateUser = { ...user, request_dealer: true }
      await setDoc(doc(db, `users/${updateUser.uid}`), updateUser)
      dispatch(setUser(updateUser))
      closeModal()
    } catch (error) {
      console.error(error);

    }
  }




  const Logout = async () => {
    try {
      await signOut(auth)
      dispatch(clearUser())
      router.push("/")
      closeModal()

    }
    catch (error) {
      console.error(error);
    }
  }


  return {
    Logout,
    handleGoogle,
    SignUpAdmin,
    GetProfile,
    AddEditPhone,
    FilterUser,
    GetUsers,
    AdminAccess,
    DealerAccess,
    RequestAdmin,
    RequestDealer,
    handleApple
  };
};

