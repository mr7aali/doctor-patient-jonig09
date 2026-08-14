import { AuthPage } from "../_components/AuthPage";

export default function SignUpPage() {
  return (
    <AuthPage
      variant="signup"
      title="Personal Details"
      submitLabel="Sign in"
      googleLabel="Sign in with Google"
      footerText="Don't you have an account?"
      footerHref="/signin"
      footerLink="Sign up"
      showCompliance
      fields={[
        {
          label: "Full Name",
          placeholder: "Example",
        },
        {
          label: "Email Address",
          placeholder: "Example@email.com",
          type: "email",
        },
        {
          label: "Phone Number",
          placeholder: "Example123",
          type: "tel",
        },
        {
          label: "Password",
          placeholder: "at least 8 characters",
          type: "password",
        },
        {
          label: "Password",
          placeholder: "at least 8 characters",
          type: "password",
        },
      ]}
    />
  );
}
