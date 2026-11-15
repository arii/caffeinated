import type {RunSnapshot} from './contract';
export function acceptSnapshot(current:RunSnapshot|null,incoming:RunSnapshot):RunSnapshot{
  return current?.runId===incoming.runId&&incoming.lastSequence<current.lastSequence?current:incoming;
}
