"use client";

import { useEffect, useRef, useState } from "react";
const stats = [
  {
    num: 4,
    text: "Years of experience",
  },
  {
    num: 20,
    text: "Projects Completed",
  },
  {
    num: 10,
    text: "Technologies Mastered",
  },
  {
    num: 400,
    text: "Code Commits",
  },
];

function CountUp({ end, duration = 1500 }) {
  const [value, setValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const startTime = performance.now();
    const start = 0;
    const target = Number(end) || 0;
    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const current = Math.round(start + (target - start) * eased);
      setValue(current);
      if (progress < 1) requestAnimationFrame(animate);
    };
    const raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [hasStarted, end, duration]);

  return (
    <span ref={ref} className="text-4xl xl:text-6xl font-extrabold">
      {value}
    </span>
  );
}

const Stats = () => {
  return (
    <section className="pt-8 pb-12 xl:pt-8 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
            >
              <CountUp end={item.num} />
              <p className="max-w-[150px] leading-snug text-white/80">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

