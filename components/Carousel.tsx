import React, { useRef } from 'react';

interface Item {
  image: string;
  progress?: number;
  label?: string;
  badge?: string;
}
interface CarouselProps {
  title: string;
  items: Item[];
  showProgress?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ title, items, showProgress }) => {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseDown = (e: React.MouseEvent) => {
    const carousel = ref.current;
    if (!carousel) return;
    let startX = e.pageX - carousel.offsetLeft;
    const scrollLeft = carousel.scrollLeft;

    const onMouseMove = (ev: MouseEvent) => {
      ev.preventDefault();
      const x = ev.pageX - (carousel?.offsetLeft ?? 0);
      const walk = (x - startX) * 2;
      if (carousel) carousel.scrollLeft = scrollLeft - walk;
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3 text-white">{title}</h2>
      <div className="relative">
        <div
          ref={ref}
          className="flex space-x-3 overflow-x-auto pb-4 hide-scrollbar"
          onMouseDown={onMouseDown}
        >
          {items.map((item, idx) => (
            <div key={idx} className="content-card glass-card flex-shrink-0 relative rounded-lg overflow-hidden" style={{ width: showProgress ? '128px' : '160px', height: showProgress ? '192px' : '96px' }}>
              <img src={item.image} alt="Content" className="w-full h-full object-cover" />
              {item.badge && (
                <div className="absolute top-2 right-2 new-badge text-white text-xs px-1 rounded">{item.badge}</div>
              )}
              {showProgress && item.progress !== undefined && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-2">
                  <div className="w-full progress-bar rounded-full h-1 mb-1">
                    <div className="progress-fill h-1 rounded-full" style={{ width: `${item.progress}%` }} />
                  </div>
                  <p className="text-xs text-gray-300">{item.label}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;