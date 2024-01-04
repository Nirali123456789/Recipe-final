import { useDispatch } from "react-redux";
import * as database from '../../database';
import { useEffect } from "react";
import { setTasks } from '../../redux/preferenceSlice';

export default function Apploader() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await database.load()
        console.log("promise result ", result)
        dispatch(setTasks(result));


      } catch (error) {
        console.error('Error loading data:', error);

      }
    };
    fetchData();
  }, [dispatch]);

  return null; 
}
