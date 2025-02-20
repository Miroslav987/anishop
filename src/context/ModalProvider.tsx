"use client"
import clsx from 'clsx';
import { useRouter } from 'next/router';
import React, {createContext, useContext, useState} from 'react';

type ModalContextType = {
  openModal: (content: any , search?:boolean) => void;
  closeModal: () => void;
};

type ModalProviderProps = {
  children: React.ReactNode;
};

const SnackbarContext = createContext<ModalContextType | undefined>(undefined);

const initialState = {
  isOpen: false,
  content: null,
  search: false,
}

const ModalProvider = (props: ModalProviderProps) => {
  const [state, setState] = useState<any>(initialState);

  const openModal = (content: any, search?:boolean) => {
    setState({isOpen: true, content, search})


  };

  const closeModal = () => {
    setState((prev: any) => ({...prev, isOpen: false,search:false}));

  };
  
  return (

    <SnackbarContext.Provider value={{openModal,closeModal}}>
   <div
  //  onClick={closeModal}
   style={!state.search?{zIndex:100}:{zIndex:20}}
    className={clsx(`z-40 w-full fixed  inset-0 backdrop-blur-[10px]  items-center justify-center flex `,
     { " hidden ": !state.isOpen },
     { " z-[20] ": state.search }
     )}>
      <div className='relative inset-0 container items-center justify-center flex'>
      {state.content}
      </div>
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