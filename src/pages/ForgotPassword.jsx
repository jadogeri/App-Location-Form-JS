import Footer from '../layouts/Footer';
import { Link } from 'react-router-dom';
// import './App.css';

const ForgotPassword = () => {
  return (
    <div >
  <h1>App Location Form</h1>
    <div className="app-location">
      <h2>Welcome to Locaticus</h2>
      <div className="line"><span></span></div>
      <div className="location"><img src="assets/images/location.png" className="img-responsive" alt="" /></div>
      <form>
        <input type="text" className="text" value="E-mail address" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'E-mail address';}" />
        <input type="password" value="Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Password';}" />
        <div className="submit"><input type="submit" onclick="myFunction()" value="Sign in" /></div>
        <div className="clear"></div>
        <div className="new">
          <h3><Link to={"/forgot"} >Forgot password ?</Link></h3>
          <h4><Link Link to={"/register"}>New here ? Sign Up</Link></h4>
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

export default ForgotPassword;
