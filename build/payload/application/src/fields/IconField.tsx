import {Field} from "payload/types";
import Icon from "../components/atoms/Icon";
import React from "react";
import useField from "payload/dist/admin/components/forms/useField";
import TextInput from "payload/dist/admin/components/forms/field-types/Text/Input";
import Error from "payload/dist/admin/components/forms/Error";
import Label from "payload/dist/admin/components/forms/Label";
import {getTranslation} from "payload/dist/utilities/getTranslation";
import FieldDescription from "payload/dist/admin/components/forms/FieldDescription";

const IconField = (): Field => ({
    name: 'icon',
    type: 'text',
    required: true,
    admin: {
        components: {
            Cell: (cellData) => cellData ? <Icon iconName={cellData}/> : <></>,
            Field: (props) => {
                const {
                    path,
                } = props;

                const {
                    required,
                    label,
                    inputRef,
                } = props;

                const {
                    value,
                    showError,
                    setValue,
                    errorMessage,
                } = useField<string>({
                    path,
                });


                return <>
                   <div className={'field-type text'}>
                       <Error
                           showError={showError}
                           message={errorMessage}
                       />
                       <Label
                           htmlFor={`field-${path.replace(/\./gi, '__')}`}
                           label={label}
                           required={required}
                       />
                       <div style={{display: "flex"}}>
                           <input
                           ref={inputRef}
                           id={`field-${path.replace(/\./gi, '__')}`}
                           value={value || ''}
                           onChange={(e) => {
                               setValue(e.target.value);
                           }}
                           type="text"
                           name={path}
                       />
                       <div style={{padding: '0.9615384615rem 1.4423076923rem', border: '1px solid var(--theme-elevation-150)', fontSize:'1rem', lineHeight: '1.9230769231rem', height: '3.8461538462rem'}}>
                           <Icon iconName={value ?? ''}/>
                       </div>
                       </div>
                       <FieldDescription
                           className={`field-description-${path.replace(/\./gi, '__')}`}
                           value={value}
                       />
                   </div>
               </>
            },
        }
    }
})

export default IconField
