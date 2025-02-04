"use client"
import Description from '@/components/carddetails/Description';
import clsx from 'clsx';
import React, {createContext, useContext, useState} from 'react';

type CardDetailsInfoContextType = {
  handleContent: (content: any,text:boolean) => void;
  state:any;
};

type CardDetailsInfoProviderProps = {
  children: React.ReactNode;
};

const SnackbarContext = createContext<CardDetailsInfoContextType | undefined>(undefined);

const initialState = {
  text:false,
  content: <Description/>
}

const DetailsInfoProvider = (props: CardDetailsInfoProviderProps) => {
  const [state, setState] = useState<any>(initialState);

 function handleContent (content:any,text:boolean){
  setState({text ,content})
 }

  return (

    <SnackbarContext.Provider value={{handleContent, state}}>
      {props.children}
    </SnackbarContext.Provider>
  
  );
};

export default DetailsInfoProvider;

export const useDetailsInfo = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error('useSnackbar must be used within a ProfileProvider');
  }
  return context;
};