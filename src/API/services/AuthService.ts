import dictionary from '../dictionary';
import methods from '../methods';

const { auth } = dictionary;
const { post, patch,get } = methods;

const AuthService = {
  userEmailLoginService: (body: {}) => {
    return post(auth.emailLogin(), body);
  }
};

export default AuthService;
