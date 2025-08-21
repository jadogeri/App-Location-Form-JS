import Footer from '../layouts/Footer';
import { Link } from 'react-router-dom';
import NoPage from './NoPage';
// import './App.css';

const Register = () => {
  return (
    <div >
  <h1>App Location Form</h1>
    <div className="app-location">
      <h2>Register Account</h2>
      <div className="line"><span></span></div>
      <div className="location"><img src="assets/images/location.png" className="img-responsive" alt="" /></div>
      <form>
        <input type="text" className="text" value="E-mail address" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'E-mail address';}" />
        <input type="password" value="Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Password';}" />
        <input type="password" value="Confirm Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Confirm Password';}" />
        <div className="submit"><input type="submit" onclick="myFunction()" value="Create account" /></div>
        <div className="clear"></div>
        <div className="new">
          <h3><Link to={"/"} >Remember password ?</Link></h3>
          <h4><Link Link to={"/reset"}>Forgot Password ? Reset Account</Link></h4>
          <div className="clear"></div>
        </div>
      </form>
    </div>
  {/* <!--start-copyright--> */}
  <Footer/>
  {/* <!--//end-copyright--> */}
    </div>
  );
}

export default Register;
