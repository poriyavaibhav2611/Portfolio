import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #4f6fd3, #223f93)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '8px',
          fontSize: 22,
          fontWeight: 900,
          fontFamily: 'sans-serif',
          boxShadow: '0 4px 10px rgba(79, 111, 211, 0.5)',
        }}
      >
        V
      </div>
    ),
    {
      ...size,
    }
  );
}
