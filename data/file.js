import { useState } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
const useGet = (projectType) => {
  const projectsCollectionRef = collection(db, projectType);
  const fetch = () => {
    const getProjects = () => {
      setLoading(true);
      setErr(false);
      getDocs(projectsCollectionRef)
        .then((res) => {
          setLoading(false);
          if (res.docs.length > 0) {
            const data = res.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }));
            /// sorting data before adding it to the state
            const sortedData = data.sort(function (a, b) {
              return a.sort - b.sort;
            });
            //add the sorted data to the state
            setData(sortedData);
            return;
          }
          //eslint-disable-next-line
          throw "err";
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          setErr(true);
        });
    };
    getProjects();
  };
  return [loading, err, data, fetch];
};

export default useGet;
