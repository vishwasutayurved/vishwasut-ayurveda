import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

interface UpcomingDate {
  date: string;
  day: string;
  starts: string;
  ends: string;
  isNext?: boolean;
}

interface UpcomingDatesProps {
  upcomingPushyaNakshatraDates: UpcomingDate[];
}

const UpcomingDates = ({ upcomingPushyaNakshatraDates }: UpcomingDatesProps) => {
  return (
    <div className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">All Upcoming Dates</h2>
          <p className="mt-4 text-lg text-muted-foreground">Complete list of Pushya Nakshatra dates for 2026</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingPushyaNakshatraDates.map((item, index) => (
            <Card
              key={index}
              className={`p-6 ${item.isNext ? 'border-2 border-primary' : ''}`}>
              <CardContent className="flex flex-col items-center text-center">
                <div className="flex items-center mb-2 text-lg font-semibold text-primary">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{item.date}</span>
                </div>
                <p className="text-yellow-600 mb-4">{item.day}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Starts: {item.starts}</span>
                  <span className="mx-2">|</span>
                  <span>Ends: {item.ends}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingDates;
