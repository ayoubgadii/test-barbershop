import React from 'react';

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface PriceItem {
  service: string;
  description: string;
  price: string;
}

export interface Barber {
  name: string;
  image: string;
}

export interface Review {
  text: string;
  author: string;
  role: string;
  image: string;
}