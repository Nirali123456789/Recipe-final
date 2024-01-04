
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allowDelete: true,
  tasks: [],
  itemsTasks: [],
};

const preferenceSlice = createSlice({
  name: 'preference',
  initialState,
  reducers: {
    toggleAllowDelete: (state) => {
      state.allowDelete = !state.allowDelete;
    },
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    addTasks: (state, action) => {
      const uniqueIds = new Set(state.itemsTasks.map(task => task.id));
      action.payload.forEach(newTask => {
        if (!uniqueIds.has(newTask.id)) {
          state.itemsTasks.push(newTask);
          uniqueIds.add(newTask.id);
        }
      });
    },
    updateTask: (state, action) => {
      const { id, done } = action.payload;
      state.tasks = state.tasks.map(task =>
        task.id === id ? { ...task, done } : task
      );
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
  },
});

export const { toggleAllowDelete, setTasks, updateTask, deleteTask, addTasks } = preferenceSlice.actions;
export default preferenceSlice.reducer;
