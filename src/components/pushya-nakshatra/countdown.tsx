"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { upcomingPushyaNakshatraDates } from "@/lib/pushya-nakshatra-dates";

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
}

const getNextEvent = () => {
    const now = new Date();

    for (const event of upcomingPushyaNakshatraDates) {
        const year = event.date.slice(-4);
        const monthMatch = event.date.match(/[A-Z][a-z]{2}/);
        const dayMatch = event.date.match(/^\d{1,2}/);

        if (!monthMatch || !dayMatch) continue;

        const monthStr = monthMatch[0];
        const day = dayMatch[0];

        const [time, period] = event.starts.split(' ');
        let [hours, minutes] = time.split(':').map(Number);

        if (period === 'PM' && hours < 12) hours += 12;
        if (period === 'AM' && hours === 12) hours = 0;

        const startDate = new Date(`${monthStr} ${day}, ${year} ${hours}:${minutes}:00`);

        if (startDate > now) {
            let endDate;
            const endDateParts = event.date.split('&');
            if (endDateParts.length > 1) {
                const endStr = endDateParts[1].trim();
                const endDayMatch = endStr.match(/^\d{1,2}/);
                const endMonthMatch = endStr.match(/[A-Z][a-z]{2}/);
                const endYearMatch = endStr.match(/\d{4}/);

                if (endDayMatch && endMonthMatch && endYearMatch) {
                    const [endTime, endPeriod] = event.ends.split(' ');
                    let [endHours, endMinutes] = endTime.split(':').map(Number);
                    if (endPeriod === 'PM' && endHours < 12) endHours += 12;
                    if (endPeriod === 'AM' && endHours === 12) endHours = 0;

                    endDate = new Date(`${endMonthMatch[0]} ${endDayMatch[0]}, ${endYearMatch[0]} ${endHours}:${endMinutes}:00`);
                } else {
                    // Fallback or error
                    endDate = new Date(startDate);
                }

            } else {
                endDate = new Date(startDate);
                const [endTime, endPeriod] = event.ends.split(' ');
                let [endHours, endMinutes] = endTime.split(':').map(Number);
                if (endPeriod === 'PM' && endHours < 12) endHours += 12;
                if (endPeriod === 'AM' && endHours === 12) endHours = 0;
                endDate.setHours(endHours, endMinutes);

                if (endDate < startDate) {
                    endDate.setDate(endDate.getDate() + 1);
                }
            }

            return {
                ...event,
                startDate,
                endDate,
            };
        }
    }
    return null;
}

const NextPushyaNakshatraCountdown = () => {
    const [isClient, setIsClient] = useState(false);
    const [nextEvent, setNextEvent] = useState(getNextEvent());

    useEffect(() => {
        setIsClient(true);
        // Recalculate on client to ensure it's up-to-date
        setNextEvent(getNextEvent());
    }, []);

    const calculateTimeLeft = (): TimeLeft | null => {
        if (!nextEvent) return null;
        const difference = +nextEvent.startDate - +new Date();
        if (difference <= 0) {
            return null;
        }
        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        if (!isClient || !nextEvent) return;

        const timer = setInterval(() => {
            const newTimeLeft = calculateTimeLeft();
            if (newTimeLeft) {
                setTimeLeft(newTimeLeft);
            } else {
                // Countdown finished, find the next event
                setNextEvent(getNextEvent());
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [isClient, nextEvent]);

    if (!isClient) {
        return (
            <div className="flex items-center justify-center px-4">
                <Card className="w-full max-w-2xl border-2 border-primary/20 bg-primary/5 text-center p-8">
                    <CardTitle className="text-lg font-bold">Loading Countdown...</CardTitle>
                </Card>
            </div>
        );
    }

    if (!nextEvent) {
        return (
            <div className="flex items-center justify-center px-4">
                <Card className="w-full max-w-2xl border-2 border-primary/20 bg-primary/5 text-center p-8">
                    <CardTitle className="text-lg font-bold">No Upcoming Pushya Nakshatra Dates Found</CardTitle>
                    <p>Please check back later for future dates.</p>
                </Card>
            </div>
        );
    }

    const isAuspiciousTime = !timeLeft;

    return (
        <div className="flex items-center justify-center px-4">
            <Card className="w-full max-w-2xl border-2 border-primary/20 bg-primary/5">
                <CardHeader className="text-center">
                    <div className="flex items-center justify-center text-primary-dark">
                        <Sparkles className="h-5 w-5 mr-2" />
                        <CardTitle className="text-lg font-bold">Next Pushya Nakshatra</CardTitle>
                    </div>
                    <p className="text-2xl font-bold text-primary-dark mt-2">{nextEvent.date}</p>
                    <p className="text-sm text-yellow-600">{nextEvent.day}</p>
                </CardHeader>
                <CardContent>
                    {isAuspiciousTime ? (
                        <div className="text-center text-2xl font-bold text-primary-dark mt-4">The auspicious time has begun!</div>
                    ) : (
                        <div className="grid grid-cols-3 gap-3 text-center">
                            <div className="p-4 bg-white rounded-lg shadow-md">
                                <div className="text-3xl font-bold">{timeLeft.days}</div>
                                <div className="text-sm text-gray-500">Days</div>
                            </div>
                            <div className="p-4 bg-white rounded-lg shadow-md">
                                <div className="text-3xl font-bold">{timeLeft.hours}</div>
                                <div className="text-sm text-gray-500">Hours</div>
                            </div>
                            <div className="p-4 bg-white rounded-lg shadow-md">
                                <div className="text-3xl font-bold">{timeLeft.minutes}</div>
                                <div className="text-sm text-gray-500">Minutes</div>
                            </div>
                        </div>
                    )}
                    <div className="text-center text-sm text-gray-600 mt-4">
                        <p>Starts: {nextEvent.startDate.toLocaleString('en-US', { month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true })}</p>
                        <p>Ends: {nextEvent.endDate.toLocaleString('en-US', { month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true })}</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default NextPushyaNakshatraCountdown;
