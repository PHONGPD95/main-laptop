'use client';

import classNames from 'classnames';
import { PatternFormat } from 'react-number-format';
import { toast } from 'react-toastify';

import PasswordInput from '@/components/PasswordInput';
import Spring from '@/components/Spring';
import { Controller, useForm } from 'react-hook-form';

const UserProfileDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      firstName: 'Maria',
      lastName: 'Smith',
      email: 'maria@email.com',
      phone: '',
      password: 'password',
      address: '',
    },
  });

  // do something with the data
  const onSubmit = (data: any) => {
    console.log(data);
    toast.success('Profile updated successfully');
  };

  return (
    <Spring
      className="card flex flex-col gap-[30px] md:gap-12 md:row-start-2 md:col-span-2 md:!pb-[50px]
                xl:row-start-1 xl:col-start-2 xl:col-span-1"
    >
      <div className="flex flex-col gap-5">
        <h5>My Profile Details</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 md:grid-cols-2 md:gap-5">
            <div className="grid gap-4">
              <div className="field-wrapper">
                <label className="field-label" htmlFor="firstName">
                  First Name
                </label>
                <input
                  className={classNames('field-input', { 'field-input--error': errors.firstName })}
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  defaultValue="Maria"
                  {...register('firstName', { required: true })}
                />
              </div>
              <div className="field-wrapper">
                <label className="field-label" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  className={classNames('field-input', { 'field-input--error': errors.lastName })}
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  defaultValue="Smith"
                  {...register('lastName', { required: true })}
                />
              </div>
              <div className="field-wrapper">
                <label className="field-label" htmlFor="email">
                  Email
                </label>
                <input
                  className={classNames('field-input', { 'field-input--error': errors.email })}
                  type="text"
                  id="email"
                  placeholder="Email"
                  defaultValue="maria@email.com"
                  {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                />
              </div>
              <div className="field-wrapper">
                <label className="field-label" htmlFor="phone">
                  Phone Number
                </label>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <PatternFormat
                      value={field.value}
                      format="+#-###-###-####"
                      placeholder="(123) 456-7890"
                      className={classNames('field-input', { 'field-input--error': errors.phone })}
                      getInputRef={field.ref}
                    />
                  )}
                />
              </div>
              <Controller
                name="password"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value, ref } }) => (
                  <PasswordInput
                    id="profilePassword"
                    innerRef={ref}
                    value={value}
                    isInvalid={errors.password}
                    onChange={onChange}
                  />
                )}
              />
            </div>
            <div className="grid gap-4">
              <div className="field-wrapper">
                <label className="field-label" htmlFor="address">
                  Address
                </label>
                <input
                  className="field-input"
                  type="text"
                  id="address"
                  placeholder="Address"
                  {...register('address')}
                />
              </div>
            </div>
          </div>
          <div className="mt-2.5">
            <button className="text-btn" type="button">
              Change password
            </button>
            <button className="btn btn--primary w-full mt-5 md:w-fit md:px-[70px]" type="submit">
              Update information
            </button>
          </div>
        </form>
      </div>
    </Spring>
  );
};

export default UserProfileDetails;
