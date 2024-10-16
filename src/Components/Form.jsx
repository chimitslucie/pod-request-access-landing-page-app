import { useForm } from 'react-hook-form';

function Form() {

    const {
        register,
        handleSubmit = e => {
            e.preventDefault();
        },
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
        },
    });

    return (
        <form className="form" onSubmit={handleSubmit((d) => console.log(d))} noValidate>
            <div className={errors.email ? 'formContent error' : 'formContent'}>
                <input type="email" name="email" id="email"
                    className="formContentEmail"
                    placeholder="Email address"
                    {...register('email', {
                        validate: {
                            matchPattern: (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "Oops! Please check your email",
                        },
                    })} />
                <button type="submit" className="formContentBtn" >Request Access</button>

                {errors.email?.message && (<p className='formMessageError'>{errors.email.message}</p>)}
            </div>
        </form>
    );
}

export default Form