import Footer from '../layouts/Footer';
import { Link } from 'react-router-dom';
// import './App.css';

const ResetPassword = () => {
  return (
    <div >
  <h1>App Location Form</h1>
    <div className="app-location">
      <h2>Reset Account</h2>
      <div className="line"><span></span></div>
      <div className="location"><img src="assets/images/location.png" className="img-responsive" alt="" /></div>
      <form>
        <input type="text" className="text" value="E-mail address" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'E-mail address';}" />
        <div className="submit"><input type="submit" onclick="myFunction()" value="Send" /></div>
        <div className="clear"></div>
        <div className="new">
          <h3><Link to={"/forgot"} >Forgot password ?</Link></h3>
          <h4><Link Link to={"/"}>Logged Out ? Sign In</Link></h4>
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

export default ResetPassword;
