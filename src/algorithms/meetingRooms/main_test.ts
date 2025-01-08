import { assertEquals } from "jsr:@std/assert";
import { meetingRooms, Interval } from "./main.ts";

Deno.test("meetingRooms - empty array should return true", () => {
  assertEquals(meetingRooms([]), true);
});

Deno.test("meetingRooms - single meeting should return true", () => {
  const intervals = [new Interval(7, 10)];
  assertEquals(meetingRooms(intervals), true);
});

Deno.test("meetingRooms - non-overlapping meetings should return true", () => {
  const intervals = [
    new Interval(0, 30),
    new Interval(35, 40),
    new Interval(45, 50),
  ];
  assertEquals(meetingRooms(intervals), true);
});

Deno.test("meetingRooms - overlapping meetings should return false", () => {
  const intervals = [
    new Interval(0, 30),
    new Interval(5, 10),
    new Interval(15, 20),
  ];
  assertEquals(meetingRooms(intervals), false);
});

Deno.test("meetingRooms - back-to-back meetings should return true", () => {
  const intervals = [
    new Interval(1, 5),
    new Interval(5, 10),
    new Interval(10, 15),
  ];
  assertEquals(meetingRooms(intervals), true);
});

Deno.test(
  "meetingRooms - partially overlapping meetings should return false",
  () => {
    const intervals = [
      new Interval(7, 10),
      new Interval(2, 4),
      new Interval(3, 5),
    ];
    assertEquals(meetingRooms(intervals), false);
  }
);
