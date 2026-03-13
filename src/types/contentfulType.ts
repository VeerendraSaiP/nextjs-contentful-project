export type CardType = {
  sys: { id: string; contentType: { sys: { id: string } } };
  fields: Record<string, unknown>;
};

export type CardGroup = { type: 'cardGroup'; cards: CardType[] };

export type SingleComponent = { type: 'single'; component: CardType };

export type GroupedComponent = CardGroup | SingleComponent;