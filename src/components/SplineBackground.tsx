import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';

const SplineBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 opacity-40">
      <Suspense fallback={
        <div className="w-full h-full bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 animate-gradient-x"></div>
        </div>
      }>
        <Spline
          scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
          style={{
            width: '100%',
            height: '100%',
            background: 'transparent',
          }}
        />
      </Suspense>
    </div>
  );
};

export default SplineBackground;