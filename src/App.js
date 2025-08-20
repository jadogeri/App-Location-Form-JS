import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
	<h1>App Location Form</h1>
		<div class="app-location">
			<h2>Welcome to Locaticus</h2>
			<div class="line"><span></span></div>
			<div class="location"><img src="assets/images/location.png" class="img-responsive" alt="" /></div>
			<form>
				<input type="text" class="text" value="E-mail address" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'E-mail address';}" />
				<input type="password" value="Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Password';}" />
				<div class="submit"><input type="submit" onclick="myFunction()" value="Sign in" /></div>
				<div class="clear"></div>
				<div class="new">
					<h3><a href="#">Forgot password ?</a></h3>
					<h4><a href="#">New here ? Sign Up</a></h4>
					<div class="clear"></div>
				</div>
			</form>
		</div>
	{/* <!--start-copyright--> */}
   		<div class="copy-right">
				<p>Copyright &copy; 2015  All rights  Reserved | Template by &nbsp;<a href="http://w3layouts.com">W3layouts</a></p>
		</div>
	{/* <!--//end-copyright--> */}
    </div>
  );
}

export default App;
