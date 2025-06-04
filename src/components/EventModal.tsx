import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, Calendar, MapPin, Clock } from 'lucide-react';

interface EventModalProps {
  children: React.ReactNode;
}

const EventModal = ({ children }: EventModalProps) => {
  const addToCalendar = () => {
    const event = {
      text: "Alekhya Alapati's Rangapravesam",
      dates: "20250628T080000/20250628T220000",
      location: "Coppell Arts Center, 505 Travis St, Coppell, TX 75019",
      details: "Join us for Alekhya Alapati's Rangapravesam, marking her formal debut as a Kuchipudi dancer."
    };

    const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.text)}&dates=${event.dates}&location=${encodeURIComponent(event.location)}&details=${encodeURIComponent(event.details)}`;
    window.open(googleUrl, '_blank');
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-2xl max-h-[85vh] overflow-y-auto bg-white rounded-lg shadow-xl z-50 p-6">
          <div className="flex justify-between items-start mb-6">
            <Dialog.Title className="text-2xl font-display text-amber-800 font-bold">
              Rangapravesam Details
            </Dialog.Title>
            <Dialog.Close className="text-amber-800 hover:text-amber-900">
              <X size={24} />
            </Dialog.Close>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-amber-800">
                <Calendar size={20} />
                <span className="font-semibold">28 June 2025</span>
              </div>
              <div className="flex items-center gap-3 text-amber-800">
                <Clock size={20} />
                <span className="font-semibold">08:00 AM - 10:00 PM</span>
              </div>
              <div className="flex items-center gap-3 text-amber-800">
                <MapPin size={20} />
                <span className="font-semibold">Coppell Arts Center<br />505 Travis St, Coppell, TX 75019</span>
              </div>
            </div>

            <div className="prose prose-amber max-w-none">
              <h3 className="text-xl text-amber-800 font-semibold">Event Description</h3>
              <p>
                Join us for a momentous occasion as Alekhya Alapati presents her Rangapravesam, marking her formal debut as a Kuchipudi dancer. This traditional ceremony represents the culmination of years of dedicated training and the beginning of her journey as a performer.
              </p>
              <p>
                The event will feature a comprehensive showcase of Kuchipudi dance items, demonstrating the breadth and depth of this classical art form through various choreographic pieces.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl text-amber-800 font-semibold">Location</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.744892352843!2d-97.00972922487084!3d32.95161427504368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c2b63fbcc0227%3A0x581a266e00accf1!2sCoppell%20Arts%20Center!5e1!3m2!1sen!2sin!4v1749031828933!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>

            <button
              onClick={addToCalendar}
              className="w-full py-3 bg-amber-600 text-amber-50 rounded-md hover:bg-amber-700 transition-colors duration-300"
            >
              Add to Calendar
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default EventModal;