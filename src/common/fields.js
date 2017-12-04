import React from 'react'
import Select from "react-select"

const errorContainer = (error) => (
    <ul className="parsley-errors-list filled">
        <li className="parsley-required">{error}</li>
    </ul>
);

export const renderField = ({input, label, placeHolder, type, meta: {touched, error, warning}}) => (
    <div className="form-group">
        <label className="col-sm-3 control-label">{label}</label>
        <div className="col-sm-6">
            <input {...input} placeholder={placeHolder} type={type}
                   className={"form-control " + ((touched && error) ? "parsley-error" : '')}/>
            {touched && ((error && errorContainer(error)
            ) || (warning && <li>{warning}</li>))}
        </div>
    </div>
);

export const renderTextArea = ({input, label, placeHolder, readOnly, type, meta: {touched, error, warning}}) => (
    <div className="form-group">
        <label className="col-sm-3 control-label">{label}</label>
        <div className="col-sm-9">
            <textarea {...input} placeholder={placeHolder} type={type} readOnly={readOnly}
                   className={"form-control " + ((touched && error) ? "parsley-error" : '')}/>
            {touched && ((error && errorContainer(error)
            ) || (warning && <li>{warning}</li>))}
        </div>
    </div>
);

export const customSelect = (props) => (
    <div className="form-group">
        <label className="col-sm-3 control-label">{props.label}</label>
        <div className="col-sm-6">
            <Select
                {...props}
                value={props.input.value}
                onChange={(value) => {
                    props.input.onChange(value.value);
                    if(props.onChangeFunction !== undefined )
                        props.onChangeFunction(value);
                }}
                options={props.options}
                clearable={false}
                placeholder={props.placeHolder}
            />
            {props.meta.touched && ((props.meta.error && errorContainer(props.meta.error)
            ) || (props.meta.warning && <li>{props.meta.warning}</li>))}
        </div>
    </div>
);