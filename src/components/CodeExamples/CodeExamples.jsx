// src/components/CodeExamples/CodeExamples.js
import React, { useState } from 'react';
import './CodeExamples.css';
import GradientText from '../common/GradientText/GradientText';
import { CopyIcon, CheckIcon } from '../common/Icons/Icons';

const CodeExamples = () => {
  const [activeTab, setActiveTab] = useState('curl');
  const [copied, setCopied] = useState(false);

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
};`,

    python: `import requests

url = "http://localhost:3000/auth/register"
payload = {
    "email": "user@example.com",
    "password": "SecurePass123!",
    "name": "John Doe"
}
headers = {"Content-Type": "application/json"}

response = requests.post(url, json=payload, headers=headers)
print("User registered:", response.json())`,

    go: `package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "net/http"
)

func main() {
    url := "http://localhost:3000/auth/register"
    payload := map[string]string{
        "email":    "user@example.com",
        "password": "SecurePass123!",
        "name":     "John Doe",
    }

    body, _ := json.Marshal(payload)
    resp, err := http.Post(url, "application/json", bytes.NewBuffer(body))
    if err != nil {
        panic(err)
    }
    defer resp.Body.Close()

    var result map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&result)
    fmt.Println("User registered:", result)
}`
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeExamples[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="demo" className="code-examples section">
      <div className="container">
        <div className="code-examples__header">
          <h2 className="code-examples__title">
            <GradientText variant="purple-pink" as="span">
              Integration Examples
            </GradientText>
          </h2>
          <p className="code-examples__subtitle">Get started with just a few lines of code</p>
        </div>

        <div className="code-examples__container">
          <div className="code-examples__tabs">
            {Object.keys(codeExamples).map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveTab(lang)}
                className={`code-examples__tab ${activeTab === lang ? 'code-examples__tab--active' : ''}`}
              >
                {lang.charAt(0).toUpperCase() + lang.slice(1)}
              </button>
            ))}
          </div>

          <div className="code-examples__content">
            <pre className="code-examples__code">
              <code>{codeExamples[activeTab]}</code>
            </pre>
            <button
              onClick={copyToClipboard}
              className="code-examples__copy"
              aria-label="Copy code"
            >
              {copied ? <CheckIcon /> : <CopyIcon />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeExamples;
