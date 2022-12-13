import '../Styles/RegisterPage.css';
import { RegisterForm } from './RegisterForm';

export function RegisterPage() {
    return (
    <div className='RegisterPage'>
      <h1 className='Title'>Awesome Tabletop</h1>
      <RegisterForm/>
    </div>
    )
}