import { collection, getDocs } from "firebase/firestore";
import { db } from './config';

export function load() {
  // console.log("loading...");

  const dbCollection = collection(db, "Recipe");

  return new Promise((resolve, reject) => {
    getDocs(dbCollection)
      .then((querySnapshot) => {
        const data = [];

        querySnapshot.forEach((doc) => {
          const taskData = doc.data();
          Object.entries(taskData).forEach(([key, value]) => {
            // console.log(`${key}: ${value}`);
          });

          data.push({
            ...doc.data(),
            id: doc.id
          });
          // console.log('id:', doc.id);
        });

        resolve(data);
      })
      .catch((error) => {
        console.log('Error:', error);
        reject(error);
      });
  });
}

export function loadItems() {
  // console.log("loading...");

  const dbCollection = collection(db, "Pizzas");

  return new Promise((resolve, reject) => {
    getDocs(dbCollection)
      .then((querySnapshot) => {
        const data = [];

        querySnapshot.forEach((doc) => {
          const taskData = doc.data();
          Object.entries(taskData).forEach(([key, value]) => {
            console.log(`${key}: ${value}`);
          });

          data.push({
            ...doc.data(),
            id: doc.id
          });
          // console.log('id:', doc.id);
        });

        resolve(data);
      })
      .catch((error) => {
        console.log('Error:', error);
        reject(error);
      });
  });
}
