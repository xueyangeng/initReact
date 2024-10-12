import { createContext, useContext } from 'react';
import CreationList from './creationlist';
// import Common from './common';

const modules = {
  //  common: new Common(),
  creationList: new CreationList(),
};

export const useModule = () => useContext(createContext(modules));
