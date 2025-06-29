import React, { useState, useEffect } from "react";
import AnimatedCounter from "../components/ui/AnimatedCounter";

const CounterTest: React.FC = () => {
  const [simpleCount, setSimpleCount] = useState(0);

  // Simple counter test
  useEffect(() => {
    const interval = setInterval(() => {
      setSimpleCount(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Animated Counter Test</h1>
      
      <div style={{ marginBottom: 20 }}>
        <h2>Simple Counter Test (should update every second):</h2>
        <p>Count: {simpleCount}</p>
      </div>
      
      <div style={{ marginBottom: 20 }}>
        <h2>Animated Counter Test:</h2>
        <AnimatedCounter end={50} duration={5000} showProgress={true} />
      </div>
      
      <div style={{ marginBottom: 20 }}>
        <h2>Small Number Test (2 years):</h2>
        <AnimatedCounter end={2} suffix=" years" showProgress={true} />
      </div>
      
      <div style={{ marginBottom: 20 }}>
        <h2>Decimal Test (4.9 rating):</h2>
        <AnimatedCounter end={4.9} suffix="/5" showProgress={true} />
      </div>
    </div>
  );
};

export default CounterTest; 