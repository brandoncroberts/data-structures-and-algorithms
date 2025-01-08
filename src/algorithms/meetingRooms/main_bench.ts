import { Interval, meetingRooms } from "./main.ts";
Deno.bench("meetingRooms", () => {
  const intervals = [
    new Interval(0, 30),
    new Interval(35, 40),
    new Interval(45, 50),
  ];
  meetingRooms(intervals);
});
