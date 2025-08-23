import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Zap, 
  Lock, 
  Code2, 
  Server, 
  Database,
  CheckCircle2,
  ArrowRight,
  Github,
  Globe,
  Cpu,
  Layers,
  Timer,
  Users,
  Key,
  FileCode,
  Terminal,
  Sparkles,
  ChevronRight,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';

const App = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('curl');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeExamples = {
    curl: `curl -X POST http://localhost:3000/auth/register \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "password": "SecurePass123!",
    "name": "John Doe"
  }'`,
    javascript: `const response = await fetch('http://localhost:3000/auth/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'SecurePass123!',
    name: 'John Doe'
  })
});

const data = await response.json();
console.log('User registered:', data);`,
    typescript: `interface RegisterData {
  email: string;
  password: string;
  name?: string;
}

const registerUser = async (data: RegisterData) => {
  const response = await fetch('http://localhost:3000/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  
  return response.json();
};`
  };

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Built on Bun runtime for maximum performance with <200ms response times",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Industry-standard authentication with Better-Auth, Argon2 hashing, and CSRF protection",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Type-Safe Database",
      description: "Drizzle ORM with PostgreSQL for type-safe queries and migrations",
      color: "from-green-400 to-teal-500"
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Docker Ready",
      description: "Containerized with Docker for easy deployment and scaling",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: <Timer className="w-6 h-6" />,
      title: "Session Management",
      description: "Secure session handling with refresh tokens and automatic expiry",
      color: "from-red-400 to-rose-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User Management",
      description: "Complete CRUD operations for user profiles with validation",
      color: "from-indigo-400 to-blue-500"
    }
  ];

  const techStack = [
    { name: "Bun", icon: "🚀", description: "JavaScript runtime" },
    { name: "Hono", icon: "⚡", description: "Web framework" },
    { name: "Better-Auth", icon: "🔐", description: "Authentication" },
    { name: "Drizzle ORM", icon: "💧", description: "Database ORM" },
    { name: "PostgreSQL", icon: "🐘", description: "Database" },
    { name: "Docker", icon: "🐳", description: "Containerization" },
    { name: "TypeScript", icon: "📘", description: "Type safety" },
    { name: "Zod", icon: "✅", description: "Validation" }
  ];

  const endpoints = [
    { method: "POST", path: "/auth/register", description: "Register new user", auth: false },
    { method: "POST", path: "/auth/login", description: "User login", auth: false },
    { method: "POST", path: "/auth/logout", description: "User logout", auth: true },
    { method: "POST", path: "/auth/refresh", description: "Refresh session", auth: true },
    { method: "GET", path: "/auth/me", description: "Get current user", auth: true },
    { method: "PUT", path: "/auth/me", description: "Update user info", auth: true },
    { method: "DELETE", path: "/auth/me", description: "Delete account", auth: true },
    { method: "POST", path: "/auth/forgot-password", description: "Password reset", auth: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4 flex justify-between items-center backdrop-blur-sm bg-black/20 border-b border-white/10">
        <div className="flex items-center space-x-2">
          <Shield className="w-8 h-8 text-blue-400" />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            AuthServer
          </span>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
          <a href="#api" className="hover:text-blue-400 transition-colors">API</a>
          <a href="#quickstart" className="hover:text-blue-400 transition-colors">Quick Start</a>
          <a 
            href="https://github.com/yourusername/auth-server" 
            className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all backdrop-blur-sm"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-32 max-w-7xl mx-auto">
        <div 
          id="hero" 
          data-animate
          className={`text-center space-y-8 transition-all duration-1000 ${
            isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm">Production-Ready Authentication</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Lightning Fast
            </span>
            <br />
            Authentication Server
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            High-performance authentication infrastructure built with Bun, Hono, Better-Auth & Drizzle ORM. 
            Deploy in minutes with Docker and scale to thousands of users.
          </p>
          
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={() => copyToClipboard('git clone https://github.com/yourusername/auth-server.git')}
              className="group flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              <Terminal className="w-5 h-5" />
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a 
              href="#demo"
              className="flex items-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg font-semibold transition-all"
            >
              <Globe className="w-5 h-5" />
              <span>View Demo</span>
            </a>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                &lt;200ms
              </div>
              <div className="text-sm text-gray-400">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                10k+
              </div>
              <div className="text-sm text-gray-400">Concurrent Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                5 min
              </div>
              <div className="text-sm text-gray-400">Setup Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-gray-400">Everything you need for modern authentication</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              id={`feature-${index}`}
              data-animate
              className={`group p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-500 hover:scale-105 ${
                isVisible[`feature-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              Modern Tech Stack
            </span>
          </h2>
          <p className="text-gray-400">Built with cutting-edge technologies</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="group p-4 bg-gray-800/30 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-gray-500 transition-all hover:scale-105 hover:bg-gray-800/50"
            >
              <div className="text-3xl mb-2">{tech.icon}</div>
              <h3 className="font-semibold">{tech.name}</h3>
              <p className="text-sm text-gray-400">{tech.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* API Endpoints Section */}
      <section id="api" className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              RESTful API
            </span>
          </h2>
          <p className="text-gray-400">Simple and intuitive API endpoints</p>
        </div>

        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
          <div className="p-6">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-gray-700">
                  <th className="pb-4 text-gray-400">Method</th>
                  <th className="pb-4 text-gray-400">Endpoint</th>
                  <th className="pb-4 text-gray-400">Description</th>
                  <th className="pb-4 text-gray-400">Auth</th>
                </tr>
              </thead>
              <tbody>
                {endpoints.map((endpoint, index) => (
                  <tr key={index} className="border-b border-gray-700/50 hover:bg-gray-700/20">
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                        endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                        endpoint.method === 'PUT' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {endpoint.method}
                      </span>
                    </td>
                    <td className="py-4 font-mono text-sm">{endpoint.path}</td>
                    <td className="py-4 text-gray-400">{endpoint.description}</td>
                    <td className="py-4">
                      {endpoint.auth ? (
                        <Lock className="w-4 h-4 text-yellow-400" />
                      ) : (
                        <Globe className="w-4 h-4 text-green-400" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Code Examples Section */}
      <section id="demo" className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Integration Examples
            </span>
          </h2>
          <p className="text-gray-400">Get started with just a few lines of code</p>
        </div>

        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
          <div className="flex border-b border-gray-700">
            {Object.keys(codeExamples).map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveTab(lang)}
                className={`px-6 py-3 font-semibold capitalize transition-all ${
                  activeTab === lang
                    ? 'bg-gray-700/50 text-blue-400 border-b-2 border-blue-400'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/30'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
          <div className="relative p-6">
            <pre className="text-sm overflow-x-auto">
              <code className="text-gray-300">{codeExamples[activeTab]}</code>
            </pre>
            <button
              onClick={() => copyToClipboard(codeExamples[activeTab])}
              className="absolute top-4 right-4 p-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section id="quickstart" className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Quick Start
            </span>
          </h2>
          <p className="text-gray-400">Deploy your auth server in minutes</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {[
            { step: 1, title: "Clone the repository", cmd: "git clone https://github.com/yourusername/auth-server.git\ncd auth-server" },
            { step: 2, title: "Install dependencies", cmd: "bun install" },
            { step: 3, title: "Set up environment", cmd: "cp .env.example .env\n# Edit .env with your configuration" },
            { step: 4, title: "Run with Docker", cmd: "docker-compose up -d" },
            { step: 5, title: "Access your server", cmd: "curl http://localhost:3000/health" }
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 bg-gray-800/30 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-gray-600 transition-all"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center font-bold">
                {item.step}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <div className="bg-gray-900/50 rounded-lg p-3 font-mono text-sm text-gray-300">
                  {item.cmd}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl border border-blue-500/30 p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Build?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Start building secure authentication in minutes
          </p>
          <div className="flex items-center justify-center space-x-4">
            <a
              href="https://github.com/yourusername/auth-server"
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              <Github className="w-5 h-5" />
              <span>View on GitHub</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="/docs"
              className="flex items-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg font-semibold transition-all"
            >
              <FileCode className="w-5 h-5" />
              <span>Read Documentation</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className="w-6 h-6 text-blue-400" />
            <span className="font-semibold">AuthServer</span>
          </div>
          <div className="text-gray-400 text-sm">
            Built with ❤️ using Bun, Hono, Better-Auth & Drizzle
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default App;