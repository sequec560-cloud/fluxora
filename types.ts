
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  /* Fix: Import React to access ReactNode namespace */
  icon: React.ReactNode;
}

export interface FAQItem {
  question: string;
  answer: string;
}
