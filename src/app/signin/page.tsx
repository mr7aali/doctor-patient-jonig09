import { AuthPage } from "../_components/AuthPage";

export default function SignInPage() {
  return (
    <AuthPage
      variant="signin"
      title={"Welcome Back  \uD83D\uDC4B"}
      subtitle="Access your nephrology care dashboard."
      submitLabel="Sign in"
      googleLabel="Sign in with Google"
      footerText="Don't you have an account?"
      footerHref="/signup"
      footerLink="Sign up"
      fields={[
        {
          label: "Email or Phone Number",
          placeholder: "Example@email.com",
          icon: "sms",
        },
        {
          label: "Password",
          placeholder: "at least 8 characters",
          type: "password",
          icon: "lock",
          helper: "Forgot Password?",
        },
      ]}
    />
  );
}
