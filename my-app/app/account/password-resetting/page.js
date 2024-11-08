const { default: AuthForm } = require("@/components/auth-form");
export default function Account() {
  return <AuthForm formFormat={"Password-resetting"} />;
}
