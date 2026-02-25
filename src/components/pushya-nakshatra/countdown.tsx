"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
}

const NextPushyaNakshatraCountdown = () => {
    const [isClient, setIsClient] = useState(false);
    const nextPushyaDate = new Date("2026-02-28T16:35:00");
    const endDate = new Date("2026-03-01T08:35:00");

    useEffect(() => {
        setIsClient(true);
    }, []);

    const calculateTimeLeft = (): TimeLeft | null => {
        const difference = +nextPushyaDate - +new Date();
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
        if (!isClient) return;

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [isClient]);

    return (
        <div className="flex items-center justify-center px-4">
            <Card className="w-full max-w-2xl border-2 border-primary/20 bg-primary/5">
                <CardHeader className="text-center">
                    <div className="flex items-center justify-center text-primary-dark">
                        <Sparkles className="h-5 w-5 mr-2" />
                        <CardTitle className="text-lg font-bold">Next Pushya Nakshatra</CardTitle>
                    </div>
                    <p className="text-2xl font-bold text-primary-dark mt-2">28-Feb & 01-Mar - 2026</p>
                    <p className="text-sm text-yellow-600">Saturday-Sunday</p>
                </CardHeader>
                <CardContent>
                    {isClient && timeLeft ? (
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
                    ) : (
                        <div className="text-center text-2xl font-bold text-primary-dark mt-4">Loading countdown...</div>
                    )}
                    <div className="text-center text-sm text-gray-600 mt-4">
                        <p>Starts: {nextPushyaDate.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })} on February 28, 2026</p>
                        <p>Ends: {endDate.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })} on March 1, 2026</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default NextPushyaNakshatraCountdown;
