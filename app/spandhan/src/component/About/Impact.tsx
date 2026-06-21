import "./Impact.css";
import { useEffect, useRef, useState } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

function Counter({ end, duration = 2000, prefix = "", suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

const cards = [
  { end: 100, suffix: "+", label: "Lives Supported" },
  { end: 100, suffix: "+", label: "Volunteers" },
  { end: 25,  suffix: "+", label: "Events Held" },
  { end: 10,  prefix: "₹", suffix: "L+", label: "Funds Raised" },
];

function Impact() {
  return (
    <section className="impact" id="milestone">
      <div className="impact-header">
        <span className="impact-chip">Numbers that Matter</span>
        <h2>Our Impact</h2>
        <p>Every number represents a life touched, a smile restored.</p>
      </div>

      <div className="impact-grid">
        {cards.map((card, i) => (
          <div className="impact-card" key={i}>
            <h3>
              <Counter end={card.end} prefix={card.prefix} suffix={card.suffix} />
            </h3>
            <p>{card.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Impact;
