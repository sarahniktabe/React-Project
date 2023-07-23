import { createContext } from "react";

export const ContactContext = createContext({
    loading: false,
    setLoading:()=> {},
    contact:{},
    setContacts:()=>{},
    setFilteredContacts:()=>{},
    contacts:[],
    filteredContext:[],
    contactQuery:{},
    Groups:[],
    onContactChange:()=>{},
    deteleContact:()=>{},
    updateContact:()=>{},
    creactContact:()=>{},
    contactSearch:()=>{},
})