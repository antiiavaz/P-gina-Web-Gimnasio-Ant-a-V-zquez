import React from 'react';

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface PricingPlan {
  title: string;
  price: string;
  features: string[];
  isFeatured: boolean;
}

export interface Facility {
    name: string;
    description: string;
    imageUrl: string;
}

export interface ScheduleClass {
    time: string;
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
}

export interface Activity {
    name: string;
    description: string;
    imageUrl: string;
}