import { useEffect, useState } from 'react';

const PALETTE = ['#6f42c1', '#d63384', '#fd7e14', '#198754', '#0d6efd', '#20c997', '#dc3545', '#6c757d'];

function useYearsPerLine() {
  const query = '(min-width: 768px)';
  const [wide, setWide] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = (e) => setWide(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return wide ? 8 : 4;
}

// Split an entry's years into contiguous runs: [2011,2012,2015] -> [[2011,2012],[2015]]
function toRuns(years) {
  const sorted = [...new Set(years.map(Number))].sort((a, b) => a - b);
  const runs = [];
  sorted.forEach((y) => {
    const last = runs[runs.length - 1];
    if (last && y === last[1] + 1) last[1] = y;
    else runs.push([y, y]);
  });
  return runs;
}

// Greedy lane assignment so parallel things stack and keep their lane across lines.
function buildSegments(data) {
  const segs = [];
  data.forEach((entry, idx) => {
    toRuns(entry.year).forEach(([start, end]) =>
      segs.push({ entry, color: PALETTE[idx % PALETTE.length], start, end }));
  });
  segs.sort((a, b) => a.start - b.start || b.end - a.end);
  const laneEnds = [];
  segs.forEach((s) => {
    let lane = laneEnds.findIndex((e) => e < s.start);
    if (lane === -1) lane = laneEnds.length;
    laneEnds[lane] = s.end;
    s.lane = lane;
  });
  return segs;
}

export function ArtTimeline({ data, from, to }) {
  const perLine = useYearsPerLine();
  const segs = buildSegments(data);

  const lines = [];
  for (let s = from; s <= to; s += perLine) {
    const e = Math.min(s + perLine - 1, to);
    const inLine = segs
      .filter((g) => g.end >= s && g.start <= e)
      .map((g) => ({
        ...g,
        cs: Math.max(g.start, s),
        ce: Math.min(g.end, e),
        contFrom: g.start < s,
        contTo: g.end > e,
      }));
    // Compact lanes within this line only
    const usedLanes = [...new Set(inLine.map((g) => g.lane))].sort((a, b) => a - b);
    lines.push({ s, e, items: inLine.map((g) => ({ ...g, row: usedLanes.indexOf(g.lane) + 2 })) });
  }

  return (
    <div className="art-timeline">
      {lines.map((line) => (
        <div
          className="art-line"
          key={line.s}
          style={{ gridTemplateColumns: `repeat(${line.e - line.s + 1}, 1fr)` }}
        >
          {Array.from({ length: line.e - line.s + 1 }, (_, i) => (
            <div className="art-year" key={line.s + i} style={{ gridColumn: i + 1, gridRow: 1 }}>
              {line.s + i}
            </div>
          ))}
          {line.items.map((g, i) => (
            <div
              key={i}
              title={`${g.entry.topic} (${g.start}${g.end > g.start ? '–' + g.end : ''})`}
              className={`art-box${g.contFrom ? ' cont-from' : ''}${g.contTo ? ' cont-to' : ''}`}
              style={{
                gridColumn: `${g.cs - line.s + 1} / span ${g.ce - g.cs + 1}`,
                gridRow: g.row,
                '--art-color': g.color,
              }}
            >
              <img src={g.entry.icon} alt="" />
              <span>{g.entry.topic}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
