import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup"
import {Button, FormField, Label} from "semantic-ui-react";
import KodlamaTextInput from "../utilities/customFormControls/KodlamaTextInput";

export default function ProductAdd() {

    const initialValues = {productName: "", unitPrice: 10}
    const schema = Yup.object({
        productName: Yup.string().required("Ürün adı zorunlu"),
        unitPrice: Yup.number().required("Ürün fiyatı zorunlu")
    })

    return (
            <Formik
                initialValues={initialValues} validationSchema={schema} onSubmit={(values)=>{console.log(values)}}>
                <Form className="ui form">
                    <KodlamaTextInput name="productName" placeholder="Ürün Adı"/>
                    <KodlamaTextInput name="unitPrice" placeholder="Ürün Fiyatı"/>
                    <Button color="green" type="submit">Ekle</Button>
                </Form>
            </Formik>
    )
}