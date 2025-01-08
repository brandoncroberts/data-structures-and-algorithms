/**
 * Description
 * Given an array of meeting time intervals consisting of start and end times [(s1,e1),(s2,e2),...] (si < ei), determine if a person could attend all meetings.
 *
 * @param {number} n Param Description:
 * @returns {number} Return Description:
 *
 * @example
 *  Example1
 *
 *  Input: intervals = [(0,30),(5,10),(15,20)]
 *  Output: false
 *  Explanation:
 *  (0,30), (5,10) and (0,30),(15,20) will conflict
 *
 * @example
 *   Example2
 *
 *   Input: intervals = [(5,8),(9,15)]
 *   Output: true
 *   Explanation:
 *   Two times will not conflict
 *
 */

export class Interval {
  start: number;
  end: number;
  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
  }
}

const sortIntervals = (intervals: Interval[]): Interval[] => {
  return intervals.sort((a, b) => a.start - b.start);
};

export const meetingRooms = (intervals: Interval[]): boolean => {
  const sortedIntervals = sortIntervals(intervals);
  for (let i = 0; i < sortedIntervals.length - 1; i++) {
    const currentInterval = sortedIntervals[i];
    const nextInterval = sortedIntervals[i + 1];

    if (currentInterval.end > nextInterval.start) return false;
  }
  return true;
};
