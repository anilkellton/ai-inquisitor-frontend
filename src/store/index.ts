import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import authenticationReducer from "./slices/authenticationSlice";


// we need to import the reducer function from the counter slice and add it to our store.
// By defining a field inside the reducer parameter, we tell the store to use this slice reducer function to handle all updates to that state.
const reducer = {
  authentication: authenticationReducer,
};



const persistConfig = {
  key: 'root',
  storage,
  // blacklist: [''],
  transforms: [
    encryptTransform({
      secretKey: 'Sq@r3G@m3-$3cr3t-k3y',
      onError: function (error) {
        console.log(error, 'redux encryption error');
      },
    }),
  ],
};

const rootReducers = combineReducers(reducer);
const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
