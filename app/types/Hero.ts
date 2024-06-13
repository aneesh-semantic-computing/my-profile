export interface Profile {
  title: string;
  description: {
    content: {
      type: string;
      content: { text: string }[];
    }[];
  };
  cta_text: string;
  picture: {
    filename: string;
  };
}