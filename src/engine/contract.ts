import { z } from 'zod';
export const StationIdSchema = z.enum(['culture', 'analyzer', 'explorer', 'notebook']);
export const ExperimentManifestSchema = z.object({
  id: z.string().min(1), title: z.string().min(1), domain: z.string(),
  metric: z.object({ name: z.string(), unit: z.string(), direction: z.enum(['minimize', 'maximize']) }),
  stationId: StationIdSchema, datasetRef: z.string().optional(),
});
export type ExperimentManifest = z.infer<typeof ExperimentManifestSchema>;
const Envelope = z.object({ version: z.literal(1), runId: z.string(), eventId: z.string(), sequence: z.number().int().nonnegative(), time: z.number().nonnegative() });
export const ResearchEventSchema = z.discriminatedUnion('type', [
  Envelope.extend({ type: z.literal('run.started'), payload: z.object({ experiment: ExperimentManifestSchema }) }),
  Envelope.extend({ type: z.literal('agent.updated'), payload: z.object({ id: z.string(), name: z.string(), role: z.string(), state: z.enum(['idle','thinking','working','reviewing']), stationId: StationIdSchema, boredom: z.number().min(0).max(100) }) }),
  Envelope.extend({ type: z.literal('experiment.progress'), payload: z.object({ progress: z.number().min(0).max(1), value: z.number().finite(), boredom: z.number().min(0).max(100) }) }),
  Envelope.extend({ type: z.literal('finding.written'), payload: z.object({ role: z.string(), message: z.string(), sourceRef: z.string().optional() }) }),
  Envelope.extend({ type: z.literal('run.completed'), payload: z.object({ value: z.number().finite() }) }),
]);
export type ResearchEvent = z.infer<typeof ResearchEventSchema>;
// Both real solver adapters and replay/mock adapters implement this boundary.
export interface ResearchAdapter {
  subscribe(onEvent: (event: ResearchEvent) => void): () => void;
  start(experiment: ExperimentManifest): void | Promise<void>;
  pause(): void | Promise<void>;
  dispose(): void;
}
