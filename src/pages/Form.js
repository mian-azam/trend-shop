import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";

function Form() {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const onSubmit = values => console.log(values);
    return (
        <div className="form">
            <Helmet>
                <title>Add new product</title>
            </Helmet>

            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Listen from us!</h2>
                <p>Send us your email and we will contact you.</p>
                <input
                    type="email"
                    {...register("email", {
                        required: "Required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address"
                        }
                    })}
                />
                {errors.email && errors.email.message}


                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form