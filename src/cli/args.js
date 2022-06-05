import { stdout } from 'process';
export const parseArgs = () => {
  let args = process.argv
    .filter(e => e.startsWith('RSS_'))
    .map(val => `${val.split('=')[0]} is ${val.split('=')[1]}`);
  stdout.write(args.join(', '));
};
parseArgs();
