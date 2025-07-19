"use client";

import React from 'react';

interface AlertProps {
  title?: string;
  children?: React.ReactNode;
}

export const Alert = ({title, children} : AlertProps) => (
    <div className="alert" role="alert">
      <h1 className="alert-title">{title}</h1>
      {children}
    </div>
  );
