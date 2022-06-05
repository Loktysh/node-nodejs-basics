import { stdout } from 'process';
export const parseEnv = () => {
  const variables = Object.keys(process.env).reduce((acc, key, i) => {
    key.startsWith('RSS_') ? acc.push(`${key}=${Object.values(process.env)[i]}`) : null;
    return acc;
  }, []);
  stdout.write(variables.join('; '));
};
parseEnv();
