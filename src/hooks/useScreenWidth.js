import { useState, useEffect } from 'react';

const useScreenWidth = () => {
  const [widthMatches, setWidthMatches] = useState(
    window.matchMedia('(min-width: 768px)').matches,
  );

  useEffect(() => {
    window
      .matchMedia('(min-width: 768px)')
      .addEventListener('change', e => setWidthMatches(e.matches));
  }, []);

  return widthMatches;
};

export default useScreenWidth;
