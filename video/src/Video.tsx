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
type VideoProps = {speedFactor: number; captions: Caption[]};

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
      <FadeBeat from={0} to={72} fontSize={76}>
        {hookParts[0]}
      </FadeBeat>
      <FadeBeat from={72} to={150} fontSize={76}>
        {hookParts[1]}
      </FadeBeat>
      <FadeBeat from={150} to={201} fontSize={73}>
        The secret: making AI less boring.
      </FadeBeat>
      <FadeBeat from={201} to={240} fontSize={29} color={COLORS.muted}>
        {hookTag}
      </FadeBeat>
    </SceneShell>
  );
}

function Hackathon() {
  return (
    <SceneShell duration={240}>
      <FadeBeat from={0} to={90} fontSize={61}>
        {eventLine}
      </FadeBeat>
      <FadeBeat from={90} to={162} fontSize={70}>
        {eventSummaryParts[0]}
      </FadeBeat>
      <FadeBeat from={162} to={240} fontSize={70}>
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
  const cardStarts = [0, 68, 136, 204];
  return (
    <SceneShell duration={300}>
      {toolCards.map((text, index) => (
        <ToolCard
          key={text}
          text={text}
          from={cardStarts[index]}
          to={index === toolCards.length - 1 ? 300 : cardStarts[index] + 80}
        />
      ))}
    </SceneShell>
  );
}

function Authors() {
  return (
    <SceneShell duration={150}>
      <FadeBeat from={0} to={150} fontSize={76} italic>
        {authorNames.join(' · ')}
      </FadeBeat>
    </SceneShell>
  );
}

function Boredom() {
  return (
    <SceneShell duration={390}>
      <FadeBeat from={0} to={69} fontSize={60}>
        {psychologyParts[0]}
      </FadeBeat>
      <FadeBeat from={69} to={147} fontSize={60}>
        {psychologyParts[1]}
      </FadeBeat>
      <FadeBeat from={147} to={207} fontSize={34} color={COLORS.muted}>
        {psychologyParts[2]}
      </FadeBeat>
      <FadeBeat from={207} to={285} fontSize={57}>
        {boredomLead}
      </FadeBeat>
      <FadeBeat from={285} to={339} fontSize={50} color={COLORS.cream}>
        {boredomFormula}
      </FadeBeat>
      <FadeBeat from={339} to={390} fontSize={55}>
        {boredomConclusion}
      </FadeBeat>
    </SceneShell>
  );
}

function RealLab({speedFactor, captions}: VideoProps) {
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
        src={staticFile('captures/lab-speedup.mp4')}
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
          maxWidth: 820,
          padding: '18px 24px',
          border: `1px solid ${COLORS.cream}66`,
          borderRadius: 8,
          background: '#14212ae8',
          color: COLORS.cream,
          fontFamily: 'DejaVu Sans, sans-serif',
          fontSize: 25,
          fontWeight: 600,
          letterSpacing: '0.01em',
          boxShadow: '0 8px 30px #0008'
        }}
      >
        ▶▶ {speedFactor.toFixed(2)}× speed · replay of a real run (Kimi + Exa + past.dev)
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
  track3Intro: 'Track 3 check — single agent vs swarm, 18 held-out questions:',
  track3Results: 'single agent 0.30 · swarm without meter 0.09 · boredom swarm 0.06',
  track3Caveat: '3 seeds, not significance-tested — the single agent won',
  playworld: 'Playworld proxy: loss 0.87 → 0.25 on 200 held-out episodes',
  playworldCaveat: 'synthetic proxy, not official PlayWorld'
};

function Results() {
  return (
    <SceneShell duration={540}>
      <ContentCard from={0} to={180}>
        <FadeBeat from={0} to={105} fontSize={58}>
          {RESULTS.bixbench}
        </FadeBeat>
        <FadeBeat from={105} to={180} fontSize={41} color={COLORS.muted}>
          {RESULTS.bixbenchCaveat}
        </FadeBeat>
      </ContentCard>
      <ContentCard from={180} to={360}>
        <FadeBeat from={180} to={225} fontSize={47}>
          {RESULTS.track3Intro}
        </FadeBeat>
        <FadeBeat from={225} to={300} fontSize={45}>
          {RESULTS.track3Results}
        </FadeBeat>
        <FadeBeat from={300} to={360} fontSize={34} color={COLORS.muted}>
          {RESULTS.track3Caveat}
        </FadeBeat>
      </ContentCard>
      <ContentCard from={360} to={540}>
        <FadeBeat from={360} to={450} fontSize={56}>
          {RESULTS.playworld}
        </FadeBeat>
        <FadeBeat from={450} to={540} fontSize={39} color={COLORS.muted}>
          {RESULTS.playworldCaveat}
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
      <FadeBeat from={0} to={45} fontSize={47}>
        Pre-committee run: 22 studies registered, 13 run,
      </FadeBeat>
      <FadeBeat from={45} to={90} fontSize={49}>
        12 passed preregistered gates (11 unique)
      </FadeBeat>
      {STUDIES.map((study, index) => (
        <ContentCard key={study} from={90 + index * 45} to={135 + index * 45}>
          <FadeBeat from={90 + index * 45} to={135 + index * 45} fontSize={48} maxWidth={1500}>
            {study}
          </FadeBeat>
        </ContentCard>
      ))}
      <FadeBeat from={270} to={310} fontSize={47}>
        Mostly true — but not surprising.
      </FadeBeat>
      <FadeBeat from={310} to={350} fontSize={45}>
        So we added an Ig Nobel committee score
      </FadeBeat>
      <FadeBeat from={350} to={390} fontSize={42}>
        (laugh × think, two non-Kimi judges).
      </FadeBeat>
      <FadeBeat from={390} to={420} fontSize={31} color={COLORS.muted}>
        committee-scored rerun pending Tinker credit
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
        Everything shown comes from real runs.
      </FadeBeat>
    </SceneShell>
  );
}

function Demo({speedFactor, captions}: VideoProps) {
  return (
    <AbsoluteFill style={{backgroundColor: COLORS.background}}>
      <Sequence from={0} durationInFrames={240}>
        <Hook />
      </Sequence>
      <Sequence from={240} durationInFrames={240}>
        <Hackathon />
      </Sequence>
      <Sequence from={480} durationInFrames={300}>
        <Tools />
      </Sequence>
      <Sequence from={780} durationInFrames={150}>
        <Authors />
      </Sequence>
      <Sequence from={930} durationInFrames={390}>
        <Boredom />
      </Sequence>
      <Sequence from={1320} durationInFrames={1140}>
        <RealLab speedFactor={speedFactor} captions={captions} />
      </Sequence>
      <Sequence from={2460} durationInFrames={540}>
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
    defaultProps={{speedFactor: 1, captions: []}}
  />
);
