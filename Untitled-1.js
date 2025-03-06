import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in with", email, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <Card className="w-full max-w-sm p-6 shadow-lg rounded-2xl bg-white">
        <CardContent className="space-y-4">
          <h1 className="text-2xl font-bold text-green-600 text-center">DEP Info Care</h1>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-green-300 rounded-lg"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-green-300 rounded-lg"
          />
          <Button onClick={handleLogin} className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
            Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
