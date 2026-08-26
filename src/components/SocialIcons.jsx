import React from 'react';
import { clinicInfo } from '../data/clinicData';

export function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export function FacebookIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

export function TikTokIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743 2.9 2.9 0 0 1 2.305-4.643c.334 0 .654.056.953.16V9.43a6.34 6.34 0 0 0-.953-.073 6.345 6.345 0 0 0-6.343 6.343 6.346 6.346 0 0 0 6.343 6.343 6.343 6.343 0 0 0 6.343-6.343V9.014a8.188 8.188 0 0 0 4.767 1.517V7.086c-.347 0-.687-.136-1-.4z"/>
    </svg>
  );
}

export default function SocialLinksBar({ className = "", iconSize = "w-5 h-5" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Instagram */}
      <a
        href={clinicInfo.socialMedia.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Oli Dental Clinic Instagram"
        className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-sm hover:opacity-90 hover:scale-110 transition-all"
      >
        <InstagramIcon className={iconSize} />
      </a>

      {/* Facebook */}
      <a
        href={clinicInfo.socialMedia.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Oli Dental Clinic Facebook"
        className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-sm hover:opacity-90 hover:scale-110 transition-all"
      >
        <FacebookIcon className={iconSize} />
      </a>

      {/* TikTok */}
      <a
        href={clinicInfo.socialMedia.tiktok}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Oli Dental Clinic TikTok"
        className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center shadow-sm hover:opacity-90 hover:scale-110 transition-all"
      >
        <TikTokIcon className={iconSize} />
      </a>
    </div>
  );
}
