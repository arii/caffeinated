import React, {type ReactNode} from 'react';
import {
  AbsoluteFill,
  Composition,
  OffthreadVideo,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig
} from 'remotion';
import {
  authorNames,
  boredomConclusion,
  boredomFormula,
  boredomLead,
  eventLine,
  eventSummaryParts,
  hookParts,
  hookTag,
  psychologyParts,
  toolCards
} from './content';

const WIDTH = 1920;
const HEIGHT = 1080;
const FPS = 30;
const COLORS = {
  background: '#1b2a33',
  cream: '#e8d3ad',
  muted: '#bcc8c5',
  teal: '#7faaa1',
  line: '#e8d3ad33',
  dark: '#14212a'
};

type Caption = {text: string; fromSeconds: number; toSeconds: number};
type VideoProps = {speedFactor: number; captions: Caption[]; labVideoPath: string};

function FadeBeat({
  from,
  to,
  children,
  fontSize = 68,
  maxWidth = 1550,
  color = COLORS.cream,
  align = 'center',
  weight = 500,
  italic = false
}: {
  from: number;
  to: number;
  children: ReactNode;
  fontSize?: number;
  maxWidth?: number;
  color?: string;
  align?: 'center' | 'left';
  weight?: number;
  italic?: boolean;
}) {
  const frame = useCurrentFrame();
  if (frame < from || frame >= to) return null;
  const localFrame = frame - from;
  const length = to - from;
  const fadeIn = interpolate(localFrame, [0, 12], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp'
  });
  const fadeOut = interpolate(localFrame, [length - 12, length], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp'
  });
  const opacity = Math.min(fadeIn, fadeOut);
  return (
    <AbsoluteFill
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: align === 'left' ? 'flex-start' : 'center',
        padding: '0 150px',
        pointerEvents: 'none'
      }}
    >
      <div
        style={{
          maxWidth,
          color,
          fontFamily: 'DejaVu Sans, sans-serif',
          fontSize,
          fontWeight: weight,
          lineHeight: 1.19,
          letterSpacing: '-0.035em',
          textAlign: align,
          textWrap: 'balance',
          opacity,
          transform: `translateY(${(1 - opacity) * 18}px)`,
          fontStyle: italic ? 'italic' : 'normal'
        }}
      >
        {children}
      </div>
    </AbsoluteFill>
  );
}

function SceneShell({children, duration}: {children: ReactNode; duration: number}) {
  const frame = useCurrentFrame();
  const fade = interpolate(
    frame,
    [0, 15, duration - 15, duration],
    [0, 1, 1, 0],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}
  );
  return (
    <AbsoluteFill
      style={{
        overflow: 'hidden',
        backgroundColor: COLORS.background,
        backgroundImage:
          'radial-gradient(ellipse at 76% 28%, #40565a55 0%, transparent 36%), radial-gradient(ellipse at 18% 84%, #344d4c55 0%, transparent 32%)',
        color: COLORS.cream,
        opacity: fade
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: 112,
          top: 104,
          width: 44,
          height: 44,
          border: `1px solid ${COLORS.line}`,
          borderRadius: '50%',
          display: 'grid',
          placeItems: 'center',
          color: COLORS.cream,
          fontSize: 25,
          opacity: 0.78
        }}
      >
        ✳
      </div>
      <div
        style={{
          position: 'absolute',
          right: 112,
          top: 105,
          width: 420,
          height: 420,
          borderRadius: '50%',
          border: `1px solid ${COLORS.line}`,
          opacity: 0.28,
          transform: 'translate(38%, -34%)'
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 112,
          right: 112,
          bottom: 82,
          height: 1,
          background: COLORS.line
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 112,
          bottom: 81,
          width: `${Math.max(0, Math.min(100, (frame / duration) * 100))}%`,
          maxWidth: 'calc(100% - 224px)',
          height: 2,
          background: COLORS.cream,
          opacity: 0.8
        }}
      />
      {children}
    </AbsoluteFill>
  );
}

function ContentCard({
  from,
  to,
  children
}: {
  from: number;
  to: number;
  children: ReactNode;
}) {
  const frame = useCurrentFrame();
  if (frame < from || frame >= to) return null;
  const opacity = interpolate(frame, [from, from + 12, to - 12, to], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp'
  });
  return (
    <AbsoluteFill
      style={{
        display: 'grid',
        placeItems: 'center',
        padding: '0 140px',
        opacity
      }}
    >
      <div
        style={{
          width: '100%',
          minHeight: 390,
          padding: '52px 70px',
          boxSizing: 'border-box',
          border: `1px solid ${COLORS.line}`,
          borderRadius: 26,
          background: 'linear-gradient(125deg, #233641e8, #192932e8)',
          boxShadow: '0 34px 90px #08121966'
        }}
      />
      {children}
    </AbsoluteFill>
  );
}

function Hook() {
  return (
    <SceneShell duration={240}>
      <FadeBeat from={0} to={64} fontSize={76}>
        {hookParts[0]}
      </FadeBeat>
      <FadeBeat from={64} to={132} fontSize={76}>
        {hookParts[1]}
      </FadeBeat>
      <FadeBeat from={132} to={174} fontSize={73}>
        {hookParts[2]}
      </FadeBeat>
      <FadeBeat from={174} to={240} fontSize={73}>
        The secret: making AI less boring.
      </FadeBeat>
      <div
        style={{
          position: 'absolute',
          top: '63%',
          left: 112,
          right: 112,
          color: COLORS.muted,
          fontFamily: 'DejaVu Sans, sans-serif',
          fontSize: 36,
          fontWeight: 400,
          letterSpacing: '-0.01em',
          textAlign: 'center'
        }}
      >
        {hookTag}
      </div>
    </SceneShell>
  );
}

function Hackathon() {
  return (
    <SceneShell duration={210}>
      <FadeBeat from={0} to={80} fontSize={61}>
        {eventLine}
      </FadeBeat>
      <FadeBeat from={80} to={145} fontSize={70}>
        {eventSummaryParts[0]}
      </FadeBeat>
      <FadeBeat from={145} to={210} fontSize={70}>
        {eventSummaryParts[1]}
      </FadeBeat>
    </SceneShell>
  );
}

function ToolCard({text, from, to}: {text: string; from: number; to: number}) {
  const frame = useCurrentFrame();
  if (frame < from || frame >= to) return null;
  const local = frame - from;
  const opacity = interpolate(local, [0, 14, to - from - 12, to - from], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp'
  });
  return (
    <AbsoluteFill style={{display: 'grid', placeItems: 'center', padding: '0 150px'}}>
      <div
        style={{
          width: 1450,
          minHeight: 275,
          padding: '54px 74px',
          boxSizing: 'border-box',
          border: `1px solid ${COLORS.line}`,
          borderRadius: 26,
          background: 'linear-gradient(125deg, #233641e8, #192932e8)',
          boxShadow: '0 34px 90px #08121966',
          color: COLORS.cream,
          fontFamily: 'DejaVu Sans, sans-serif',
          fontSize: 58,
          fontWeight: 500,
          lineHeight: 1.25,
          letterSpacing: '-0.035em',
          textAlign: 'center',
          textWrap: 'balance',
          opacity,
          transform: `translateY(${(1 - opacity) * 20}px)`
        }}
      >
        <span style={{color: COLORS.teal, marginRight: 22}}>✳</span>
        {text}
      </div>
    </AbsoluteFill>
  );
}

function Tools() {
  const cardStarts = [0, 61, 122, 183];
  return (
    <SceneShell duration={270}>
      {toolCards.map((text, index) => (
        <ToolCard
          key={text}
          text={text}
          from={cardStarts[index]}
          to={index === toolCards.length - 1 ? 270 : cardStarts[index] + 73}
        />
      ))}
    </SceneShell>
  );
}

function Authors() {
  return (
    <SceneShell duration={120}>
      <FadeBeat from={0} to={120} fontSize={76} italic>
        {authorNames.join(' · ')}
      </FadeBeat>
    </SceneShell>
  );
}

function Boredom() {
  return (
    <SceneShell duration={360}>
      <FadeBeat from={0} to={60} fontSize={60}>
        {psychologyParts[0]}
      </FadeBeat>
      <FadeBeat from={60} to={132} fontSize={60}>
        {psychologyParts[1]}
      </FadeBeat>
      <FadeBeat from={132} to={180} fontSize={34} color={COLORS.muted}>
        {psychologyParts[2]}
      </FadeBeat>
      <FadeBeat from={180} to={252} fontSize={57}>
        {boredomLead}
      </FadeBeat>
      <FadeBeat from={252} to={306} fontSize={50} color={COLORS.cream}>
        {boredomFormula}
      </FadeBeat>
      <FadeBeat from={306} to={360} fontSize={55}>
        {boredomConclusion}
      </FadeBeat>
    </SceneShell>
  );
}

function RealLab({speedFactor, captions, labVideoPath}: VideoProps) {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const seconds = frame / fps;
  const caption = captions.find(
    (item) => seconds >= item.fromSeconds && seconds < item.toSeconds
  );
  const alpha = interpolate(frame, [0, 15, 1125, 1140], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp'
  });
  return (
    <AbsoluteFill style={{backgroundColor: COLORS.dark, opacity: alpha}}>
      <OffthreadVideo
        src={staticFile(labVideoPath)}
        muted
        style={{width: '100%', height: '100%', objectFit: 'cover'}}
      />
      <AbsoluteFill
        style={{
          pointerEvents: 'none',
          background:
            'linear-gradient(180deg, #10182044 0%, transparent 22%, transparent 70%, #10182066 100%)'
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 36,
          right: 42,
          maxWidth: 1250,
          padding: '18px 24px',
          border: `1px solid ${COLORS.cream}66`,
          borderRadius: 8,
          background: '#14212ae8',
          color: COLORS.cream,
          fontFamily: 'DejaVu Sans, sans-serif',
          fontSize: 40,
          fontWeight: 600,
          letterSpacing: '0.01em',
          boxShadow: '0 8px 30px #0008'
        }}
      >
        {speedFactor.toFixed(2)}× speed · replay of a real run (Kimi + Exa + past.dev)
      </div>
      {caption && (
        <div
          style={{
            position: 'absolute',
            left: 76,
            bottom: 164,
            maxWidth: 1120,
            padding: '20px 28px',
            borderLeft: `4px solid ${COLORS.cream}`,
            borderRadius: '0 9px 9px 0',
            background: '#14212ae8',
            color: '#fff8e8',
            fontFamily: 'DejaVu Sans, sans-serif',
            fontSize: 39,
            fontWeight: 500,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            boxShadow: '0 12px 32px #0008'
          }}
        >
          {caption.text}
        </div>
      )}
    </AbsoluteFill>
  );
}

const RESULTS = {
  bixbench: 'BixBench (7 held-out questions): baseline 1/7 → swarm best 6/7',
  bixbenchCaveat: 'one run; 95% CI 0.49–0.97',
  track3Intro: 'Track 3 check — held-out accuracy, higher is better:',
  track3Primary:
    'preregistered primary (stopped early): boredom swarm 0.26 · single agent 0.24 · without meter 0.11',
  track3Results:
    'complete set, picked after it finished: single agent 0.30 · without meter 0.09 · boredom swarm 0.06',
  track3Caveat:
    '3 runs each, not significant; complete-set order depends on a grader fix made after winners were known',
  track3EarlierGrader:
    'earlier grader: single agent 0.07 · without meter 0.09 · boredom swarm 0.06',
  playworld: 'Playworld proxy: loss 0.87 → 0.25 on 200 held-out episodes',
  playworldCaveat: 'synthetic proxy, not official PlayWorld',
  memoryComparison:
    'past.dev vs local memory, same 419 real memories: right memory ranked first 65% vs 30%',
  memoryComparisonParts: [
    'past.dev vs local memory, same 419 real memories:',
    'right memory ranked first 65% vs 30%'
  ],
  memoryComparisonCaveat: '40 hand-written probes; median 562 ms vs 15 ms'
};

function Results() {
  return (
    <SceneShell duration={660}>
      <ContentCard from={0} to={150}>
        <FadeBeat from={0} to={90} fontSize={58}>
          {RESULTS.bixbench}
        </FadeBeat>
        <FadeBeat from={90} to={150} fontSize={41} color={COLORS.muted}>
          {RESULTS.bixbenchCaveat}
        </FadeBeat>
      </ContentCard>
      <ContentCard from={150} to={390}>
        <FadeBeat from={150} to={198} fontSize={47}>
          {RESULTS.track3Intro}
        </FadeBeat>
        <FadeBeat from={198} to={390} fontSize={42} maxWidth={1650}>
          <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
            <div>{RESULTS.track3Primary}</div>
            <div>{RESULTS.track3Results}</div>
            <div style={{color: COLORS.cream, fontSize: 38, lineHeight: 1.15}}>
              {RESULTS.track3Caveat}
            </div>
            <div
              style={{
                color: COLORS.cream,
                fontSize: 38,
                fontWeight: 400,
                lineHeight: 1.15,
                letterSpacing: '-0.02em'
              }}
            >
              {RESULTS.track3EarlierGrader}
            </div>
          </div>
        </FadeBeat>
      </ContentCard>
      <ContentCard from={390} to={510}>
        <FadeBeat from={390} to={459} fontSize={56}>
          {RESULTS.playworld}
        </FadeBeat>
        <FadeBeat from={459} to={510} fontSize={39} color={COLORS.muted}>
          {RESULTS.playworldCaveat}
        </FadeBeat>
      </ContentCard>
      <ContentCard from={510} to={660}>
        <FadeBeat from={510} to={561} fontSize={46}>
          {RESULTS.memoryComparisonParts[0]}
        </FadeBeat>
        <FadeBeat from={561} to={612} fontSize={46}>
          {RESULTS.memoryComparisonParts[1]}
        </FadeBeat>
        <FadeBeat from={612} to={660} fontSize={37} color={COLORS.muted}>
          {RESULTS.memoryComparisonCaveat}
        </FadeBeat>
      </ContentCard>
    </SceneShell>
  );
}

const STUDIES = [
  'Heavier mammals sleep less (msleep, ρ = −0.53)',
  'Students with wider hands are taller (survey, ρ = 0.65)',
  'Hotter ovens, steeper chocolate-cake break angle (cake, ρ = 0.36)',
  'Beer-loving countries also drink more wine (drinks, ρ = 0.72)'
];

function IgNobel() {
  return (
    <SceneShell duration={420}>
      <FadeBeat from={0} to={48} fontSize={40} maxWidth={1650}>
        Pre-committee real run (stopped at round 13/15)
      </FadeBeat>
      <FadeBeat from={48} to={114} fontSize={36} maxWidth={1650}>
        21 registered, 13 run, 11 passed the preregistered gates, 10 also pass the |ρ| ≥ 0.1
        floor added after the run.
      </FadeBeat>
      {STUDIES.map((study, index) => (
        <ContentCard key={study} from={114 + index * 45} to={159 + index * 45}>
          <FadeBeat from={114 + index * 45} to={159 + index * 45} fontSize={48} maxWidth={1500}>
            {study}
          </FadeBeat>
        </ContentCard>
      ))}
      <FadeBeat from={294} to={336} fontSize={40}>
        Known relationships in public teaching datasets — not discoveries.
      </FadeBeat>
      <FadeBeat from={336} to={378} fontSize={38} maxWidth={1600}>
        ρ = 0.07 x/y failed the post-hoc floor; the critic rerun is not a new test.
      </FadeBeat>
      <FadeBeat from={378} to={420} fontSize={40}>
        No committee score has been run yet.
      </FadeBeat>
    </SceneShell>
  );
}

function Close() {
  return (
    <SceneShell duration={180}>
      <FadeBeat from={0} to={72} fontSize={84} weight={600}>
        Artificial Scientist Swarm
      </FadeBeat>
      <FadeBeat from={72} to={120} fontSize={47} color={COLORS.teal}>
        github.com/arii/caffeinated
      </FadeBeat>
      <FadeBeat from={120} to={180} fontSize={50}>
        Every number shown comes from committed real-run artifacts. The committee score has not been run yet.
      </FadeBeat>
    </SceneShell>
  );
}

function Demo({speedFactor, captions, labVideoPath}: VideoProps) {
  return (
    <AbsoluteFill style={{backgroundColor: COLORS.background}}>
      <Sequence from={0} durationInFrames={240}>
        <Hook />
      </Sequence>
      <Sequence from={240} durationInFrames={210}>
        <Hackathon />
      </Sequence>
      <Sequence from={450} durationInFrames={270}>
        <Tools />
      </Sequence>
      <Sequence from={720} durationInFrames={120}>
        <Authors />
      </Sequence>
      <Sequence from={840} durationInFrames={360}>
        <Boredom />
      </Sequence>
      <Sequence from={1200} durationInFrames={1140}>
        <RealLab speedFactor={speedFactor} captions={captions} labVideoPath={labVideoPath} />
      </Sequence>
      <Sequence from={2340} durationInFrames={660}>
        <Results />
      </Sequence>
      <Sequence from={3000} durationInFrames={420}>
        <IgNobel />
      </Sequence>
      <Sequence from={3420} durationInFrames={180}>
        <Close />
      </Sequence>
    </AbsoluteFill>
  );
}

export const DemoVideo = () => (
  <Composition
    id="Demo"
    component={Demo}
    width={WIDTH}
    height={HEIGHT}
    fps={FPS}
    durationInFrames={3600}
    defaultProps={{speedFactor: 1, captions: [], labVideoPath: 'captures/lab-speedup.mp4'}}
  />
);
