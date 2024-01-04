
import { doc, updateDoc, deleteDoc, addDoc, collection } from 'firebase/firestore';
import { db } from './config';

export async function save(taskDescription, taskDone) {
  try {
    console.log('saving...');
    const taskRef = await addDoc(collection(db, 'tasks'), {
      description: taskDescription,
      done: taskDone,
    });
    console.log('Added task with ID:', taskRef.id);
    return taskRef.id;
  } catch (error) {
    console.error('Error saving task:', error);
    throw error;
  }
}

export async function update(id, data) {
  console.log("updating...")
  try {
    const taskRef = doc(db, 'tasks', id);
    await updateDoc(taskRef, data);
    return true;
  } catch (e) {
    console.log("Error", e)
    return false;
  }
}
export async function remove(id) {
  console.log("removing...")
  try {
    const taskRef = doc(db, 'tasks', id);
    await deleteDoc(taskRef);
    return true;
  } catch (e) {
    console.log("Error", e);
    return false;
  }
}

//Save notification token in the database

export async function addToken(token) {
  try {
    const dbCollection = collection(db,'tokens')
    const docRef = await addDoc(dbCollection,token);
    return docRef.id;

  } catch (error) {
    return null
  }
}

export async function removeToken(docId) {
  try {
    const docRef = doc(db,'tokens',docId);
    await deleteDoc(docRef)
    return true;

  } catch (error) {
    return false
  }
}