
import { object, string } from 'yup';


const validations = object({
    email: string().email().required(),
  });

export default validations;