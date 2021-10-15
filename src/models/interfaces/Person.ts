import Access from '../enums/Access';

interface Person {
  id: string;
  name: string;
  userName: string;
  role: Access;
  projectRole: string;
  department: string;
}
export default Person;
