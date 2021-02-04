// eslint-disable-next-line @typescript-eslint/no-var-requires
const copyDir = require("copy-dir");

export interface ClientSDLEmitterProps {
  clientSDLEmitter: string;
}

export const clientSDLEmitter = () => {
  copyDir.sync(
    "src/generated/graphql/schema.gql",
    "../ClayApp/graphql/schema.gql",
    {
      utimes: true, // keep add time and modify time
      mode: true, // keep file mode
      cover: true, // cover file when exists, default is true
    },
  );
};
