import React from "react";
import {useField} from "formik";
import {FormField, Label} from "semantic-ui-react";

export default function KodlamaTextInput({...props}) {

    const [field,meta] = useField(props)
    //console.log(field)
    return (
        <FormField error={meta.touched && !!meta.error}>
            <input {...field} {...props}/>
            {meta.touched && !!meta.error ? (<Label pointing basic color="red" content={meta.error}></Label>):null}
        </FormField>
    )
}