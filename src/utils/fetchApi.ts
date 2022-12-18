import { firestore } from "firebase.config";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
// Get HeroBanner Data

export const fetchUsers = async () => {
  const items = await getDocs(query(collection(firestore, "users")));

  return items.docs.map((doc) => doc.data());
};
// Get HeroBanner Data

export const fetchHeroBanner = async () => {
  const items = await getDocs(
    query(collection(firestore, "heroBanner"), orderBy("id", "desc"))
  );
  return items.docs.map((doc) => doc.data());
};
// Get About Section Data
export const fetchAboutSection = async () => {
  const items = await getDocs(
    query(collection(firestore, "aboutSection"), orderBy("id", "desc"))
  );
  return items.docs.map((doc) => doc.data());
};
// Get Skills Section Data
export const fetchSkillsSection = async () => {
  const items = await getDocs(
    query(collection(firestore, "skillsSection"), orderBy("id"))
  );
  return items.docs.map((doc) => doc.data());
};

// Get Projects Section Data
export const fetchProjectsSection = async () => {
  const items = await getDocs(
    query(collection(firestore, "projectsSection"), orderBy("id", "desc"))
  );
  return items.docs.map((doc) => doc.data());
};

// Get Contact Section Data
export const fetchContactSection = async () => {
  const items = await getDocs(
    query(collection(firestore, "contactSection"), orderBy("id", "desc"))
  );
  return items.docs.map((doc) => doc.data());
};

// Get User Section Data
export const fetchUserContact = async () => {
  const items = await getDocs(
    query(collection(firestore, "userContact"), orderBy("id", "desc"))
  );
  return items.docs.map((doc) => doc.data());
};
