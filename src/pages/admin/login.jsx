// src/pages/admin/LoginAdmin.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthCard from "../../components/shared/AuthCard";
import AuthInput from "../../components/shared/AuthInput";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      if (email === "admin@aseg.com" && password === "123456") {
        navigate("/admin/dashboard");
      } else {
        throw new Error("Credenciales incorrectas");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-sombra px-4">
      <AuthCard
        title="Acceso administrativo"
        subtitle="Ingresa tus credenciales para continuar"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <AuthInput
            id="email"
            label="Correo electrónico"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@aseg.com"
            autoComplete="email"
          />

          <AuthInput
            id="password"
            label="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            autoComplete="current-password"
          />

          {error && (
            <div className="rounded-lg bg-vinotinto/10 px-3 py-2 text-sm text-vinotinto">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-vinotinto px-4 py-2.5 text-sm font-semibold text-blanco transition-colors hover:bg-vinotinto-secundario disabled:opacity-60"
          >
            {loading ? "Ingresando…" : "Ingresar"}
          </button>
        </form>

      </AuthCard>
    </div>
  );
}