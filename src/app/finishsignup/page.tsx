"use client"
import React, { useEffect, useState } from "react";
import CardOrdering from "../../components/cards/CardOrderingProfile";
import Link from "next/link";
import Exite from "@/components/modals/Exite";
import { useModal } from "@/context/ModalProvider";
import { useRouter } from "next/navigation";
import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { useAuth } from "@/lib/features/user/UserServer";

export default function page (){

  const {confirmEmailSign} = useAuth();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const router = useRouter();
  const auth = getAuth();

  useEffect(() => {
    const url = window.location.href;
    const emailFromStorage:any = window.localStorage.getItem("emailForSignIn");
    confirmEmailSign(url,emailFromStorage,router)
    
  }, [auth, router]);
  // console.log(emailFromStorage);

  return (
    <div>
      {loading ? <p>Загрузка...</p> : <p>{message}</p>}
    </div>
  );
};

