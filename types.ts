
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  colorClass?: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface PricingPlan {
  name: string;
  tagline: string;
  price: string;
  recommended?: boolean;
  features: string[];
  icon: React.ReactNode;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}
