import { AuthProvider } from "./AuthContext";

const ContextProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default ContextProviders