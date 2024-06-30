import axios from 'axios';
export const API = axios.create({
  baseURL: 'http://localhost:8081/api/v1',
  // withCredentials: true,
});

// API.interceptors.request.use(
//   (config) => {
//     if (!config.headers['Authorization']) {
//       const token = 'token';

//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

//   API.interceptors.request.use(
//     async (config) => {
//       initFirebase();
//       const auth = getAuth();
//       const token = await auth.currentUser?.getIdToken();
//       if (token) {
//         config.headers!['Authorization'] = `Bearer ${token}`;
//       }
//       return config;
//     },
//     (error) => {
//       return Promise.reject(error);
//     }
//   );

export const api = {
  get: <T>(url: string, params?: object) =>
    API.get<T>(url, {
      ...params,
    }),
  post: <T>(url: string, data: unknown) => API.post<T>(url, data, {}),
  patch: <T>(url: string, data: unknown) => API.patch<T>(url, data, {}),
  delete: <T>(url: string) => API.delete<T>(url, {}),
};
