import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import InputField from 'components/form-controls/InputField';
import PasswordField from 'components/form-controls/PasswordField';

function RegisterForm(props) {
  const { onSubmit } = props;
  const schema = yup.object().shape({
    name: yup.string().required('Please enter your full name'),
    email: yup
      .string()
      .required('Please enter your email')
      .email('Please enter a valid email'),
    password: yup.string().required('Please enter your password').min(6),
    password_confirmation: yup
      .string()
      .required('Please enter your password')
      .min(6)
      .oneOf([yup.ref('password')], 'Password does not match'),
    phone: yup
      .string()
      .required('Please enter your phone number')
      .matches(/^(0[3|5|7|8|9])+([0-9]{8})$/, 'Phone number is not valid'),
  });

  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      phone: undefined,
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    if (!onSubmit) return;
    onSubmit(values);
  };

  return (
    <div className='section-login'>
      <h3 className='section-login__title'>Đăng Ký</h3>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField
          placeholder='Nhập họ tên'
          name='name'
          form={form}
          label='Họ tên'
        />
        <InputField
          placeholder='Nhập email'
          name='email'
          form={form}
          label='Email'
        />
        <PasswordField
          placeholder='Mật khẩu từ 6 đến 32 ký tự'
          name='password'
          form={form}
          label='Mật Khẩu'
        />
        <PasswordField
          placeholder='Mật khẩu từ 6 đến 32 ký tự'
          name='password_confirmation'
          form={form}
          label='Nhập Lại Mật Khẩu'
        />
        <InputField
          placeholder='Nhập số điện thoại'
          name='phone'
          form={form}
          label='Số điện thoại'
        />
        <p className='forget-password'>
          <input type='checkbox' />
          Nhận các thông tin và chương trình khuyến mãi qua email
        </p>
        <button className='button-submit' type='submit'>
          Đăng ký
        </button>
        <p className='noti'>
          Khi bạn nhấn Đăng ký, bạn đã đồng ý thực hiện mọi giao dịch mua bán
          theo điều kiện sử dụng và chính sách của <strong>PHANOLINK</strong>
        </p>
      </form>
    </div>
  );
}

export default RegisterForm;
