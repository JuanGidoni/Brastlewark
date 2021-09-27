import React, { useContext, useState, useEffect } from "react"
import { Spinner } from '../../Atoms';

const DataContext = React.createContext();

export function useDataContext() {
 return useContext(DataContext);
}


export function DataProvider({ children, ...props }) {
 const [loading, setLoading] = useState(true);
 const [data, setData] = useState({});
 const [error, setError] = useState("");

 const getData = async () => {
  try {
   setLoading(true);
   const results = await fetch('http://localhost:5000/v1');
   const jsonResults = await results.json();
   setData(jsonResults.Brastlewark);
  } catch (err) {
   setError(err)
  } finally {
   setLoading(false);
  }
 };

 const getFilteredData = async (name, type) => {
  try {
   setLoading(true);
   const results = await fetch(`http://localhost:5000/v1/${name}/${type}`);
   const jsonResults = await results.json();
   setData(jsonResults.Brastlewark);
  } catch (err) {
   setError(err)
  } finally {
   setLoading(false);
  }
 };

 const searchData = async (value, type) => {
  try {
   setLoading(true);
   const results = await fetch(`http://localhost:5000/v1/search/${value}/${type}`);
   const jsonResults = await results.json();
   setData(jsonResults.Brastlewark);
  } catch (err) {
   setError(err)
  } finally {
   setLoading(false);
  }
 };

 useEffect(() => {
  getData();
 }, [])

 const value = {
  data,
  error,
  setError,
  loading,
  setLoading,
  getFilteredData,
  searchData
 }

 return (
  <DataContext.Provider value={value} props={props}>
   {loading ? <Spinner /> : children}
  </DataContext.Provider>
 );
};