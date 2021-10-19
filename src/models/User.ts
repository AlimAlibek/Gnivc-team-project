import Access from './Access';

interface User {
  id: string;
  name: string;
  userName: string;
  role: Access;
  projectRole: string;
  department: string;
}
export default User;
