import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

export default async function () {
  const projectsCollection = collection(db, "blogs");
  const res = await getDocs(projectsCollection);
  if (res.docs.length > 0) {
    const data = res.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    /// sorting data
    const sortedData = data.sort(function (a, b) {
      return a.sort - b.sort;
    });
    //add the sorted data to the state

    return sortedData;
  }
}
