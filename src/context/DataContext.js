import { createContext } from "react";

export const DataContext = createContext([])









// ------NOTES------------------

// import { createContext } from "react";

// export const DataContext = createContext([]);

// [[That was fairly simple! Just like that, we have defined our context "container" for our data object. As with state, when we use 'createContext()' we can pass in an argument that represents the context default value. In this case, we want to mimic the pattern that we have seen with state: instantiating the value to a data type that matches what we intend to store-in this case, an empty array.]]