import {ReactNode} from "react";
import {useFormContext} from "react-hook-form";

interface Props {
    children: ReactNode;
    name: string;
    type: string;
    min?: number;
}

const FormInput = ({children, name, type, min}: Props) => {
    const {register, formState, getFieldState} = useFormContext();
    const {error} = getFieldState(name, formState)

    return (
        <div className="mb-3">
            <label
                htmlFor={name}
                className="form-label"
            >{children}</label>
            <input
                {...register(name)}
                type={type}
                className="form-control"
                id={name}
                aria-describedby={`${name}Help`}
                min={min}
            />
            {error && <div id={`${name}Help`} className="form-text text-danger">{error.message}</div>}
        </div>
    );
};

export default FormInput;