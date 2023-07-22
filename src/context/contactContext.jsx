import { createContext } from "react";

export const ContactContext = createContext({
    loading: false,
    setLoading:()=> {},
    contact:{},
    setContact:()=>{},
    contacts:[],
    setFilteredContacts: [],
    contactQuery:{},
    Groups:[],
    onContactChange:()=>{},
    deteleContact:()=>{},
    updateContact:()=>{},
    creactContact:()=>{},
    contactSearch:()=>{},
})