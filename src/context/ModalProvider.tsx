"use client"
import clsx from 'clsx';
import { useRouter } from 'next/router';
import React, {createContext, useContext, useState} from 'react';

type ModalContextType = {
  openModal: (content: any) => void;
  closeModal: () => void;
};

type ModalProviderProps = {
  children: React.ReactNode;
};

const SnackbarContext = createContext<ModalContextType | undefined>(undefined);

const initialState = {
  isOpen: false,
  content: null
}

const ModalProvider = (props: ModalProviderProps) => {
  const [state, setState] = useState<any>(initialState);

  const openModal = (content: any) => {
    setState({isOpen: true, content})
    console.log(state.isOpen);

  };

  const closeModal = () => {
    setState((prev: any) => ({...prev, isOpen: false}));

    console.log(state.isOpen);
    
  };
  
  return (

    <SnackbarContext.Provider value={{openModal, closeModal}}>
   <div
   style={{zIndex:10}}
    className={clsx(`w-full fixed  inset-0 backdrop-blur-[10px] bg-[#1E21281A]  flex items-center justify-center `,
     { " hidden ": !state.isOpen }
     )}>
      {state.content}
   </div>
      {props.children}
    </SnackbarContext.Provider>
  
  );
};

export default ModalProvider;

export const useModal = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error('useSnackbar must be used within a ModalProvider');
  }
  return context;
};