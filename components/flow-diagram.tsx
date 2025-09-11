"use client";

import React from 'react';
import ReactFlow, { MiniMap, Controls, Background, BackgroundVariant, MarkerType } from 'reactflow';

import 'reactflow/dist/style.css';

// Estilos para los nodos, para que se parezcan a tu UI
const nodeStyles = {
  base: {
    padding: '10px 15px',
    borderRadius: '8px',
    border: '1px solid var(--border)',
    fontSize: '12px',
    textAlign: 'center' as const,
    minWidth: '180px',
  },
  input: {
    background: 'hsl(var(--primary) / 0.1)',
    color: 'hsl(var(--primary-foreground))',
    borderColor: 'hsl(var(--primary) / 0.2)',
  },
  default: {
    background: 'hsl(var(--card))',
    color: 'hsl(var(--card-foreground))',
  },
  decision: {
    background: 'hsl(48, 95%, 95%)',
    color: 'hsl(36, 83%, 31%)',
    borderColor: 'hsl(43, 96%, 86%)',
  },
  outputSuccess: {
    background: 'hsl(143, 85%, 96%)',
    color: 'hsl(140, 81%, 23%)',
    borderColor: 'hsl(143, 76%, 86%)',
  },
  outputFail: {
    background: 'hsl(0, 85%, 96%)',
    color: 'hsl(0, 81%, 33%)',
    borderColor: 'hsl(0, 76%, 86%)',
  },
};


const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Inicio: Definir f(x), [a,b], ε' },
    position: { x: 250, y: 0 },
    style: { ...nodeStyles.base, ...nodeStyles.input },
  },
  {
    id: '2',
    type: 'default',
    data: { label: 'Verificar Teorema de Bolzano' },
    position: { x: 250, y: 100 },
    style: { ...nodeStyles.base, ...nodeStyles.default },
  },
  {
    id: '3',
    type: 'decision',
    data: { label: '¿f(a) · f(b) < 0?' },
    position: { x: 250, y: 200 },
    style: { ...nodeStyles.base, ...nodeStyles.decision },
  },
  {
    id: '4',
    type: 'output',
    data: { label: 'FIN: No se puede aplicar' },
    position: { x: 500, y: 200 },
    style: { ...nodeStyles.base, ...nodeStyles.outputFail },
  },
  {
    id: '5',
    type: 'default',
    data: { label: 'm = (a + b) / 2' },
    position: { x: 250, y: 325 },
    style: { ...nodeStyles.base, ...nodeStyles.default },
  },
  {
    id: '6',
    type: 'decision',
    data: { label: '¿(b - a) / 2 < ε?' },
    position: { x: 250, y: 425 },
    style: { ...nodeStyles.base, ...nodeStyles.decision },
  },
  {
    id: '7',
    type: 'output',
    data: { label: 'FIN: Raíz ≈ m' },
    position: { x: 250, y: 550 },
    style: { ...nodeStyles.base, ...nodeStyles.outputSuccess },
  },
  {
    id: '8',
    type: 'decision',
    data: { label: '¿f(a) · f(m) < 0?' },
    position: { x: 0, y: 425 },
    style: { ...nodeStyles.base, ...nodeStyles.decision },
  },
  {
    id: '9',
    type: 'default',
    data: { label: 'b = m' },
    position: { x: -150, y: 425 },
    style: { ...nodeStyles.base, ...nodeStyles.default },
  },
  {
    id: '10',
    type: 'default',
    data: { label: 'a = m' },
    position: { x: 0, y: 550 },
    style: { ...nodeStyles.base, ...nodeStyles.default },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e2-3', source: '2', target: '3', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e3-4', source: '3', target: '4', label: 'No', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e3-5', source: '3', target: '5', label: 'Sí', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e5-6', source: '5', target: '6', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e6-7', source: '6', target: '7', label: 'Sí', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e6-8', source: '6', target: '8', label: 'No', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e8-9', source: '8', target: '9', label: 'Sí', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e8-10', source: '8', target: '10', label: 'No', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e9-5', source: '9', target: '5', animated: true, markerEnd: { type: MarkerType.ArrowClosed }, style: { strokeDasharray: '5 5' } },
  { id: 'e10-5', source: '10', target: '5', animated: true, markerEnd: { type: MarkerType.ArrowClosed }, style: { strokeDasharray: '5 5' } },
];

export function FlowDiagram() {
  return (
    <div style={{ height: '600px' }} className="w-full bg-muted/30 rounded-lg border">
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        fitView
        proOptions={{ hideAttribution: true }}
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}