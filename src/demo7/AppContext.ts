import { createContext } from 'react';

/* 
Exporting an object, since we want this context objects to be singleton,
so that the same context/scope is used by all components in the Application
 */

/* This is immutable => Making changes in Child will not affect Parent(Ancestors) props */
/* Props can be sent only from Parent(Ancestors) to Children and not the other way */
export default createContext({});
