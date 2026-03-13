export type Sys = {
  id: string;
  contentType: {
    sys: {
      id: string;
    };
  };
};

export type ComponentFields = {
  [key: string]: unknown;
  // Card fields
  image?: {
    fields?: {
      file?: {
        url?: string;
      };
    };
  };
  title?: string;
  description?: string;
  // Footer fields
  footerText?: string;
  copyrightText?: string;
};

export type CardComponent = {
  sys: Sys;
  fields: ComponentFields;
};

export type GroupedComponent =
  | { type: "cards"; items: CardComponent[] }
  | { type: string; item: CardComponent };