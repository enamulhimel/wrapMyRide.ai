import React from "react";

interface FrameIconProps {
  size?: number; // default is 55 (SVG width)
  className?: string;
}

const FrameIcon: React.FC<FrameIconProps> = ({ size = 55, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={(size * 48) / 55} // Maintain original 55:48 ratio
    viewBox="0 0 55 48"
    fill="none"
    className={className}
    style={{
      width: `${size}px`,
      height: `${(size * 48) / 55}px`,
      aspectRatio: "55 / 48",
    }}
  >
    <g style={{ mixBlendMode: "plus-lighter" }} filter="url(#filter0)">
      <path d="M19.0195 36.5018H36.0208L27.5201 28.0012L19.0195 36.5018Z" fill="#D80528" />
    </g>
    <g style={{ mixBlendMode: "plus-lighter" }} filter="url(#filter1)">
      <path d="M44.5226 11H27.5214L36.0219 19.5005L27.5214 28.0012H44.5226C49.2162 23.3076 49.2162 15.6936 44.5226 11Z" fill="#D80528" />
    </g>
    <g style={{ mixBlendMode: "plus-lighter" }} filter="url(#filter2)">
      <path d="M19.0208 19.5005L27.5213 11H10.5202C5.82659 15.6936 5.82659 23.3076 10.5202 28.0012H27.5214L19.0209 19.5007L19.0208 19.5005Z" fill="#D80528" />
    </g>
    <g style={{ mixBlendMode: "plus-lighter" }} filter="url(#filter3)">
      <path d="M19.0215 36.5018H36.0227L27.522 28.0012L19.0215 36.5018Z" fill="#E42477" />
    </g>
    <g style={{ mixBlendMode: "plus-lighter" }} filter="url(#filter4)">
      <path d="M44.5227 11H27.5215L36.022 19.5005L27.5215 28.0012H44.5227C49.2163 23.3076 49.2163 15.6936 44.5227 11Z" fill="#E42477" />
    </g>
    <g style={{ mixBlendMode: "plus-lighter" }} filter="url(#filter5)">
      <path d="M19.0208 19.5005L27.5213 11H10.5202C5.82659 15.6936 5.82659 23.3076 10.5202 28.0012H27.5214L19.0209 19.5007L19.0208 19.5005Z" fill="#E42477" />
    </g>
    <g style={{ mixBlendMode: "plus-lighter" }} filter="url(#filter6)">
      <path d="M19.0215 36.5018H36.0227L27.522 28.0012L19.0215 36.5018Z" fill="#FFFE03" />
    </g>
    <g style={{ mixBlendMode: "plus-lighter" }} filter="url(#filter7)">
      <path d="M44.5227 11H27.5215L36.022 19.5005L27.5215 28.0012H44.5227C49.2163 23.3076 49.2163 15.6936 44.5227 11Z" fill="#FFFE03" />
    </g>
    <g style={{ mixBlendMode: "plus-lighter" }} filter="url(#filter8)">
      <path d="M19.0208 19.5005L27.5214 11H10.5202C5.82659 15.6936 5.82659 23.3076 10.5202 28.0012H27.5214L19.0209 19.5007L19.0208 19.5005Z" fill="#FFFE03" />
    </g>

    {/* You can copy your <defs> section exactly here from your original SVG */}
  </svg>
);

export default FrameIcon;
