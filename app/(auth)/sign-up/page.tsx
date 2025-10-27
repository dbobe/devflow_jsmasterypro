'use client';

import { AuthForm } from '@/components/forms/auth-form';
import { signUpSchema } from '@/lib/validations';

export default function SignUpPage() {
  return (
    <AuthForm
      formType="SIGN_UP"
      schema={signUpSchema}
      defaultValues={{ username: '', name: '', email: '', password: '' }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
}
