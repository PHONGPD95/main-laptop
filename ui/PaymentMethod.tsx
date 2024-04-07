'use client'

import styled from 'styled-components';
import theme from 'styled-theming';

import {useState} from 'react';
import Image from 'next/image';

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  .radio {
    width: 14px;
    height: 14px;
    border: 1px solid var(--input-border);
    border-radius: 50%;
    position: relative;
    transition: border-color var(--transition);

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: var(--accent);
      width: 10px;
      height: 10px;
      border-radius: 50%;
      opacity: 0;
      transition: opacity var(--transition);
    }
  }

  &.active .radio {
    border-color: ${theme('theme', {
      light: 'var(--gray)',
      dark: '#fff'
    })};

    &::after {
      opacity: 1;
    }
  }
`;

interface Props {
  type?: 'checkbox' | 'radio';
  id?: string;
  option?: Record<string, any>;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const PaymentMethod = ({type = 'checkbox', option = {}, ...props}: Props) => {
    const [checkedState, setCheckedState] = useState(false);

    return (
        <div>
            <input className="hidden"
                   type={type}
                   id={option.id || props.id}
                   checked={checkedState}
                   onChange={() => setCheckedState(!checkedState)}
                   value={option.value}/>
            <StyledLabel className={checkedState ? 'active' : ''} htmlFor={option.id || props.id}>
                <span className="img-wrapper flex items-center justify-center w-[60px] h-10 shadow">
                    <Image className="max-w-[48px] max-h-[28px] object-contain m-auto" src={option.icon}
                         alt={option.value}/>
                </span>
                <span className="radio"/>
            </StyledLabel>
        </div>
    )
}

export default PaymentMethod