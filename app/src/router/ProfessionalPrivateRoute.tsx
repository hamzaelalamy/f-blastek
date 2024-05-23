import React from 'react'
import { Navigate } from 'react-router-dom'

const ProfessionalPrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const professional = localStorage.getItem("professional");
  const accessToken: string | null = JSON.parse(professional)?.token;

  if (!accessToken) {
    return <Navigate to="/login/applicant" />
  }

  return <>{children}</>
}

export default ProfessionalPrivateRoute