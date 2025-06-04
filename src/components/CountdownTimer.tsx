import React, { useState, useEffect } from 'react';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';

const CountdownTimer = () => {
  const eventDate = new Date('2025-06-28T08:00:00');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      
      if (now >= eventDate) {
        return null;
      }

      return {
        days: differenceInDays(eventDate, now),
        hours: differenceInHours(eventDate, now) % 24,
        minutes: differenceInMinutes(eventDate, now) % 60,
        seconds: differenceInSeconds(eventDate, now) % 60
      };
    };

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      if (newTimeLeft) {
        setTimeLeft(newTimeLeft);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className="py-12 bg-amber-800 text-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-display mb-8">
            Countdown to Rangapravesam
          </h2>
          <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap">
            {timeUnits.map(({ label, value }) => (
              <div key={label} className="text-center min-w-[100px]">
                <div className="text-3xl md:text-5xl font-display font-bold mb-2">
                  {String(value).padStart(2, '0')}
                </div>
                <div className="text-sm md:text-base font-light">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;