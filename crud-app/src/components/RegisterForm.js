import { useForm } from "react-hook-form"
import { password_validation } from "../utils/inputValidations";


const RegisterForm = () => {
    const {handleSubmit, register, formState: {errors}} = useForm();

    const onSubmit = values => alert("Email: " + values.email + " registered");

    return(
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h4>Registration Form</h4>
                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" className="form-control"
                    required/>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control"
                    {...register("email", {
                        required: "required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9]+\.[A-Z]{2, }$/i,
                            message: "Invalid Email Address"
                        }
                    })}/>
                    {errors.email && errors.email.message}
                </div>
                {/* <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control"
                    {...register("password", {
                        required: "required",
                        pattern: {
                            value: /^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$&])[a-zA-Z0-9!#$%]{/,
                            message: "Password should have 8-20 characters with atleast 1 number, 1 special character and 1 letter"
                        }
                    })}
                    />
                    {errors.password && errors.password.message}
                </div> */}
                <div className="form-group">
                    <label> Password</label>
                    <input {...password_validation}
                    className="form-control"/>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm;