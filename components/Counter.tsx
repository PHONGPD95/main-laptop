'use client';

import { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import { commaFormatter, numFormatter } from '@/utils/helpers';

interface Props {
  num: number;
  className?: string;
  isFormatted?: boolean;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

const Counter = ({ num, className, isFormatted, ...props }: Props) => {
  const [countFinished, setCountFinished] = useState(false);

  return (
    <CountUp
      start={countFinished ? num : 0}
      end={num}
      duration={2}
      onEnd={() => setCountFinished(true)}
      formattingFn={isFormatted ? (value) => numFormatter(value, 0, props.prefix) : undefined}
      {...props}
    >
      {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start} active={!countFinished} delayedCall>
          <span className={`relative ${className || ''}`}>
            <span className="opacity-0">
              {props.prefix}
              {isFormatted ? numFormatter(num, props.decimals || 0, props.prefix) : commaFormatter(num)}
              {props.suffix}
            </span>
            <span className="absolute left-0" ref={countUpRef} />
          </span>
        </VisibilitySensor>
      )}
    </CountUp>
  );
};

export default Counter;
