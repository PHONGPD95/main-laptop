'use client';

import {useState, useEffect, RefCallback} from 'react';

import classNames from 'classnames';
import { FieldError } from 'react-hook-form';


interface Props {
    innerRef?: RefCallback<HTMLInputElement>,
    id: string,
    label?: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    isInvalid?: FieldError,
}

const PasswordInput = ({innerRef, id, label = 'Password', isInvalid, ...props}: Props) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        setIsPasswordVisible(!isPasswordVisible);
    }

    useEffect(() => {
        props.value === '' && setIsPasswordVisible(false);
    }, [props.value]);

    return (
        <div className="field-wrapper">
            <label className="field-label" htmlFor={id}>
                {label}
            </label>
            <div className="relative">
                <input className={classNames('field-input !pr-10', {'field-input--error': isInvalid})}
                       id={id}
                       type={isPasswordVisible ? 'text' : 'password'}
                       ref={innerRef}
                       {...props}/>
                <button className="field-btn"
                        onClick={togglePasswordVisibility}
                        aria-label="Toggle password visibility">
                    <i className={`icon icon-eye${isPasswordVisible ? '-slash-regular' : '-regular' }`}/>
                </button>
            </div>
        </div>
    )
}


export default PasswordInput