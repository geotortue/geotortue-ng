import { describe, expect, it } from 'vitest';
import { GTNVector3 } from '@domain/value-objects';
import { GTNQuotientSpaceProjection, type QuotientSpace } from './GTNQuotientSpaceProjection';

// Torus topology (standard wrapping in X and Y). See legacy viewport
const torusSpace: QuotientSpace = {
  latticeWidth: 100,
  latticeHeight: 100,
  xGluingMode: 1,
  yGluingMode: 1
};

// Topology of a Möbius strip (inverted loop-back along X, normal along Y)
const mobiusSpace: QuotientSpace = {
  latticeWidth: 100,
  latticeHeight: 100,
  xGluingMode: -1,
  yGluingMode: 1
};

// Topology of a plane without wrapping (wall)
const infiniteSpace: QuotientSpace = {
  latticeWidth: 100,
  latticeHeight: 100,
  xGluingMode: 0,
  yGluingMode: 0
};

const line = (start: [number, number], end: [number, number]) => ({
  start: new GTNVector3(start[0], start[1], 0),
  end: new GTNVector3(end[0], end[1], 0),
  color: 0,
  width: 1,
  opacity: 1
});

describe('GTNQuotientSpaceProjection', () => {
  it('projects real positions periodically in a torus space (normal wrap)', () => {
    expect(
      GTNQuotientSpaceProjection.projectPosition({ x: 160, y: -115, z: 0 }, torusSpace)
    ).toEqual({
      x: -40,
      y: -15,
      z: 0
    });
  });

  it('splits a real line at a horizontal wrap boundary without a joining segment', () => {
    expect(GTNQuotientSpaceProjection.wrapLine(line([40, 0], [60, 0]), torusSpace)).toMatchObject([
      { start: { x: 40, y: 0 }, end: { x: 50, y: 0 } },
      { start: { x: -50, y: 0 }, end: { x: -40, y: 0 } }
    ]);
  });

  it('clips a line to its visible portion inside the fundamental domain', () => {
    expect(
      GTNQuotientSpaceProjection.clipLine(line([-60, 10], [20, 10]), torusSpace)
    ).toMatchObject({
      start: { x: -50, y: 10 },
      end: { x: 20, y: 10 }
    });
  });

  // --- Nouveaux tests pour valider les comportements topologiques avancés ---

  it('inverts perpendicular coordinates when crossing a non-orientable boundary (Möbius strip)', () => {
    // La ligne part de x=40, traverse le bord droit (x=50) à la hauteur y=20.
    // Sur un ruban de Möbius (xGluingMode = -1), la coordonnée Y doit s'inverser (devenir -20)
    // lorsqu'elle réapparaît du côté gauche (x=-50).
    expect(
      GTNQuotientSpaceProjection.wrapLine(line([40, 20], [60, 20]), mobiusSpace)
    ).toMatchObject([
      { start: { x: 40, y: 20 }, end: { x: 50, y: 20 } },
      { start: { x: -50, y: -20 }, end: { x: -40, y: -20 } }
    ]);
  });

  it('does not split or wrap a line if the gluing mode is set to 0 (no wrapping)', () => {
    // La ligne sort de la cellule fondamentale, mais comme le collage est à 0,
    // elle continue son chemin infiniment sans être ramenée dans la cellule.
    expect(
      GTNQuotientSpaceProjection.wrapLine(line([40, 0], [60, 0]), infiniteSpace)
    ).toMatchObject([{ start: { x: 40, y: 0 }, end: { x: 60, y: 0 } }]);
  });
});
