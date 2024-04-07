'use client';

import StyledRangePicker from './styles';

import {useState, useEffect} from 'react';

import dayjs from 'dayjs';

interface Props {
    id?: string;
    value?: any;
    onChange?: (val: any) => void;
    innerRef?: any;
    disableFuture?: boolean;

}

const RangeDatePicker = ({id, value, onChange, innerRef, disableFuture = true}: Props) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', () => setOpen(false));

        return () => window.removeEventListener('resize', () => setOpen(false));
    }, []);

    return (
        <StyledRangePicker className="field-input"
                           id={id}
                           allowClear={false}
                           suffixIcon={<i className="icon icon-calendar-days-regular"/>}
                           separator="-"
                           format="DD/MM/YYYY"
                           disabledDate={disableFuture ? current => current && current > dayjs().endOf('day') : undefined}
                           defaultValue={[dayjs().startOf('year'), dayjs()]}
                           value={value}
                           onChange={onChange}
                           onOpenChange={setOpen}
                           ref={innerRef}
                           open={open}
                           renderExtraFooter={() =>
                               <button className="btn btn--secondary w-full md:w-[252px] md:ml-auto"
                                       onClick={() => setOpen(false)}>
                                   Close
                               </button>
                           }
        />
    )
}

export default RangeDatePicker