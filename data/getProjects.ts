import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

export default async function (projectType: string) {
  const projectsCollection = collection(db, "projects");
  const res = await getDocs(projectsCollection);
  if (res.docs.length > 0) {
    const data = res.docs.map((doc) => ({
      ...doc.data(),
    }));
    /// filter data array by project type
    let projects;
    if (projectType === "front-end") {
      projects = data.filter((item) => item.type == "front");
    } else {
      projects = data.filter((item) => item.type == "design");
    }

    /// sorting data
    const sortedData = projects.sort(function (a, b) {
      return a.sort - b.sort;
    });
    //add the sorted data to the state

    return sortedData;
  }
}
