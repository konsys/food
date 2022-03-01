import { useState, useEffect } from 'react';

export const usePosition = () => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const geo = navigator.geolocation;

    if (!geo) {
      setError('Геолокация не поддерживается браузером');
      return;
    }

    // Подписываемся на изменение геопозиции браузера.
    const watcher = geo.watchPosition(onChange, onError);
    //
    // return () => geo.clearWatch(watcher);
  }, []);

  const onChange = ({ latitude, longitude }: any) => {
    // Здесь мы могли бы сохранить весь объект position, но для
    // ясности давайте явно перечислим, какие свойства нас интересуют.
    setPosition({ latitude, longitude });
  };

  const onError = (error: any) => setError(error.message);

  return { ...position, error };
};
