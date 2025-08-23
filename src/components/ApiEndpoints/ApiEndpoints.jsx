// src/components/ApiEndpoints/ApiEndpoints.js
import React from 'react';
import './ApiEndpoints.css';
import GradientText from '../common/GradientText/GradientText';
import { LockIcon, GlobeIcon } from '../common/Icons/Icons';

const ApiEndpoints = () => {
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

  const getMethodClass = (method) => {
    switch(method) {
      case 'GET': return 'api-table__method--get';
      case 'POST': return 'api-table__method--post';
      case 'PUT': return 'api-table__method--put';
      case 'DELETE': return 'api-table__method--delete';
      default: return '';
    }
  };

  return (
    <section id="api" className="api-endpoints section">
      <div className="container">
        <div className="api-endpoints__header">
          <h2 className="api-endpoints__title">
            <GradientText variant="accent" as="span">
              RESTful API
            </GradientText>
          </h2>
          <p className="api-endpoints__subtitle">Simple and intuitive API endpoints</p>
        </div>

        <div className="api-table-container">
          <table className="api-table">
            <thead>
              <tr>
                <th>Method</th>
                <th>Endpoint</th>
                <th>Description</th>
                <th>Auth</th>
              </tr>
            </thead>
            <tbody>
              {endpoints.map((endpoint, index) => (
                <tr key={index} className="api-table__row">
                  <td>
                    <span className={`api-table__method ${getMethodClass(endpoint.method)}`}>
                      {endpoint.method}
                    </span>
                  </td>
                  <td className="api-table__path">{endpoint.path}</td>
                  <td className="api-table__description">{endpoint.description}</td>
                  <td className="api-table__auth">
                    {endpoint.auth ? (
                      <LockIcon className="api-table__icon api-table__icon--locked" />
                    ) : (
                      <GlobeIcon className="api-table__icon api-table__icon--public" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ApiEndpoints;