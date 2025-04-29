import AuthProvider from "../components/AuthProvider";

const AuthLayout = ({ children }) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
};

export default AuthLayout;
