import React from 'react';
import federalItImg from '../assets/federal_it_services_1771584861211.png';
import cybersecurityImg from '../assets/cybersecurity_compliance_1771584895782.png';
import cloudImg from '../assets/cloud_infrastructure_1771584931186.png';
import defenseImg from '../assets/defense_systems_1771584965400.png';
import analyticsImg from '../assets/data_analytics_1771584985735.png';
import softwareImg from '../assets/software_development_1771585012680.png';

export const FederalITImage = () => (
  <img src={federalItImg} alt="Federal IT Services" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
);

export const CybersecurityImage = () => (
  <img src={cybersecurityImg} alt="Cybersecurity & Compliance" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
);

export const CloudImage = () => (
  <img src={cloudImg} alt="Cloud & Infrastructure" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
);

export const DefenseImage = () => (
  <img src={defenseImg} alt="Defense Systems Support" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
);

export const AnalyticsImage = () => (
  <img src={analyticsImg} alt="Data Analytics & Integration" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
);

export const SoftwareDevelImage = () => (
  <img src={softwareImg} alt="Software Development" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
);

export default {
  FederalITImage,
  CybersecurityImage,
  CloudImage,
  DefenseImage,
  AnalyticsImage,
  SoftwareDevelImage,
};
