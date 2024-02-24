import { Formik } from "formik";
import { Form } from "react-router-dom";

const LoginPage = ()=>{
  return(
    <div className="loginPage">
      <div className="loginPage__leftSection"></div>
      <div className="loginPage__rightSection">
        <div className="loginPage__rightSection__details">
          <span className="loginPage__rightSection__details__closeBtn"></span>
          <div className="loginPage__rightSection__details__title">Login</div>
          <div className="loginPage__rightSection__details__imgContainer">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" alt="image"/>
          </div>
        </div>
        <Form>
          <div className="field">
            <input className="" type="tel" name="mobile" maxLength={10} autoComplete="off"/>
            <label className="" htmlFor="mobile">Phone Number</label>
          </div>
          <div className="field">
            <input className="" type="text" name="name" autoComplete="off"/>
            <label className="" htmlFor="name">Name</label>
          </div>
          <div className="field">
            <input className="" type="email" name="email" autoComplete="off"/>
            <label className="" htmlFor="email">Email</label>
          </div>
          <button className="">CONTINUE</button>
        </Form>
      </div>
    </div>
  )
}
export default LoginPage;