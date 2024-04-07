"use client"

import { memo, useState } from 'react';
import { components } from 'react-select';

import { BasicSelect, MinimalSelect } from './styles';

export interface Option {
  label: string;
  value: string;
}

interface Props {
  options: Option[];
  value: Option | null;
  onChange: (value: Option) => void;
  variant?: 'basic' | 'minimal';
  id?: string;
  isInvalid?: Record<string, any>;
  isSearchable?: boolean;
  isDisabled?: boolean;
  placeholder?: string;
  defaultValue?: Option;
  innerRef?: any;
}

const Select = ({ options, value, onChange, variant = 'basic', ...props }: Props) => {
  const [uniqueId] = useState(() => 'select_' + Math.random().toFixed(5).slice(2));

  // custom dropdown indicator
  const Control = ({ children, ...props }: any) => {
    return (
      <components.Control className={`${variant === 'basic' ? 'field-input' : ''}`} {...props}>
        {children}
        <i className="icon icon-caret-down-solid" />
      </components.Control>
    );
  };

  // select props
  const selectProps = {
    classNamePrefix: `select`,
    className: `${props.isInvalid ? 'is-invalid' : ''}`,
    id: props.id || uniqueId,
    isSearchable: props.isSearchable || false,
    isDisabled: props.isDisabled || false,
    options,
    value,
    onChange,
    placeholder: props.placeholder,
    openMenuOnFocus: true,
    blurInputOnSelect: true,
    ref: props.innerRef,
    defaultValue: props.defaultValue,
    onMenuClose: () => {
      const menuEl = document.querySelector(`#${props.id || uniqueId} .select__menu`);
      const containerEl = menuEl?.parentElement;
      const clonedMenuEl = menuEl?.cloneNode(true) as HTMLElement;

      if (!clonedMenuEl) return;

      clonedMenuEl.classList.add('close');
      clonedMenuEl.addEventListener('animationend', () => {
        containerEl?.removeChild(clonedMenuEl);
      });

      containerEl?.appendChild(clonedMenuEl);
    },
    components: {
      Control,
    },
  };

  return variant === 'basic' ? <BasicSelect {...selectProps} /> : <MinimalSelect {...selectProps} />;
};

export default memo(Select);
