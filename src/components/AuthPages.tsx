import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { toast } from 'sonner';
import logo from 'figma:asset/ba903176d079dc459036529cf29fe7b6886bb041.png';

interface LoginPageProps {
  onLogin: (email: string, password: string) => void;
  onNavigate: (view: string) => void;
}

export function LoginPage({ onLogin, onNavigate }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }
    onLogin(email, password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <img src={logo} alt="Rent in Kigali" className="h-12" />
          </div>
          <CardTitle>Welcome Back</CardTitle>
          <CardDescription>Sign in to your account to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-input-background"
                required
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="bg-input-background"
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Sign In
            </Button>

            <div className="text-center text-sm">
              <span className="text-muted-foreground">Don't have an account? </span>
              <button
                type="button"
                onClick={() => onNavigate('register')}
                className="text-primary hover:underline"
              >
                Sign up
              </button>
            </div>

            <div className="text-center text-sm">
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="text-muted-foreground hover:text-primary"
              >
                Back to home
              </button>
            </div>
          </form>

          <div className="mt-6 p-4 bg-muted rounded-lg text-sm">
            <p className="mb-2">Demo Accounts:</p>
            <p className="text-muted-foreground">Admin: admin@rentinkigali.com / admin123</p>
            <p className="text-muted-foreground">Agent: agent@rentinkigali.com / agent123</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

interface RegisterPageProps {
  onRegister: (name: string, email: string, password: string) => void;
  onNavigate: (view: string) => void;
}

export function RegisterPage({ onRegister, onNavigate }: RegisterPageProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !password || !confirmPassword) {
      toast.error('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    onRegister(name, email, password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <img src={logo} alt="Rent in Kigali" className="h-12" />
          </div>
          <CardTitle>Create Account</CardTitle>
          <CardDescription>Sign up to start finding your dream property</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="bg-input-background"
                required
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-input-background"
                required
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                className="bg-input-background"
                required
              />
            </div>

            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                className="bg-input-background"
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Sign Up
            </Button>

            <div className="text-center text-sm">
              <span className="text-muted-foreground">Already have an account? </span>
              <button
                type="button"
                onClick={() => onNavigate('login')}
                className="text-primary hover:underline"
              >
                Sign in
              </button>
            </div>

            <div className="text-center text-sm">
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="text-muted-foreground hover:text-primary"
              >
                Back to home
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
