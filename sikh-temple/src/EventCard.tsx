// EventCard.tsx
interface EventCardProps {
    title: string;
    date: string;
    description: string;
  }
  
  const EventCard: React.FC<EventCardProps> = ({ title, date, description }) => {
    return (
      <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4">
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-gray-600">{date}</p>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    );
  };
  