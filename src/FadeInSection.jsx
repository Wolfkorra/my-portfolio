import { useInView } from 'react-intersection-observer';

export default function FadeInSection({ children, className = '' }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <div
      ref={ref}
      className={`fade-in-section ${inView ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
