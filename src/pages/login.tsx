import React, { useState, ChangeEvent, FormEvent } from "react";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom"; // Import useNavigate

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    if (!formData.email || !formData.password) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Invalid email address.");
      setLoading(false);
      return;
    }

    const formDataObj = new FormData();
    formDataObj.append("action", "login");
    formDataObj.append("email", formData.email);
    formDataObj.append("password", formData.password);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbx0tuTx4Xt7tFOCAo4Wg4UxnBUhlEEP4ocyfNV7oToH4-Op13w79Apj9QsXazC_T4Tu2w/exec",
        {
          method: "POST",
          body: formDataObj,
        }
      );

      const data = await response.json();
      if (response.ok && data.status === "success") {
        localStorage.setItem("token", data.token);
        setSuccess(data.message);
        setFormData({ email: "", password: "" });
        navigate("/admin"); // Use navigate to redirect to /admin
      } else {
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="p-8 w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Log In</h2>
        {error && <p className="text-sm text-red-500 text-center">{error}</p>}
        {success && (
          <p className="text-sm text-green-500 text-center">{success}</p>
        )}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Logging In..." : "Log In"}
          </Button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-primary">
            Sign Up
          </a>
        </p>
      </Card>
    </div>
  );
};

export default Login;
